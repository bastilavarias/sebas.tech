import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function BaseFooter() {
    return (
        <footer>
            <Box
                sx={{
                    height: 250,
                    bgcolor: 'primary.main',
                    py: 5,
                    color: 'white',
                }}
            >
                <Container>
                    <Typography variant="body1" align="center">
                        <q>
                            Build a future where people live in harmony with
                            nature.
                        </q>
                    </Typography>
                </Container>
            </Box>
        </footer>
    );
}
