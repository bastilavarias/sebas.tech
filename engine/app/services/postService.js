require('dotenv').config()

const { OpenAI } = require('openai');
const database = require('../../database')

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const toSlug = (text) => {
    return text
        .toString()
        .normalize('NFKD')                  // Normalize accented characters
        .replace(/[\u0300-\u036f]/g, '')    // Remove diacritics
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, '-')        // Replace non-alphanum with hyphen
        .replace(/^-+|-+$/g, '');
}

const generate = async () => {
    try {
        const topics = [
            "DevOps, Ubuntu Server",
            "Front-end Development focusing on latest version of Vue, React, NextJS, Flutter, CapacitorJS",
            "Back-end Development focusing on PHP, Node.js, Go lang",
        ];
        const minWords = 400;
        const maxWords = 500;

        const existingPosts = await database('posts').select('title');

        const prompt = `
            You're a technical blog writer who creates bite-sized, beginner-friendly tutorials for developers.

            **Your job:**
            - Write an SEO-friendly blog post (${minWords}-${maxWords} words) focused on a **unique topic** related to one of the following areas: ${topics.join(', ')}.
            - The topic must not duplicate any of these existing blog titles: ${existingPosts.map((t, i) => `(${i + 1}) ${t}`).join(', ')}.
            - Explain the concept clearly with a friendly tone, like you're teaching a junior dev.
            - Include code snippets using <pre><code> blocks with proper indentation.
            - Wrap all content in **one <div>** and use Tailwind classes like for utility classes but avoid colors, dark, light classes, and avoid using <main>, <section>, or any layout tags.
            - Use <strong> tags for highlighting keywords.
            - Do NOT use headings (e.g., <h1>, <h2>) — just paragraphs, code blocks, and inline formatting.
            - Your final output must be in **pure JSON** with this format:

            {
                "title": "Your SEO-friendly blog title",
                "content": "<div class='prose w-auto'>Your blog content goes here</div>"
            }

            Generate one blog post now.`;

        const completion = await openai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.7,
        });
        const contentRaw = completion.choices[0].message.content || null;
        const openaiResponseResult = await database('openai_responses').insert({
            prompt,
            content: contentRaw,
        }).returning('id');
        if (contentRaw) {
            const content = JSON.parse(contentRaw)
            await database('posts').insert({
                title: content.title,
                slug: toSlug(content.title),
                content: Buffer.from(content.content, 'utf-8'),
            });
            await database('openai_responses').where('id', openaiResponseResult[0]).update({completed: 1})
        }

        console.log("Content successfully generated!")

    } catch (e) {
        console.error(e)
    }
}

const list = async (payload) => {
    const page = parseInt(payload.query.page) || 1;
    const perPage = parseInt(payload.query.per_page) || 5;
    const titleOnly = parseInt(payload.query.titleOnly) || 0;
    let query = database("posts").orderBy("id", "desc");
    if (titleOnly) {
        query = query.select('id', 'title', 'slug', 'created_at');
    }

    return await query.paginate({ perPage, currentPage: page }).then((posts) => {
        return posts.data.map((post) => {
            // Decode content if not titleOnly
            if (!titleOnly && post.content) {
                post.content = Buffer.from(post.content).toString('utf-8');
            }
            return post;
        });
    });
};

const getOne = async (payload) => {
    const slug = payload.parameters.slug || null;
    if (!slug) {
        return null;
    }
    const post = await database("posts")
        .where("slug", slug)
        .first().then(post => {
            post.content = Buffer.from(post.content).toString('utf-8');

            return post;
        });

    return post;
};


module.exports = { generate, list, getOne};