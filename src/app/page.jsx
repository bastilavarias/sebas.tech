import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import PortfolioOverviewSection from '@/components/app/root/PortfolioOverviewSection';
import Image from 'next/image';
import StoicImage from '@/assets/stoic.png';
import Box from '@mui/material/Box';

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
                        width: 'auto',
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
