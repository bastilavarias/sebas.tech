'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MaterialCard from '@/components/MaterialCard';
import Grid from '@mui/material/Grid';

export default function ContentsSection() {
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
            <Typography
                component="h2"
                variant="h5"
                sx={{ textTransform: 'uppercase', marginBottom: 2 }}
            >
                Materials
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6} ref={featuredMaterialRef}>
                    <MaterialCard height="100%" mode="full" />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    container
                    columnSpacing={1}
                    sx={{ height: featuredMaterialHeight }}
                >
                    <Grid item md={6} sx={{ height: '100%' }} rowSpacing={1}>
                        {[1, 2].map((n) => (
                            <MaterialCard height="50%" mode="medium" key={n} />
                        ))}
                    </Grid>
                    <Grid item md={6} sx={{ height: '100%' }} rowSpacing={1}>
                        {[1, 2, 3, 4].map((n) => (
                            <MaterialCard height="25%" mode="mini" key={n} />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
