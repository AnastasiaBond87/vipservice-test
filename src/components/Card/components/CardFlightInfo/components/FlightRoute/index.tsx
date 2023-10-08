import { Stack, Box, Typography } from '@mui/material';

export default function FlightRoute() {
  return (
    <Stack sx={{ flex: '1 1 300px', gap: '4px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ fontSize: '14px', color: 'secondary.main' }}>SVO</Typography>
        <Typography sx={{ fontSize: '14px', color: 'secondary.main' }}>ROV</Typography>
      </Box>
      <Box
        sx={{
          height: '1px',
          bgcolor: 'secondary.main',
          position: 'relative',
          mx: '17.5px',
          '&:before': {
            content: "''",
            position: 'absolute',
            bgcolor: 'secondary.main',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            left: '-8px',
            top: '-4px',
          },
          '&:after': {
            content: "''",
            position: 'absolute',
            bgcolor: 'secondary.main',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            right: '-8px',
            top: '-4px',
          },
        }}
      />
      <Typography sx={{ fontSize: '14px', color: 'secondary.main', alignSelf: 'center' }}>
        В пути 1 ч 55 мин
      </Typography>
    </Stack>
  );
}
