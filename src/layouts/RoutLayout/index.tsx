import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <Container disableGutters>
      <Outlet />
    </Container>
  );
}
