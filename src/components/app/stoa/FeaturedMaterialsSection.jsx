'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MaterialCard from '@/components/MaterialCard';
import Grid from '@mui/material/Grid';

export default function FeaturedMaterialsSection({ materials }) {
    const featuredMaterialRef = React.useRef(null);
    const [featuredMaterialHeight, setFeaturedMaterialHeight] =
        React.useState(0);

    React.useEffect(() => {
        if (
            featuredMaterialRef.current &&
            featuredMaterialRef.current.clientHeight > 0
        ) {
            setFeaturedMaterialHeight(featuredMaterialRef.current.clientHeight);
        }
    }, [featuredMaterialRef, materials]);

    if (materials.length === 0) {
        return null;
    }

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
                <Grid item xs={12} md={6}>
                    <MaterialCard
                        height={featuredMaterialHeight - 20}
                        mode="full"
                        material={materials[0]}
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
                        <Grid item xs={12} md={6} key={index}>
                            <MaterialCard
                                height={400}
                                mode="medium"
                                material={post}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
}
