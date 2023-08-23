import * as React from 'react';
import StoicImage from '@/assets/stoic.png';
import Box from '@mui/material/Box';
import Image from 'next/image';

export default function StoicBanner() {
    return (
        <Box
            sx={{
                width: '100%',
                height: '50vh',
                backgroundColor: 'black',
                position: 'relative',
            }}
            flex
        >
            <Image
                src={StoicImage}
                alt="Stoic"
                quality={75}
                style={{
                    height: '85%',
                    width: 'auto',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            />
        </Box>
    );
}
