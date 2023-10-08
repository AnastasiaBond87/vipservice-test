import { Box, Stack, SvgIcon, Typography } from '@mui/material';
import s7logo from '@/assets/icons/s7-logo.png';
import BagIcon from '@/assets/icons/bag.svg?react';
import LuggageIcon from '@/assets/icons/luggage.svg?react';
import FlightDate from './components/FlightDate';
import FlightRoute from './components/FlightRoute';
import FlightIntervals from './components/FlightIntervals';
import { useAppSelector } from '@/app/store/hooks';
import dayjs from 'dayjs';

interface Props {
  infoType: 'arrival' | 'departure';
}

export default function CardFlightInfo({ infoType }: Props) {
  const { arrival, departure } = useAppSelector((store) => store.flightInfo);
  const {
    departureDate,
    arrivalDate,
    arrival: arrivalPoint,
    departure: departurePoint,
  } = useAppSelector((store) => store.searchForm);

  const setDate = (): string => {
    const date = infoType === 'arrival' ? arrivalDate : departureDate;

    return date ? dayjs(date).format('DD.MM.YYYY') : '';
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box>
        <Box
          sx={{
            bgcolor: 'primary.light',
            px: '13px',
            py: '6px',
            borderRadius: '15px 0px',
            mb: '28px',
          }}
        >
          <Typography sx={{ fontSize: '12px', color: 'primary.contrastText', fontWeight: '600' }}>
            Невозвратный
          </Typography>
        </Box>
        <Stack sx={{ alignItems: 'center', gap: '8px' }}>
          <Box component="img" alt="logo" src={s7logo} />
          <Typography sx={{ fontSize: '18px' }}>S7 Airlines</Typography>
        </Stack>
      </Box>
      <Stack
        sx={{
          p: '32px 20px 27px 25px',
          flex: '1',
          position: 'relative',
          '&:before': {
            content: '""',
            position: 'absolute',
            left: '0',
            right: '0',
            top: '0',
            borderTop: '1px',
            borderStyle: 'dashed',
            borderWidth: '1px',
            borderColor: 'primary.main',
            display: infoType === 'departure' ? 'none' : 'block',
          },
        }}
      >
        <Box sx={{ display: 'flex', gap: '20px', justifyContent: 'space-between', mb: '24px' }}>
          <FlightDate
            time={departure}
            date={setDate()}
            point={infoType === 'arrival' ? arrivalPoint : departurePoint}
          />
          <FlightRoute />
          <FlightDate
            time={arrival}
            date={setDate()}
            point={infoType === 'arrival' ? departurePoint : arrivalPoint}
          />
          <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
            <SvgIcon sx={{ color: 'primary.light', widt: '20px', height: '20px' }}>
              <BagIcon />
            </SvgIcon>
            <SvgIcon sx={{ color: 'primary.light', width: '20px', height: '39px' }}>
              <LuggageIcon />
            </SvgIcon>
          </Box>
        </Box>
        {!arrivalDate && <FlightIntervals />}
      </Stack>
    </Box>
  );
}
