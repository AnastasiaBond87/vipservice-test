import FlightCard from '@/components/Card';
import { Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function CardPage() {
  return (
    <Stack sx={{ mt: '71px', gap: '30px' }}>
      <FlightCard />
      <Link component={RouterLink} to="/avia" sx={{ alignSelf: 'center', textDecoration: 'none' }}>
        <Typography sx={{ fontWeight: '700', fontSize: '24px' }}>Вернуться на главную</Typography>
      </Link>
    </Stack>
  );
}
