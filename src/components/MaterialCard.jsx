'use client';

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Link from 'next/link';
import MUILink from '@mui/material/Link';
import { sanityImageUrlFor, sanityToPlainText } from '@/services/sanity';
import Image from 'next/image';

/*
 *  The prop "mode" could be  full, medium, mini
 * */
export default function MaterialCard({ mode, sx, material, height }) {
    const CategoryChip = () => {
        return (
            <Chip
                color="primary"
                label={material.categories[0].title}
                sx={{ borderRadius: 0, marginBottom: 1 }}
                size="small"
            ></Chip>
        );
    };

    const TitleTypography = () => {
        return (
            <MUILink
                component={Link}
                gutterBottom
                variant={mode === 'full' ? 'h6' : 'subtitle1'}
                sx={{
                    textDecoration: 'none',
                    display: 'block',
                    ':hover': {
                        cursor: 'pointer',
                        textDecoration: 'underline',
                    },
                }}
                href={`/stoa/${material.slug.current}`}
            >
                {material.title}
            </MUILink>
        );
    };

    const DescriptionTypography = () => {
        if (mode === 'full' || mode === 'medium') {
            return (
                <Typography
                    variant="body2"
                    color="text.secondary"
                    nowrap="true"
                    sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: mode === 'full' ? '15' : '2',
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {sanityToPlainText(material.body)}
                </Typography>
            );
        }
    };

    const HeaderImage = () => {
        if (mode === 'full' || mode === 'medium') {
            return (
                <CardMedia sx={{ height: '40%' }}>
                    <div
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <Image
                            src={sanityImageUrlFor(material.mainImage).url()}
                            alt={material.title}
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: '100%', height: '100%' }}
                            priority
                        />
                    </div>
                </CardMedia>
            );
        }
    };

    if (!material) {
        return <div></div>;
    }

    return (
        <Card
            elevation={0}
            sx={{
                ...sx,
                width: '100%',
                height: height ? height : 'auto',
                borderRadius: 0,
            }}
        >
            <HeaderImage />
            <CardContent>
                <CategoryChip />
                <TitleTypography />
                <DescriptionTypography />
            </CardContent>
        </Card>
    );
}
