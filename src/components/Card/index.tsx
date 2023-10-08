import { Box } from '@mui/material';
import CardTotal from './components/CardTotal';
import CardFlightInfo from './components/CardFlightInfo';
import { useAppSelector } from '@/app/store/hooks';

export default function FlightCard() {
  const { arrivalDate, arrival, departure, departureDate } = useAppSelector(
    (store) => store.searchForm
  );

  if (!arrival || !departure || !departureDate) {
    return null;
  }

  return (
    <Box
      sx={{
        width: '82%',
        minHeight: '165px',
        my: '0',
        mx: 'auto',
        boxShadow: '0px 0px 14px 0px rgba(112, 121, 153, 0.30)',
        borderRadius: '15px',
        display: 'flex',
      }}
    >
      <Box sx={{ flex: '1' }}>
        <CardFlightInfo infoType="departure" />
        {arrivalDate && <CardFlightInfo infoType="arrival" />}
      </Box>
      <CardTotal />
    </Box>
  );
}
