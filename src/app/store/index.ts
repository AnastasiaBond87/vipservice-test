import { combineReducers, configureStore } from '@reduxjs/toolkit';
import searchFormSlice from '@/app/store/slices/searchFormSlice';
import flightInfoSlice from '@/app/store/slices/flightInfoSlice';

const reducer = combineReducers({
  [searchFormSlice.name]: searchFormSlice.reducer,
  [flightInfoSlice.name]: flightInfoSlice.reducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['searchForm/setArrivalDate', 'searchForm/setDepartureDate'],
        ignoredPaths: ['searchForm.departureDate', 'searchForm.arrivalDate'],
      },
    }),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
