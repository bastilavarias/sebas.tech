import * as React from 'react';
import StoicBanner from '@/components/app/root/StoicBanner';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import NewUploadsSection from '@/components/app/root/NewUploadsSection';
import PortfolioOverviewSection from '@/components/app/root/PortfolioOverviewSection';

export default function HomePage() {
    return (
        <Container disableGutters>
            <Grid container>
                <Grid item xs={12} sx={{ marginBottom: 1 }}>
                    <StoicBanner />
                </Grid>
                <Grid item xs={12} sx={{ marginBottom: 1 }}>
                    <PortfolioOverviewSection />
                </Grid>
                <Grid item xs={12}>
                    <NewUploadsSection />
                </Grid>
            </Grid>
        </Container>
    );
}
