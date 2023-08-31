'use client';

import React from 'react';
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
import { useMediaQuery, useTheme } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

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

export default function BaseFooter() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'), {
        noSsr: true,
    });
    const [isPageHydrated, setIsPageHydrated] = React.useState(false);

    React.useEffect(() => {
        setIsPageHydrated(true);
    }, []);

    const Logo = () => {
        return (
            <Box>
                <Avatar variant="square" sx={{ width: 120, height: 120 }}>
                    <Image src={MyLogo} alt="SebasTech" fill />
                </Avatar>
                {!isMobile ? <SocialMediaIcons /> : null}
            </Box>
        );
    };

    const SocialMediaIcons = () => {
        return (
            <Box
                sx={
                    isMobile
                        ? { display: 'block' }
                        : {
                              display: 'flex',
                              justifyContent: 'space-between',
                          }
                }
            >
                <Link
                    href="https://www.youtube.com/channel/UCOhqyKr2hkAINWLgFOoV2tQ"
                    target="_blank"
                    sx={
                        isMobile
                            ? { color: 'white', marginRight: 1 }
                            : { color: 'white' }
                    }
                >
                    <YouTubeIcon />
                </Link>
                <Link
                    href="https://www.linkedin.com/in/sebastian-curtis-lavarias-b20a57175/"
                    target="_blank"
                    sx={
                        isMobile
                            ? { color: 'white', marginRight: 1 }
                            : { color: 'white' }
                    }
                >
                    <LinkedInIcon />
                </Link>
                <Link
                    href="https://www.instagram.com/bastilavarias/"
                    target="_blank"
                    sx={
                        isMobile
                            ? { color: 'white', marginRight: 1 }
                            : { color: 'white' }
                    }
                >
                    <InstagramIcon />
                </Link>
            </Box>
        );
    };

    const CopyrightTypography = () => {
        return (
            <Typography
                variant="subtitle2"
                sx={
                    isMobile
                        ? {
                              paddingTop: 5,
                              textAlign: 'center',
                          }
                        : {}
                }
            >
                &#169;2023 SEBAS.TECH
            </Typography>
        );
    };

    const ContactTypography = () => {
        return (
            <Box
                sx={
                    isMobile
                        ? { display: 'block' }
                        : {
                              display: 'flex',
                              justifyContent: 'flex-end',
                              alignItems: 'center',
                          }
                }
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
        );
    };

    const QuoteFigure = () => {
        return (
            <figure
                style={{
                    margin: 0,
                    textAlign: 'center',
                }}
            >
                <blockquote>
                    You have power over your mind – not outside events. Realize
                    this, and you will find strength.
                </blockquote>
                <figcaption>&mdash; Marcus Aurelius</figcaption>
            </figure>
        );
    };

    const MobileLayout = () => {
        return (
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingBottom: 1,
                    }}
                >
                    <Logo />
                    <SocialMediaIcons />
                </Box>
                <QuoteFigure />
                <CopyrightTypography />
            </Box>
        );
    };

    const DesktopLayout = () => {
        return (
            <>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: 5,
                    }}
                >
                    <Box sx={{ width: '33.33%' }}>
                        <CopyrightTypography />
                    </Box>
                    <Box
                        sx={{
                            width: '33.33%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <Logo />
                    </Box>
                    <Box
                        sx={{
                            width: '33.33%',
                        }}
                    >
                        <ContactTypography />
                    </Box>
                </Box>
                <Box>
                    <QuoteFigure />
                </Box>
            </>
        );
    };

    return (
        <footer>
            <Box
                sx={
                    isMobile
                        ? {
                              bgcolor: 'primary.main',
                              paddingBottom: 5,
                              color: 'white',
                          }
                        : {
                              bgcolor: 'primary.main',
                              paddingY: 5,
                              color: 'white',
                          }
                }
            >
                <Container>
                    {isPageHydrated ? (
                        <React.Fragment>
                            {isMobile ? <MobileLayout /> : <DesktopLayout />}
                        </React.Fragment>
                    ) : (
                        <Skeleton
                            variant="rectangular"
                            sx={{ width: '100%', height: 200 }}
                        />
                    )}
                </Container>
            </Box>
        </footer>
    );
}
