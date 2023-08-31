'use client';

import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import MUILink from '@mui/material/Link';
import Link from 'next/link';

const handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
};

export default function StoaPostBreadcrumb({ title }) {
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
                <Typography color="text.primary">{title}</Typography>
            </Breadcrumbs>
        </div>
    );
}
