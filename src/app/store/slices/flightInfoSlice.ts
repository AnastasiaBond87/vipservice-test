import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { intervals } from '@/components/Card/components/CardFlightInfo/components/FlightIntervals/constants';

interface State {
  id: string;
  departure: string;
  arrival: string;
}

const initialState: State = {
  id: intervals[0].id,
  departure: intervals[0].departure,
  arrival: intervals[0].arrival,
};

const flightInfoSlice = createSlice({
  name: 'flightInfo',
  initialState,
  reducers: {
    setFlightInfo(state, action: PayloadAction<State>) {
      const { id, departure, arrival } = action.payload;

      state.id = id;
      state.departure = departure;
      state.arrival = arrival;
    },
  },
});

export default flightInfoSlice;
export const { setFlightInfo } = flightInfoSlice.actions;
