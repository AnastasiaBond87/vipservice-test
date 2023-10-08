import { Box, Typography } from '@mui/material';
import { useAppSelector } from '../../../../app/store/hooks';

export default function CardTotal() {
  const { arrivalDate } = useAppSelector((store) => store.searchForm);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 200px',
        borderLeft: '1px solid #dde3ee',
      }}
    >
      <Typography sx={{ color: 'secondary.dark', fontSize: '32px', fontWeight: '700' }}>
        {!arrivalDate ? '4 150 ₽' : '8 300 ₽'}
      </Typography>
    </Box>
  );
}
