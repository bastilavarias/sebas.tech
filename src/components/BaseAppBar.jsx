'use client';

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import MyLogo from '@/assets/my-logo.png';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CustomContactButton from '@/components/CustomContactButton';

export default function BaseAppBar({ isDrawerOpen, onOpenDrawer }) {
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
                    display: { xs: 'none', md: 'block' },
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

    const HamburgerMenu = () => {
        return (
            <IconButton
                edge="start"
                aria-label="menu"
                color="primary"
                sx={{
                    display: { md: 'none' },
                }}
                onClick={() => onOpenDrawer(!isDrawerOpen)}
            >
                <MenuIcon />
            </IconButton>
        );
    };

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
                        <Image src={MyLogo} alt="SebasTech" fill priority />
                    </Avatar>
                    <Box sx={{ flexGrow: 1 }} />
                    <NavigationButtons />
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'block' },
                        }}
                    />
                    <CustomContactButton />
                    <HamburgerMenu />
                </Toolbar>
            </Container>
        </AppBar>
    );
}
