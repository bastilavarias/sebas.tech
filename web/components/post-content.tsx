"use client";

import { useState, useEffect } from "react";
import { useParams  } from "next/navigation";
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';

export default function PostContent() {
    const { slug } = useParams();
    const [post, setPost] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        const fetchPost = async () => {
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:3000/api/post/single/${slug}`);
                const { data } = await response.json();
                setPost({ ...data.data });
            } catch (error) {
                console.error("Error fetching post:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [slug]);

    useEffect(() => {
        const loadPrismTheme = () => {
            if (theme === "dark") {
                // @ts-ignore
                import('prismjs/themes/prism-tomorrow.css');
            } else {
                // @ts-ignore
                import('prismjs/themes/prism.css');
            }
        };

        loadPrismTheme();

        Prism.highlightAll();
    }, [theme]);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (savedTheme) {
            setTheme(savedTheme);
            document.documentElement.classList.toggle("dark", savedTheme === "dark");
        }
    }, []);

    useEffect(() => {
        Prism.highlightAll();
    }, [post]);

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
                                    {post.created_at ? new Date(post.created_at).toLocaleDateString() : "// Date here"}
                                </small>
                            </div>

                            <div
                                className="prose max-w-none dark:prose-invert text-sm"
                                dangerouslySetInnerHTML={{__html: post.content}}
                            />
                        </>
                    ) : (
                        <p className="text-sm">Post not found.</p>
                    )}
                </div>
            )}
        </section>
    );
}
