import Link from "next/link";
import {ExternalLink} from "lucide-react";

export default function Posts() {
    return (
        <section className="space-y-6">
            <div className="mb-12">
                <h2 className="text-lg font-medium text-black dark:text-white">Code Bites</h2>
                <div className="break-words text-sm text-black dark:text-muted-foreground space-y-3">
                    <p>
                        Code Bites is an
                        AI-powered microblogging system I developed and integrated directly into this portfolio. This automated content pipeline
                        leverages:
                    </p>

                    <ul className="list-disc pl-5 space-y-1">
                        <li>OpenAI's API for technical content generation</li>
                        <li>NodeJS/Express API routes for backend processing</li>
                        <li>CRON jobs via Docker for weekly automation</li>
                    </ul>
                </div>
            </div>

            <Link
                href="/post/post-1"
                className="underline flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors text-sm"
            >
                <ExternalLink className="w-4 h-4 mr-1.5 mt-0.5"/>
                How to Build a Scalable API with Node.js and Express
            </Link>

            <button className="text-sm cursor-pointer">Load more code bytes</button>
        </section>
    )
}