'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MaterialCard from '@/components/MaterialCard';
import Grid from '@mui/material/Grid';
import { useMediaQuery, useTheme } from '@mui/material';

export default function FeaturedMaterialsSection({ materials }) {
    const theme = useTheme();
    const featuredMaterialRef = React.useRef(null);
    const [featuredMaterialHeight, setFeaturedMaterialHeight] =
        React.useState(815);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'), {
        noSsr: true,
    });

    React.useEffect(() => {
        if (
            featuredMaterialRef.current &&
            featuredMaterialRef.current.clientHeight > 0
        ) {
            setFeaturedMaterialHeight(featuredMaterialRef.current.clientHeight);
        }
    }, [featuredMaterialRef, materials]);

    const DesktopLayout = () => {
        return (
            <React.Fragment>
                <Grid item xs={12} md={6}>
                    <MaterialCard
                        material={materials[0]}
                        mode="full"
                        height={featuredMaterialHeight + 8} // 8 is the size of the spacing
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    container
                    spacing={1}
                    ref={featuredMaterialRef}
                >
                    {[...materials].slice(1).map((post, index) => (
                        <Grid item md={6} key={index}>
                            <MaterialCard
                                height={featuredMaterialHeight / 2}
                                mode="medium"
                                material={post}
                            />
                        </Grid>
                    ))}
                </Grid>
            </React.Fragment>
        );
    };

    const MobileLayout = () => {
        return (
            <Grid item xs={12} container spacing={1}>
                {[...materials].map((post, index) => (
                    <Grid item xs={12} key={index}>
                        <MaterialCard
                            height="auto"
                            mode="medium"
                            material={post}
                        />
                    </Grid>
                ))}
            </Grid>
        );
    };

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
                {isMobile ? <MobileLayout /> : <DesktopLayout />}
            </Grid>
        </Box>
    );
}
