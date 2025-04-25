"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Post } from "@/types";

interface CodeBitesListProps {
    perPage: number;
    paginate: boolean;
}

export default function CodeBitesList({ perPage = 3, paginate = false }: CodeBitesListProps) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [stopPagination, setStopPagination] = useState(false);

    const fetchPosts = async () => {
        if (stopPagination) {
            return;
        }

        setLoading(true);
        try {
            const response = await fetch(
                `http://localhost:3000/api/post?page=${page}&perPage=${perPage}&titleOnly=1`
            );
            const { data } = await response.json();
            const _data = data.data;
            setPosts([
                ...posts,
                ..._data.posts
            ]);
            setPage(page + 1)
            if (_data.posts.length < perPage) {
                setStopPagination(true)
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
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

            {
                !stopPagination && !loading &&
                <div>
                    <button
                        onClick={fetchPosts}
                        className="text-sm cursor-pointer py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                    >
                        Load more code bytes
                    </button>
                </div>
            }
        </div>
    );
}
