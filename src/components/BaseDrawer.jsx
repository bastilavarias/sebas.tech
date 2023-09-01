'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Divider } from '@mui/material';
import CustomContactButton from '@/components/CustomContactButton';

export default function BaseDrawer({ isOpen, onOpen }) {
    const toggleDrawer = (open) => (event) => {
        console.log(open);
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        onOpen(open);
    };

    const CustomList = () => {
        const navigations = [
            {
                text: 'HOME',
                href: '/',
            },
            {
                text: 'THE STOA',
                href: '/stoa',
            },
            {
                text: 'CONTACT ME',
                href: '/contact',
            },
        ];

        return (
            <Box
                sx={{
                    width: 250,
                    bgcolor: 'background.default',
                }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <List sx={{ paddingTop: 12 }}>
                    {navigations.map((navigation, index) => (
                        <ListItem key={index} disablePadding>
                            <ListItemButton
                                color="primary"
                                href={navigation.href}
                            >
                                <ListItemText primary={navigation.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        );
    };

    return (
        <Drawer
            anchor="right"
            open={isOpen}
            onClose={toggleDrawer(false)}
            PaperProps={{
                sx: {
                    bgcolor: 'background.default',
                },
            }}
        >
            <CustomList />
        </Drawer>
    );
}
