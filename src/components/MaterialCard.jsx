'use client';

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Link from 'next/link';
import MUILink from '@mui/material/Link';

/*
 *  The prop "mode" could be  full, medium, mini
 * */
export default function MaterialCard({ mode, height, sx }) {
    const CategoryChip = () => {
        return (
            <Chip
                color="primary"
                label="Category"
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
                variant={mode === 'full' ? 'h6' : 'caption'}
                sx={{
                    textDecoration: 'none',
                    display: 'block',
                    ':hover': {
                        cursor: 'pointer',
                        textDecoration: 'underline',
                    },
                }}
                href="/stoa/sample-slug"
            >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                animi architecto eius, enim ex excepturi
            </MUILink>
        );
    };

    const DescriptionTypography = () => {
        const testDescription =
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi architecto eius, enim ex excepturi, illo ipsum iste itaque laudantium nam, natus nisi quasi qui rem sunt vitae voluptatem voluptatibus? Dignissimos dolorem ducimus ea eos quos? Accusamus aspernatur dolorum error, id iure non obcaecati perferendis qui quia quos repellat tenetur totam voluptatem. Blanditiis consequatur debitis ducimus minima nulla odit sunt tempora. Amet dignissimos eveniet nobis vero! Assumenda atque aut beatae dicta distinctio dolore dolorem doloremque dolorum eligendi est et exercitationem facere fugiat hic in laborum minus nisi odio officia omnis optio porro possimus provident quaerat quia velit, vero voluptatibus! Et hic iure modi odit repudiandae, sequi. Beatae facilis itaque quos? Excepturi iusto optio quia rem saepe? Delectus dicta ex explicabo illum in maxime odio voluptatibus. Accusantium, amet dolore error possimus ratione veritatis. Alias, amet aspernatur aut beatae blanditiis consequuntur dolorem, harum ipsam labore laboriosam odit quasi temporibus vel, vero voluptate!';
        if (mode === 'full') {
            return (
                <Typography variant="body2" color="text.secondary">
                    {testDescription}
                </Typography>
            );
        }
    };
    const HeaderImage = () => {
        if (mode === 'full' || mode === 'medium') {
            return (
                <CardMedia
                    sx={{ height: mode === 'full' ? '40%' : '30%' }}
                    image="https://hips.hearstapps.com/hmg-prod/images/5-1669844484.jpg"
                />
            );
        }
    };

    return (
        <Card
            elevation={0}
            sx={{ ...sx, width: '100%', height, borderRadius: 0 }}
        >
            <HeaderImage />
            <CardContent>
                <CategoryChip />
                <TitleTypography />
                <DescriptionTypography />
                <Typography
                    variant="caption"
                    component="div"
                    color="gray"
                    marginTop={5}
                >
                    Posted August 24 2023
                </Typography>
            </CardContent>
        </Card>
    );
}
