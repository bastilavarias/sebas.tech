import React from 'react';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function CustomContactButton() {
    return (
        <Button
            sx={{
                display: { xs: 'none', md: 'block' },
                paddingX: 3,
                textTransform: 'capitalize',
                letterSpacing: 2,
            }}
            size="large"
            component={Link}
            href="/contact"
            color="primary"
            variant="contained"
            disableElevation
        >
            Contact Me
        </Button>
    );
}
