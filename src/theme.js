import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#b2fef7',
        main: '#80cbc4',
        dark: '#4f9a94',
        contrastText: '#455a64',
      },
      secondary: {
        light: '#8e99f3',
        main: '#5c6bc0',
        dark: '#26418f',
        contrastText: '#000',
      },
    },
  });

export default theme;