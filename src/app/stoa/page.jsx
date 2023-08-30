'use client';

import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import sanityClient from '@/services/sanity';
import Typography from '@mui/material/Typography';
import MaterialCard from '@/components/MaterialCard';
import Box from '@mui/material/Box';
import Image from 'next/image';
import StoaImage from '@/assets/stoa.jpg';
import FeaturedMaterialsSection from '@/components/app/stoa/FeaturedMaterialsSection';

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

    const StoaBanner = () => {
        return (
            <>
                <Box
                    sx={{
                        width: '100%',
                        height: '50vh',
                        backgroundColor: 'black',
                        position: 'relative',
                        marginBottom: 3,
                    }}
                    flex
                >
                    <Image
                        src={StoaImage}
                        alt="Stoa"
                        quality={100}
                        style={{
                            height: '100%',
                            width: '100%',
                        }}
                        objectFit="cover"
                    />
                </Box>
                <Typography variant="body1" component="p">
                    The word &quot;Stoa&quot; refers to a covered colonnade or
                    porch in ancient Greek architecture. Stoas were commonly
                    used as places for public gatherings, discussions, and
                    philosophical teachings. They often had rows of columns
                    supporting a roof, providing a shaded and sheltered space
                    for various activities. The term &quot;Stoa&quot; can also
                    refer to specific philosophical schools in ancient Greece,
                    particularly the Stoicism school. Stoicism was a school of
                    philosophy founded in Athens by Zeno of Citium around 300
                    BCE. It emphasized ethics, self-control, rationality, and
                    the idea that individuals can attain tranquility by aligning
                    their actions and attitudes with nature and reason.
                    Prominent Stoic philosophers included Seneca, Epictetus, and
                    the Roman Emperor Marcus Aurelius.
                </Typography>
            </>
        );
    };

    const NewMaterialsSection = () => {
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
                        {newMaterials.map((material, index) => (
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
                    <NewMaterialsSection />
                </Grid>
            </Grid>
        </Container>
    );
}
