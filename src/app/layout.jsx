import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BaseAppBar from '@/components/BaseAppBar';
import ThemeRegistry from '@/components/ThemeRegistry';
import BaseFooter from '@/components/BaseFooter/BaseFooter';

export const metadata = {
    title: 'Next.js App Router + Material UI v5',
    description: 'Next.js App Router + Material UI v5',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ThemeRegistry>
                    <BaseAppBar />
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
                </ThemeRegistry>
            </body>
        </html>
    );
}
