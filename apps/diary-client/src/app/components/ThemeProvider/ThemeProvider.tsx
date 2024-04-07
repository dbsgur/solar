import { ThemeProvider as MuiThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import { ReactNode } from 'react';

const customTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function ThemeProvider(props: { children: ReactNode }) {
  // prop destruction
  const { children } = props;
  // lib, style hooks
  // state, ref hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return <MuiThemeProvider theme={customTheme}>{children}</MuiThemeProvider>;
}

export { ThemeProvider };
