'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import StoaBanner from '@/components/app/stoa/StoaBanner';
import FeaturedMaterialsSection from '@/components/app/stoa/FeaturedMaterialsSection';
import MaterialList from '@/components/app/stoa/MaterialList';
import sanityClient from '@/services/sanity';

export default function StoaPage() {
    const [featuredMaterials, setFeaturedMaterials] = React.useState([]);
    const [newMaterials, setNewMaterials] = React.useState([]);

    const getFeaturedMaterials = async () => {
        const materials = await sanityClient.fetch(
            '*[_type == "post"]{title, body, slug, mainImage, categories[]->, _createdAt} | order(_createdAt asc)[0...5]'
        );
        setFeaturedMaterials(materials);
    };

    const getNewMaterials = async () => {
        const _posts = await sanityClient.fetch(
            '*[_type == "post"]{title, body, slug, mainImage, categories[]->, _createdAt} | order(_createdAt desc)'
        );
        setNewMaterials(_posts);
    };

    React.useEffect(() => {
        getFeaturedMaterials();
        getNewMaterials();
    }, []);

    return (
        <Container disableGutters>
            <Grid container>
                <Grid item xs={12} marginBottom={5}>
                    <FeaturedMaterialsSection materials={featuredMaterials} />
                </Grid>
                <Grid item xs={12} marginBottom={3}>
                    <StoaBanner />
                </Grid>
                <Grid item xs={12} marginBottom={1}>
                    <MaterialList materials={newMaterials} />
                </Grid>
            </Grid>
        </Container>
    );
}
