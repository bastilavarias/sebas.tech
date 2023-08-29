'use client';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import MyLogo from '@/assets/my-logo.png';

export default function BaseAppBar() {
    const NavigationButtons = () => {
        const navigations = [
            {
                text: 'HOME',
                href: '/',
            },
            {
                text: 'THE STOA',
                href: '/stoa',
            },
        ];

        return navigations.map((navigation, index) => (
            <Button
                sx={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    paddingX: 3,
                }}
                component={Link}
                href={navigation.href}
                key={index}
            >
                {navigation.text}
            </Button>
        ));
    };

    const ContactButton = () => (
        <Button
            sx={{
                paddingX: 3,
                textTransform: 'capitalize',
                letterSpacing: 2,
            }}
            size="large"
            component={Link}
            href="/contact"
            color="primary"
            variant="contained"
            disableElevation
        >
            Contact Me
        </Button>
    );

    return (
        <AppBar
            position="fixed"
            sx={{ zIndex: 2000, bgcolor: 'background.default' }}
            elevation={0}
        >
            <Container>
                <Toolbar disableGutters>
                    <Avatar
                        component={Link}
                        href="/"
                        variant="square"
                        sx={{ width: 95, height: 95 }}
                    >
                        <Image src={MyLogo} alt="SebasTech" fill />
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }} />
                    <NavigationButtons />
                    <Box sx={{ flexGrow: 1 }} />
                    <ContactButton />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
