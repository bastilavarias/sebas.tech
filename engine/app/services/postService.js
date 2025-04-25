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
        const latestPost = await database('openai_responses')
            .select(['id', 'completed'])
            .orderBy('id', 'desc')
            .first() || null;
        if (latestPost) {
            if (!latestPost.completed) {
                return 'Blog not generated.';
            }
        }

        const topics = [
            "Front-end Development focusing on latest version of Vue, React, NextJS and CapacitorJS",
            "Back-end Development focusing on PHP, Node.js, Go lang",
            "DevOps focusing on Docker, AWS and Digital Ocean",
        ];
        const readMinutes = 5;
        const existingTitles = await database('posts').select('title');
        const prompt = `
You're a professional technical blog writer who crafts **bite-sized**, **SEO-friendly**, and **beginner-friendly** tutorials for junior developers.

✍️ **Your Task**:
Generate a **unique and engaging blog post** that:
- Is based on one of these topics: ${topics.join(', ')}.
- Does **NOT duplicate** any of these existing blog titles: ${existingTitles.map((t, i) => `(${i + 1}) ${t.title}`).join(', ')}.
- Should be a ${readMinutes}-minute read (approx. ${readMinutes * 200} words).
- Uses a **clear, friendly tone** — like you're guiding a junior dev 1-on-1.

🧠 **Content Guidelines**:
- Explain concepts with clarity and curiosity.
- Use <pre style="margin: 20px 0;"><code class="language-js"> for code examples.
- Wrap the entire blog post in a single <div> element with **Tailwind classes** like 'prose dark:prose-invert text-sm'.
  - ❗ Avoid layout tags like <main>, <section>, or color-specific Tailwind classes (e.g. text-red-500).
- Use <strong> for keyword emphasis.
- Use:
  - <h3 style="font-weight: bold;"> for all headings
  - <ul class="list-disc"> or <ol class="list-decimal"> for lists
  - <li> for each list item (ensure readable indentation using left padding)
  - <br/> for soft line breaks and separation
- Include relatable metaphors or emojis where it helps simplify or humanize an idea 🧠✨

📦 **Output Format**:
Respond in **pure JSON**, with the following structure:

{
  "title": "Your SEO-optimized blog title",
  "content": "<div class='prose dark:prose-invert text-sm'>Your entire blog content here, including all HTML formatting and don't include the title in this content.</div>"
}

📌 Final Note:
- Favor **originality**. Evaluate which topic feels freshest compared to the existing titles.
- Generate **only one blog post** in this response.

Generate now.
`;

        const completion = await openai.chat.completions.create({
            model: process.env.OPENAI_MODEL,
            messages: [
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 1,
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
            console.log(`Successfully generated a blog at ${new Date().toLocaleDateString()} with title of ${content.title}`)
        }

    } catch (e) {
        console.error(`Blog generation failed: `, e)
        return 'Blog not generated.';
    }

    return 'Blog generated.';
}

const list = async (payload) => {
    const page = parseInt(payload.query.page) || 1;
    const perPage = parseInt(payload.query.perPage) || 5;
    const titleOnly = parseInt(payload.query.titleOnly) || 0;
    let query = database("posts").orderBy("id", "desc");
    if (titleOnly) {
        query = query.select('id', 'title', 'slug', 'created_at');
    }
    const postsPaginated = await query.paginate({ perPage, currentPage: page });
    const totalPages = Math.ceil(postsPaginated.total / perPage) || 1;
    const posts = postsPaginated.data.map((post) => {
        if (!titleOnly && post.content) {
            post.content = Buffer.from(post.content).toString('utf-8');
        }
        return post;
    });

    return {
        posts,
        pagination: {
            totalItems: postsPaginated.total,
            totalPages,
            currentPage: postsPaginated.current_page,
            perPage,
        }
    };
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