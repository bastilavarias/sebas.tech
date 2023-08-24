import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function BaseFooter() {
    return (
        <footer>
            <Box
                sx={{
                    height: 250,
                    bgcolor: 'primary.main',
                    py: 20,
                    color: 'white',
                }}
            >
                <Container></Container>
            </Box>
        </footer>
    );
}
