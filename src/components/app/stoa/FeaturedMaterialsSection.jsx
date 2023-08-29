'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MaterialCard from '@/components/MaterialCard';
import Grid from '@mui/material/Grid';

export default function FeaturedMaterialsSection() {
    const featuredMaterialRef = React.useRef(null);
    const [featuredMaterialHeight, setFeaturedMaterialHeight] =
        React.useState(0);

    React.useEffect(() => {
        if (featuredMaterialRef.current.clientHeight > 0) {
            setFeaturedMaterialHeight(featuredMaterialRef.current.clientHeight);
        }
    }, [featuredMaterialHeight]);

    return (
        <Box paddingY={2}>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography
                        component="h2"
                        variant="h5"
                        sx={{ marginBottom: 2, fontWeight: 'bold' }}
                    >
                        Welcome to the Stoa
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} ref={featuredMaterialRef}>
                    <MaterialCard height="100%" mode="full" />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    container
                    sx={{
                        height: featuredMaterialHeight,
                    }}
                >
                    {[1, 2, 3, 4].map((n) => (
                        <Grid item md={6} key={n}>
                            <MaterialCard height="100%" mode="medium" />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
}
