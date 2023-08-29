'use client';

import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import MUILink from '@mui/material/Link';
import Link from 'next/link';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function StoaPostBreadcrumb() {
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                <MUILink
                    component={Link}
                    underline="hover"
                    color="inherit"
                    href="/stoa"
                >
                    Stoa
                </MUILink>
                <Typography color="text.primary">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    animi architecto eius, enim ex excepturi
                </Typography>
            </Breadcrumbs>
        </div>
    );
}
