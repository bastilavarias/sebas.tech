'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import StoaBanner from '@/components/app/stoa/StoaBanner';
import Post from '@/api/post';
import FeaturedMaterialsSection from '@/components/app/stoa/FeaturedMaterialsSection';
import MaterialList from '@/components/app/stoa/MaterialList';

export default function StoaPage() {
    const getPosts = async () => {
        // const posts = await Post.list();
        // console.log(posts);
    };

    React.useEffect(() => {
        getPosts();
    }, []);
    return (
        <Container disableGutters>
            <Grid container>
                <Grid item xs={12} marginBottom={5}>
                    <FeaturedMaterialsSection />
                </Grid>
                <Grid item xs={12} marginBottom={3}>
                    <StoaBanner />
                </Grid>
                <Grid item xs={12} marginBottom={1}>
                    <MaterialList />
                </Grid>
            </Grid>
        </Container>
    );
}
