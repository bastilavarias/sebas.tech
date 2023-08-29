import * as React from 'react';
import StoaImage from '@/assets/stoa.jpg';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

export default function StoaBanner() {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    height: '50vh',
                    backgroundColor: 'black',
                    position: 'relative',
                    marginBottom: 3,
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
            <Typography variant="body1" component="p">
                The word "Stoa" refers to a covered colonnade or porch in
                ancient Greek architecture. Stoas were commonly used as places
                for public gatherings, discussions, and philosophical teachings.
                They often had rows of columns supporting a roof, providing a
                shaded and sheltered space for various activities. The term
                "Stoa" can also refer to specific philosophical schools in
                ancient Greece, particularly the Stoicism school. Stoicism was a
                school of philosophy founded in Athens by Zeno of Citium around
                300 BCE. It emphasized ethics, self-control, rationality, and
                the idea that individuals can attain tranquility by aligning
                their actions and attitudes with nature and reason. Prominent
                Stoic philosophers included Seneca, Epictetus, and the Roman
                Emperor Marcus Aurelius.
            </Typography>
        </>
    );
}
