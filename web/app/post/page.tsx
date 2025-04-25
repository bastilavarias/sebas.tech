import CodeBitesList from "@/components/code-bites-list";

export default function Posts() {
    return (
        <section className="space-y-6">
            <div className="mb-12">
                <h2 className="text-lg font-medium text-black dark:text-white">Code Bites</h2>
                <div className="break-words text-sm text-black dark:text-muted-foreground space-y-3">
                    <p>
                        Code Bites is an
                        AI-powered micro blogging system I developed and integrated directly into this portfolio. This automated content pipeline
                        leverages:
                    </p>

                    <ul className="list-disc pl-5 space-y-1">
                        <li>OpenAI's API for technical content generation</li>
                        <li>NodeJS/Express API routes for backend processing</li>
                        <li>CRON jobs via Docker for weekly automation</li>
                    </ul>
                </div>
            </div>

            <CodeBitesList paginate={true} perPage={10}/>
        </section>
    )
}