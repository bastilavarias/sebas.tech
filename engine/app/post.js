require('dotenv').config()

const { OpenAI } = require('openai');
const db = require('../db/setup')

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function generatePost() {
    try {
        // const completion = await openai.chat.completions.create({
        //     model: process.env.OPENAI_MODEL,
        //     messages: [
        //         {
        //             role: "user",
        //             content: "Please say hi."
        //         }
        //     ],
        //     temperature: 0.7,
        // });
        // console.log(completion.choices[0].message.content);
        //
        // return completion.choices[0].message.content;
        const title = "🔥 My First BLOB Post";
        const slug = "first-blob-post";
        const htmlContent = `<h1>Hello, World</h1><p>This is <strong>HTML</strong> content stored as a BLOB.</p>`;
        db.run(
            `INSERT INTO posts (title, slug, content) VALUES (?, ?, ?)`,
            [title, slug, Buffer.from(htmlContent)], // convert content to binary
            function (err) {
                if (err) return console.error('Insert failed:', err.message);
                console.log(`Post inserted with ID: ${this.lastID}`);
            }
        );

        console.log("First post inserted!")
        return true

    } catch (e) {
        console.error(e)
    }
}

module.exports = { generatePost };