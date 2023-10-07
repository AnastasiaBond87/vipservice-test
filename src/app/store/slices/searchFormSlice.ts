import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface State {
  departure: string;
  arrival: string;
  departureDate: null | string;
  arrivalDate: null | string;
}

const initialState: State = {
  departure: '',
  arrival: '',
  departureDate: null,
  arrivalDate: null,
};

const searchFormSlice = createSlice({
  name: 'searchForm',
  initialState,
  reducers: {
    setDeparture(state, action: PayloadAction<string>) {
      state.departure = action.payload;
    },
    setArrival(state, action: PayloadAction<string>) {
      state.arrival = action.payload;
    },
    setDepartureDate(state, action: PayloadAction<string | null>) {
      state.departureDate = action.payload;
    },
    setArrivalDate(state, action: PayloadAction<string | null>) {
      state.arrivalDate = action.payload;
    },
  },
});

export default searchFormSlice;
export const { setDeparture, setArrival, setDepartureDate, setArrivalDate } =
  searchFormSlice.actions;
