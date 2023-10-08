import { Stack, Typography } from '@mui/material';

interface Props {
  time: string;
  date: string;
  point: string;
}

export default function FlightDate({ time, date, point }: Props) {
  return (
    <Stack sx={{ pt: '10px' }}>
      <Typography
        sx={{
          fontSize: '24px',
          fontWeight: '700',
          mb: '9px',
          lineHeight: 'normal',
          color: 'secondary.dark',
        }}
      >
        {time}
      </Typography>
      <Typography sx={{ lineHeight: 'normal', fontSize: '14px', fontWeight: '500' }}>
        {point}
      </Typography>
      <Typography sx={{ lineHeight: 'normal', fontSize: '14px' }}>{date}</Typography>
    </Stack>
  );
}
