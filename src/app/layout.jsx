import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import BaseAppBar from '@/components/BaseAppBar';
import ThemeRegistry from '@/components/ThemeRegistry';
import BaseFooter from '@/components/BaseFooter';

export const metadata = {
    title: 'Sebastian Curtis Lavarias',
    description: 'Next.js App Router + Material UI v5',
};

export default function RootLayout({ children, deviceType }) {
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
