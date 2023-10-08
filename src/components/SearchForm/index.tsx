import { Box, Stack } from '@mui/material';
import BaseButton from '@/ui/BaseButton';
import BaseInput from '@/ui/BaseInput';
import DateInput from '@/ui/DateInput';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import {
  setArrival,
  setArrivalDate,
  setDeparture,
  setDepartureDate,
} from '@/app/store/slices/searchFormSlice';
import { useNavigate } from 'react-router-dom';
import { FormEvent } from 'react';

interface FormValues {
  departure: string;
  arrival: string;
  departureDate: null | string;
  arrivalDate?: null | string;
}

export default function SearchForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { departure, arrival, departureDate, arrivalDate } = useAppSelector(
    (store) => store.searchForm
  );

  const schema: yup.ObjectSchema<FormValues> = yup.object().shape({
    departure: yup.string().required('Обязательное поле'),
    arrival: yup.string().required('Обязательное поле'),
    departureDate: yup.string().required('Обязательное поле'),
    arrivalDate: yup.string().nullable(),
  });

  const defaultValues: FormValues = {
    departure,
    arrival,
    departureDate,
    arrivalDate,
  };

  const {
    control,
    formState: { isValid },
  } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    navigate('/avia/info');
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: '80.25%', m: '0 auto', borderRadius: '15px' }}
    >
      <Box
        sx={{
          backgroundColor: 'primary.main',
          borderRadius: '15px 15px 0 0',
          p: '30px',
          display: 'flex',
          gap: '25px',
          justifyContent: {
            xs: 'center',
            md: 'space-between',
          },
          flexWrap: {
            xs: 'wrap',
            md: 'nowrap',
          },
        }}
      >
        <BaseInput
          placeholder="Город вылета"
          label="Откуда"
          id="departure"
          name="departure"
          control={control}
          storeValue={(value: string) => {
            dispatch(setDeparture(value));
          }}
        />
        <BaseInput
          placeholder="Город прилета"
          label="Куда"
          id="arrival"
          name="arrival"
          control={control}
          storeValue={(value: string) => {
            dispatch(setArrival(value));
          }}
        />
        <DateInput
          label="Туда"
          id="departure-date"
          name="departureDate"
          control={control}
          storeValue={(value: string | null) => {
            dispatch(setDepartureDate(value));
          }}
        />
        <DateInput
          label="Оттуда"
          id="arrival-date"
          name="arrivalDate"
          control={control}
          storeValue={(value: string | null) => {
            dispatch(setArrivalDate(value));
          }}
        />
      </Box>
      <Box
        sx={{
          boxShadow: '0px 0px 14px 0px rgba(112, 121, 153, 0.30)',
          borderRadius: '0 0 15px 15px',
          display: 'flex',
          justifyContent: 'flex-end',
          p: '23px 30px',
        }}
      >
        <BaseButton type="submit" disabled={!isValid}>
          Найти билеты
        </BaseButton>
      </Box>
    </Stack>
  );
}
