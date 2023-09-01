'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BaseAppBar from '@/components/BaseAppBar';
import ThemeRegistry from '@/components/ThemeRegistry';
import BaseFooter from '@/components/BaseFooter';
import BaseDrawer from '@/components/BaseDrawer';

export const metadata = {
    title: 'Sebastian Curtis Lavarias',
    description:
        "I'm Sebastian Curtis T. Lavarias, and I invite you to explore my humble web portfolio where I demonstrate my abilities and share content related to both technology and Stoicism philosophy.",
};

export default function RootLayout({ children }) {
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    return (
        <html lang="en">
            <body>
                <ThemeRegistry>
                    <BaseAppBar
                        isDrawerOpen={isDrawerOpen}
                        onOpenDrawer={setIsDrawerOpen}
                    />
                    <Box
                        component="main"
                        sx={{
                            bgcolor: 'background.default',
                            paddingTop: 16,
                        }}
                    >
                        <Container>{children}</Container>
                    </Box>
                    <BaseFooter />
                    <BaseDrawer
                        isOpen={isDrawerOpen}
                        onOpen={setIsDrawerOpen}
                    />
                </ThemeRegistry>
            </body>
        </html>
    );
}
