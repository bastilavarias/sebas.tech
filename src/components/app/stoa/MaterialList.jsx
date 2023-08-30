'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MaterialCard from '@/components/MaterialCard';
import Grid from '@mui/material/Grid';

export default function MaterialList({ materials }) {
    if (materials.length === 0) {
        return null;
    }

    return (
        <Box paddingY={2}>
            <Grid container>
                <Grid xs={12} item>
                    <Typography
                        component="h2"
                        variant="h5"
                        sx={{ marginBottom: 2 }}
                    >
                        Explore more Materials
                    </Typography>
                </Grid>
                <Grid xs={12} item container spacing={1}>
                    {materials.map((material, index) => (
                        <Grid item xs={12} md={4} xl={3} key={index}>
                            <MaterialCard
                                material={material}
                                height="20rem"
                                mode="medium"
                            />
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
}
