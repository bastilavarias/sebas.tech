import React from 'react';
import RootLayoutWrapper from '@/components/layouts/Root';

export const metadata = {
    title: 'Sebastian Curtis Lavarias',
    description:
        "I'm Sebastian Curtis T. Lavarias, and I invite you to explore my humble web portfolio where I demonstrate my abilities and share content related to both technology and Stoicism philosophy.",
};

export default function RootLayout({ children }) {
    return <RootLayoutWrapper>{children}</RootLayoutWrapper>;
}
