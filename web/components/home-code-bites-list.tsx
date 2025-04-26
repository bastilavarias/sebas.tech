"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PostPreview } from "@/types";

export default function HomeCodeBitesList() {
    const [posts, setPosts] = useState<PostPreview[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/post?page=1&perPage=3&titleOnly=1`
                );
                const { data } = await response.json();
                const posts = data.data.posts;
                setPosts(posts);

            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };


        fetchPosts();
    }, []);


    return (
        <div className="space-y-5">
            {loading ? (
                <div className="text-center py-6 text-sm">Loading...</div>
            ) : (
                <div>
                    {posts.length === 0 ? (
                        <p className="text-sm">No posts found.</p>
                    ) : (
                        posts.map((post) => (
                            <div key={post.id} className="break-words text-sm">
                                <Link
                                    href={`/post/${post.slug}`} // Assuming slug is used for routing
                                    className="underline flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors text-sm"
                                >
                                    <ExternalLink className="w-4 h-4 mr-1.5 mt-0.5" />
                                    {post.title}
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
}
