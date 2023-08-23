import { Merriweather } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const font = Merriweather({
    weight: ['300', '400', '700', '900'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#272829',
        },
    },
    typography: {
        fontFamily: font.style.fontFamily,
    },
    components: {
        MuiToolbar: {
            styleOverrides: {
                regular: {
                    height: 95,
                    minHeight: 95,
                },
            },
        },
    },
});

export default theme;
