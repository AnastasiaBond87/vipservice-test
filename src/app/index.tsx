import { RouterProvider } from 'react-router-dom';
import router from '@/app/router';
import { Provider } from 'react-redux';
import store from '@/app/store';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '@/app/theme';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  );
}
