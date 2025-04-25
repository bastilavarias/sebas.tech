"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface CodeBitesListProps {
    perPage: number;
    paginate: boolean;
}

export default function CodeBitesList({perPage = 3, paginate = false}: CodeBitesListProps) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch(
                    `http://localhost:3000/api/post?page=${page}&perPage=${perPage}&titleOnly=1`
                );
                const {data} = await response.json();
                setPosts(data.data);
            } catch (error) {
                console.error("Error fetching posts:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [page, perPage]);

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
                                    <ExternalLink className="w-4 h-4 mr-1.5 mt-0.5"/>
                                    {post.title}
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            )}

            {
                paginate &&
                <div>
                    <button className="text-sm cursor-pointer">Load more code bytes</button>
                </div>
            }
        </div>
    );
}