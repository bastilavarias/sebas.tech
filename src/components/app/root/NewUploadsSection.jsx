import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContentCard from '@/components/ContentCard';
import Grid from '@mui/material/Grid';

export default function NewUploadsSection() {
    return (
        <Box paddingY={2}>
            <Typography
                component="h2"
                variant="h5"
                sx={{ textTransform: 'uppercase', paddingBottom: 2 }}
            >
                New Contents
            </Typography>
            <Grid container spacing={2}>
                {[1, 2, 3].map((n) => (
                    <Grid item xs={12} md={6} lg={4} xl={3} key={n}>
                        <ContentCard />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
