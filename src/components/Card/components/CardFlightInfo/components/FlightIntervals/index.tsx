import { List, ListItem, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { setFlightInfo } from '@/app/store/slices/flightInfoSlice';
import { intervals } from './constants';

export default function FlightIntervals() {
  const dispatch = useAppDispatch();
  const { id: intervalId } = useAppSelector((store) => store.flightInfo);

  return (
    <List sx={{ display: 'flex', alignItems: 'center', p: '0' }}>
      {intervals.map(({ id, departure, arrival }) => (
        <ListItem
          key={id}
          onClick={() => dispatch(setFlightInfo({ id, departure, arrival }))}
          sx={{
            color: 'secondary.dark',
            fontWeight: '500',
            display: 'flex',
            gap: '4px',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'secondary.main',
            flex: '0',
            borderRadius: '10px',
            '&:not(:last-child)': {
              mr: id !== intervalId ? '20px' : '17px',
            },
            p: id !== intervalId ? '6px 7px 6px 3px' : '10px 18px 10px 15px',
            backgroundColor: id !== intervalId ? 'inherit' : 'secondary.main',
            cursor: 'pointer',
          }}
        >
          <Typography sx={{ fontSize: '18px', lineHeight: '1' }}>{departure}</Typography>
          <Typography>-</Typography>
          <Typography sx={{ fontSize: '14px', lineHeight: '1' }}>{arrival}</Typography>
        </ListItem>
      ))}
    </List>
  );
}
