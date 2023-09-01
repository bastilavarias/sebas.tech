'use client';

import React from 'react';
import Grid from '@mui/material/Grid';
import StoaPostBreadcrumb from '@/components/app/stoa/post/Breadcrumb';
import MaterialCard from '@/components/MaterialCard';
import Typography from '@mui/material/Typography';
import sanityClient from '@/services/sanity';
import { sanityImageUrlFor } from '@/services/sanity';
import { PortableText } from '@portabletext/react';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { useMediaQuery, useTheme } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';

const PortableTextComponents = {
    block: {
        blockquote: ({ children }) => (
            <blockquote
                style={{
                    borderLeft: '5px solid #ccc',
                    margin: '1.5em 10px',
                    padding: '0.3em 10px',
                    quotes: '"\\201C""\\201D""\\2018""\\2019"',
                    ':before': {
                        color: '#ccc',
                        content: 'open-quote',
                        lineHeight: '0.1em',
                        marginRight: '0.25em',
                        verticalAlign: '-0.4em',
                    },
                    p: {
                        display: 'inline',
                    },
                }}
            >
                <p>&quot;{children}&quot;</p>
            </blockquote>
        ),
    },
};

export default function StoaPostContent({ params }) {
    const theme = useTheme();
    const [material, setMaterial] = React.useState(null);
    const [suggestedMaterials, setSuggestedMaterials] = React.useState([]);
    const [newMaterials, setNewMaterials] = React.useState([]);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'), {
        noSsr: true,
    });
    const [isPageHydrated, setIsPageHydrated] = React.useState(false);
    const [isFetchingContents, setIsFetchingContents] = React.useState(true);

    const getMaterial = async () => {
        const materials = await sanityClient.fetch(
            '*[_type == "post" && slug.current == $slug]{title, body, slug, mainImage, categories[]->, _createdAt}',
            { slug: params.slug }
        );
        setMaterial(materials[0]);
    };

    const getSuggestedMaterials = async () => {
        const _posts = await sanityClient.fetch(
            '*[_type == "post" && title != $title && $category in categories[]->title]{title, body, slug, mainImage, categories[]->, _createdAt} | order(_createdAt desc)[0...4]',
            { title: material.title, category: material.categories[0].title }
        );
        setSuggestedMaterials(_posts);
    };

    const getNewMaterials = async () => {
        const _posts = await sanityClient.fetch(
            '*[_type == "post" && title != $title]{title, body, slug, mainImage, categories[]->, _createdAt} | order(_createdAt desc)[0...4]',
            { title: material.title }
        );
        setNewMaterials(_posts);
    };

    const MainImageBanner = () => {
        return (
            <Box
                sx={{
                    width: '100%',
                    height: 'auto',
                }}
            >
                <Image
                    src={sanityImageUrlFor(material.mainImage).url()}
                    alt={material.title}
                    quality={50}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{ width: '100%', height: 'auto' }}
                />
            </Box>
        );
    };

    const CategoryChip = () => {
        return (
            <Chip
                color="primary"
                label={material.categories[0].title}
                sx={{ borderRadius: 0, marginBottom: 1, marginY: 3 }}
            ></Chip>
        );
    };
    const TitleTypography = () => {
        return (
            <Typography
                variant="h5"
                component="h1"
                sx={{
                    fontWeight: 'bold',
                }}
            >
                {material.title}
            </Typography>
        );
    };

    const NewMaterialsSection = () => {
        return (
            <>
                <Typography
                    variant="subtitle2"
                    component="h6"
                    sx={{ paddingY: 2 }}
                >
                    New materials
                </Typography>
                <Grid item xs={12} container spacing={1}>
                    {newMaterials.map((material, index) => (
                        <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
                            <MaterialCard
                                material={material}
                                height={isMobile ? 'auto' : '20rem'}
                                mode="medium"
                            />
                        </Grid>
                    ))}
                </Grid>
            </>
        );
    };

    const SuggestedMaterialSection = () => {
        return (
            <>
                {suggestedMaterials.length > 0 ? (
                    <Typography
                        variant="subtitle2"
                        component="h6"
                        sx={{ paddingBottom: 2 }}
                    >
                        Suggested Materials
                    </Typography>
                ) : null}
                {suggestedMaterials.map((material, index) => (
                    <MaterialCard
                        height="auto"
                        material={material}
                        mode={isMobile ? 'medium' : 'mini'}
                        sx={{ marginBottom: 1 }}
                        key={index}
                    />
                ))}
            </>
        );
    };

    React.useEffect(() => {
        setIsPageHydrated(true);
        const fetchData = async () => {
            await getMaterial();
        };

        fetchData();
    }, []);

    React.useEffect(() => {
        const fetchData = async () => {
            await getSuggestedMaterials();
            await getNewMaterials();
        };

        if (material) {
            fetchData().finally(() => {
                setIsFetchingContents(false);
            });
        }
    }, [material]);

    const PageContent = () => {
        return (
            <React.Fragment>
                <Grid item xs={12} sx={{ marginBottom: 5 }}>
                    <StoaPostBreadcrumb title={material.title} />
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                    sx={{ marginBottom: 5 }}
                >
                    <Grid item xs={12} md={10} lg={9} xl={8} container>
                        <Grid item xs={12}>
                            <MainImageBanner />
                            <CategoryChip />
                            <TitleTypography />
                            <PortableText
                                value={material.body}
                                components={PortableTextComponents}
                            />
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={2} lg={3} xl={4}>
                        <SuggestedMaterialSection />
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <NewMaterialsSection />
                </Grid>
            </React.Fragment>
        );
    };

    const PageSkeletonLoaders = () => {
        return (
            <React.Fragment>
                <Grid item xs={12} sx={{ marginBottom: 5 }}>
                    <Typography
                        variant="h5"
                        width="40%"
                        sx={{ marginBottom: 2 }}
                    >
                        <Skeleton />
                    </Typography>
                </Grid>
                <Grid
                    item
                    container
                    xs={12}
                    spacing={2}
                    sx={{ marginBottom: 5 }}
                >
                    <Grid item xs={12} md={10} lg={9} xl={8} container>
                        <Grid item xs={12}>
                            <Skeleton
                                variant="rectangular"
                                sx={{
                                    width: '100%',
                                    height: 400,
                                    marginBottom: 2,
                                }}
                            />
                            <Typography
                                variant="caption"
                                width="20%"
                                sx={{ marginBottom: 2 }}
                            >
                                <Skeleton />
                            </Typography>
                            <Typography
                                variant="h3"
                                width="40%"
                                sx={{ marginBottom: 2 }}
                            >
                                <Skeleton />
                            </Typography>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                                <Skeleton key={n} />
                            ))}
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        container
                        spacing={1}
                        xs={12}
                        md={2}
                        lg={3}
                        xl={4}
                    >
                        <Grid item xs={12}>
                            <Skeleton
                                variant="rectangular"
                                sx={{
                                    width: '100%',
                                    height: '5rem',
                                    marginBottom: 1,
                                }}
                            />
                            <Skeleton
                                variant="rectangular"
                                sx={{ width: '100%', height: '5rem' }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    };

    return (
        <Grid container sx={{ paddingBottom: 5 }}>
            {isPageHydrated && material && !isFetchingContents ? (
                <PageContent />
            ) : (
                <PageSkeletonLoaders />
            )}
        </Grid>
    );
}
