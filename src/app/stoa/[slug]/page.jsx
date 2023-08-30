'use client';

import * as React from 'react';
import StoaPostBanner from '@/components/app/stoa/post/PostBanner';
import Grid from '@mui/material/Grid';
import StoaPostBreadcrumb from '@/components/app/stoa/post/Breadcrumb';
import MaterialCard from '@/components/MaterialCard';
import Typography from '@mui/material/Typography';
import sanityClient from '@/services/sanity';
import { sanityImageUrlFor } from '@/services/sanity';
import { PortableText } from '@portabletext/react';
import Chip from '@mui/material/Chip';

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

export default function StoaPost({ params }) {
    const [material, setMaterial] = React.useState(null);
    const [suggestedMaterials, setSuggestedMaterials] = React.useState([]);
    const [newMaterials, setNewMaterials] = React.useState([]);

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
                        <Grid item xs={3} md={6} lg={4} xl={3} key={index}>
                            <MaterialCard
                                material={material}
                                height="20rem"
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
                <Typography
                    variant="subtitle2"
                    component="h6"
                    sx={{ paddingBottom: 2 }}
                >
                    Suggested materials
                </Typography>
                {suggestedMaterials.map((material, index) => (
                    <MaterialCard
                        material={material}
                        mode="mini"
                        sx={{ marginBottom: 1 }}
                        key={index}
                    />
                ))}
            </>
        );
    };

    React.useEffect(() => {
        getMaterial();
    }, []);

    React.useEffect(() => {
        if (material) {
            getSuggestedMaterials();
            getNewMaterials();
        }
    }, [material]);

    if (!material) {
        return <div></div>;
    }

    return (
        <Grid container sx={{ paddingBottom: 5 }}>
            <Grid item xs={12} sx={{ marginBottom: 5 }}>
                <StoaPostBreadcrumb title={material.title} />
            </Grid>
            <Grid item container xs={12} spacing={2} sx={{ marginBottom: 5 }}>
                <Grid item xs={9} container>
                    <Grid item xs={12}>
                        <StoaPostBanner
                            title={material.title}
                            src={sanityImageUrlFor(material.mainImage)}
                        />
                        <CategoryChip />
                        <TitleTypography />
                        <PortableText
                            value={material.body}
                            components={PortableTextComponents}
                        />
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <SuggestedMaterialSection />
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <NewMaterialsSection />
            </Grid>
        </Grid>
    );
}
