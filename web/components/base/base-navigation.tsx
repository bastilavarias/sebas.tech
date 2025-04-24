'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { cn } from "@/lib/utils";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const pathname = usePathname();
    const isActive = pathname === href ||
        (href !== '/' && pathname.startsWith(href));

    return (
        <Link
            href={href}
            className={cn(
                "underline transition-colors",
                isActive
                    ? "text-black dark:text-white font-medium"
                    : "text-muted-foreground hover:text-foreground"
            )}
        >
            {children}
        </Link>
    );
}

export default function BaseNavigation() {
    return (
        <div className="flex justify-center space-x-4 mb-12">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/post">Code Bites</NavLink>
        </div>
    );
}