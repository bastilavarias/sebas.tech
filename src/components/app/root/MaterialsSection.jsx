import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MaterialCard from '@/components/MaterialCard';
import Grid from '@mui/material/Grid';

export default function ContentsSection() {
    return (
        <Box paddingY={2}>
            <Typography
                component="h2"
                variant="h5"
                sx={{ textTransform: 'uppercase', paddingBottom: 2 }}
            >
                Materials
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            bgcolor: 'gray',
                            height: 600,
                            width: '100%',
                        }}
                    ></Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={1}>
                        <Grid item md={6}>
                            <Grid container spacing={1}>
                                {[1, 2].map((n) => (
                                    <Grid item xs={12} key={n}>
                                        <Box
                                            sx={{
                                                bgcolor: 'gray',
                                                height: 300,
                                                width: '100%',
                                            }}
                                        ></Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                        <Grid item md={6}>
                            <Grid container spacing={1}>
                                {[1, 2, 3].map((n) => (
                                    <Grid item xs={12} key={n}>
                                        <Box
                                            sx={{
                                                bgcolor: 'gray',
                                                height: 200,
                                                width: '100%',
                                            }}
                                        ></Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}
