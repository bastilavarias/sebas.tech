import * as React from 'react';
import StoaImage from '@/assets/stoa.jpg';
import Box from '@mui/material/Box';
import Image from 'next/image';

export default function StoaPostBanner() {
    return (
        <Box
            sx={{
                width: '100%',
                height: 'auto',
                position: 'relative',
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
    );
}
