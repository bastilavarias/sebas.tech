"use client";

import { useState, useEffect } from "react";
import { useParams  } from "next/navigation";

export default function PostViewer() {
    const {slug} = useParams();
    console.log(slug)

    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:3000/api/post/single/${slug}`);
                const {data} = await response.json();
                setPost(data.data);
                console.log(data)
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    return (
        <section>
            {loading ? (
                <div className="text-center py-6 text-sm">Loading...</div>
            ) : (
                <div>
                    {post ? (
                        <>
                            <div className="mb-12">
                                <h1 className="text-lg font-medium text-black dark:text-white">
                                    {post.title || "// Title here"}
                                </h1>
                                <small className="text-muted-foreground text-xs">
                                    {new Date(post.created_at).toLocaleDateString() || "// Date here"}
                                </small>
                            </div>

                            <div className="text-sm" id="content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                        </>
                    ) : (
                        <p className="text-sm">Post not found.</p>
                    )}
                </div>
            )}
        </section>
    );
}
