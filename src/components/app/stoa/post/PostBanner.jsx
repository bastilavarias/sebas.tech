import * as React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';

export default function StoaPostBanner({ title, src }) {
    return (
        <Box
            sx={{
                width: '100%',
                height: 'auto',
            }}
        >
            <Image
                src={src.url()}
                alt={title}
                quality={50}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
            />
        </Box>
    );
}
