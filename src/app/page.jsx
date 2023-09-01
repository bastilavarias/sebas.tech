import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import PortfolioOverviewSection from '@/components/app/root/PortfolioOverviewSection';
import Image from 'next/image';
import StoicImage from '@/assets/stoic.png';
import Box from '@mui/material/Box';
import {
    SELF_DESCRIPTION,
    SELF_NAME,
    SITE_LOGO,
    SITE_NAME,
    SITE_URL,
} from '@/consts';

export const metadata = {
    title: SELF_NAME,
    description: SELF_DESCRIPTION,
    openGraph: {
        title: SELF_NAME,
        description: SELF_DESCRIPTION,
        url: SITE_URL,
        siteName: SITE_NAME,
        images: [
            {
                url: SITE_LOGO,
                width: 1800,
                height: 1600,
                alt: 'SebasTech Logo',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
};

export default function HomePage() {
    const StoicBanner = () => {
        return (
            <Box
                sx={{
                    width: '100%',
                    height: '50vh',
                    backgroundColor: 'black',
                    position: 'relative',
                }}
                flex
            >
                <Image
                    src={StoicImage}
                    alt="Stoic"
                    quality={75}
                    style={{
                        height: '85%',
                        width: '100%',
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                    }}
                />
            </Box>
        );
    };

    return (
        <Container disableGutters>
            <Grid container>
                <Grid item xs={12} marginBottom={1}>
                    <StoicBanner />
                </Grid>
                <Grid item xs={12}>
                    <PortfolioOverviewSection />
                </Grid>
            </Grid>
        </Container>
    );
}
