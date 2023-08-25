'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import MyLogo from '@/assets/my-logo.png';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function BaseFooter() {
    const contacts = [
        {
            type: 'Contact Number',
            value: '+639972217704',
        },
        {
            type: 'Email',
            value: 'sebastiancurtislavarias@gmail.com',
        },
    ];

    return (
        <footer>
            <Box
                sx={{
                    bgcolor: 'primary.main',
                    paddingY: 5,
                    color: 'white',
                }}
            >
                <Container>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: 5,
                        }}
                    >
                        <Box sx={{ width: '33.33%' }}>
                            <Typography variant="subtitle2">
                                &#169;2023 SEBAS.TECH
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                width: '33.33%',
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
                            <Box>
                                <Avatar
                                    variant="square"
                                    sx={{ width: 120, height: 120 }}
                                >
                                    <Image src={MyLogo} alt="SebasTech" fill />
                                </Avatar>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                    }}
                                >
                                    <Link
                                        href="https://www.youtube.com/channel/UCOhqyKr2hkAINWLgFOoV2tQ"
                                        target="_blank"
                                        sx={{ color: 'white' }}
                                    >
                                        <YouTubeIcon />
                                    </Link>
                                    <Link
                                        href="https://www.linkedin.com/in/sebastian-curtis-lavarias-b20a57175/"
                                        target="_blank"
                                        sx={{ color: 'white' }}
                                    >
                                        <LinkedInIcon />
                                    </Link>
                                    <Link
                                        href="https://www.instagram.com/bastilavarias/"
                                        target="_blank"
                                        sx={{ color: 'white' }}
                                    >
                                        <InstagramIcon />
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: '33.33%',
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',
                                }}
                            >
                                <Box>
                                    {contacts.map((contact, index) => (
                                        <Box
                                            sx={{
                                                display: 'flex',
                                            }}
                                            key={index}
                                        >
                                            <Typography
                                                variant="subtitle2"
                                                sx={{ marginRight: 1 }}
                                            >
                                                {contact.type}:
                                            </Typography>
                                            <Typography
                                                variant="subtitle2"
                                                sx={{ fontWeight: 'bold' }}
                                            >
                                                {contact.value}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <figure
                            style={{
                                margin: 0,
                                textAlign: 'center',
                            }}
                        >
                            <blockquote>
                                You have power over your mind – not outside
                                events. Realize this, and you will find
                                strength.
                            </blockquote>
                            <figcaption>&mdash; Marcus Aurelius</figcaption>
                        </figure>
                    </Box>
                </Container>
            </Box>
        </footer>
    );
}
