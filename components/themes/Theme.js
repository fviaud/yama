import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const orange = "#FF7900";

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
            // main: orange,
        },
        secondary: {
            main: '#FFD200',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
        valid: {
            default: '#1b5e20',
        },
    },
    overrides: {
        MuiTab: {
            wrapper: {
                flexDirection: 'row',
            },
        },
    },
});

export default theme;