import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { color } from '@mui/system';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#cfd8dc',
    },
    secondary: {
      main: '#455a64',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;