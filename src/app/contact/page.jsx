'use client';

import React from 'react';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Avatar from '@mui/material/Avatar';

export default function ContactPage() {
    const contacts = [
        {
            icon: (
                <React.Fragment>
                    <Avatar sx={{ backgroundColor: 'black' }}>
                        <EmailIcon />
                    </Avatar>
                </React.Fragment>
            ),
            name: 'Email',
            value: 'sebastiancurtislavarias@gmail.com',
        },
        {
            icon: (
                <React.Fragment>
                    <Avatar sx={{ backgroundColor: 'black' }}>
                        <PhoneIcon />
                    </Avatar>
                </React.Fragment>
            ),
            name: 'Contact Number',
            value: '09972217704',
        },
    ];
    const socials = [
        {
            icon: (
                <React.Fragment>
                    <Link
                        href="https://www.youtube.com/channel/UCOhqyKr2hkAINWLgFOoV2tQ"
                        target="_blank"
                        sx={{ color: 'white' }}
                    >
                        <YouTubeIcon />
                    </Link>
                </React.Fragment>
            ),
            name: 'YouTube',
            website: 'https://www.youtube.com/channel/UCOhqyKr2hkAINWLgFOoV2tQ',
        },
        {
            icon: (
                <React.Fragment>
                    <Link
                        href="https://www.linkedin.com/in/sebastian-curtis-lavarias-b20a57175/"
                        target="_blank"
                        sx={{ color: 'white' }}
                    >
                        <LinkedInIcon />
                    </Link>
                </React.Fragment>
            ),
            name: 'LinkedIn',
            website:
                'https://www.linkedin.com/in/sebastian-curtis-lavarias-b20a57175/',
        },
        {
            icon: (
                <React.Fragment>
                    <Link
                        href="https://www.instagram.com/bastilavarias/"
                        target="_blank"
                        sx={{ color: 'white' }}
                    >
                        <InstagramIcon />
                    </Link>
                </React.Fragment>
            ),
            name: 'Instagram',
            website: 'https://www.instagram.com/bastilavarias/',
        },
    ];

    const ContactCard = ({ icon, name, value }) => {
        return (
            <Card
                elevation={0}
                variant="outlined"
                sx={{
                    bgcolor: 'black',
                    borderColor: 'white',
                    display: 'inline-block',
                }}
            >
                <CardHeader
                    avatar={icon}
                    title={
                        <Typography
                            variant="caption"
                            sx={{
                                color: 'white',
                            }}
                        >
                            {name}
                        </Typography>
                    }
                    subheader={
                        <Typography
                            variant="body2"
                            sx={{
                                fontWeight: 'bold',
                                color: 'white',
                            }}
                        >
                            {value}
                        </Typography>
                    }
                />
            </Card>
        );
    };

    const SocialCard = ({ icon, name, website }) => {
        return (
            <Card
                elevation={0}
                variant="outlined"
                sx={{
                    bgcolor: 'black',
                    borderColor: 'white',
                    display: 'inline-block',
                }}
            >
                <CardHeader
                    avatar={icon}
                    title={
                        <Typography
                            variant="subtitle2"
                            sx={{
                                color: 'white',
                            }}
                        >
                            {name}
                        </Typography>
                    }
                    subheader={
                        <Link
                            variant="caption"
                            href={website}
                            target="_blank"
                            sx={{
                                color: 'white',
                                textDecoration: 'underline',
                            }}
                        >
                            Click to Visit...
                        </Link>
                    }
                />
            </Card>
        );
    };

    return (
        <Container disableGutters sx={{ paddingBottom: 5 }}>
            <Card
                elevation={0}
                sx={{
                    width: '100%',
                    bgcolor: 'primary.secondary',
                    height: '70vh',
                }}
            >
                <CardHeader
                    title={
                        <React.Fragment>
                            <Typography
                                variant="h5"
                                component="h1"
                                sx={{ fontWeight: 'bold' }}
                            >
                                Contact Me
                            </Typography>
                        </React.Fragment>
                    }
                    subheader={
                        <React.Fragment>
                            <Typography variant="subtitle2" component="p">
                                Here are my contact list and inquiry form
                            </Typography>
                        </React.Fragment>
                    }
                />
                <CardContent>
                    <Box>
                        {contacts.map((contact, index) => (
                            <ContactCard {...contact} key={index} />
                        ))}
                    </Box>
                    <Box>
                        {socials.map((social, index) => (
                            <SocialCard {...social} key={index} />
                        ))}
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
}
