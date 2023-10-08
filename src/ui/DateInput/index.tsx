import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CalendarIcon from '@/assets/icons/calendar-icon.svg?react';
import { FormLabel, InputProps, Stack, styled } from '@mui/material';
import { ruRU } from '@mui/x-date-pickers/locales';
import 'dayjs/locale/ru';
import ErrorTooltip from '@/ui/ErrorTooltip';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';
import { useEffect } from 'react';

interface Props {
  label: string;
  storeValue: (value: Date) => void;
}

const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
  '&.MuiTextField-root': {
    maxWidth: '200px',
    width: '100%',
    '& .MuiInputBase-root': {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '10px',
      padding: '13px',
      outlineColor: theme.palette.secondary.main,
      outlineWidth: '1px',
      outlineStyle: 'solid',
      outlineOffset: '-1.5px',
      '& .MuiInputBase-input': {
        textTransform: 'lowercase',
        fontSize: '14px',
        fontWeight: '700',
        padding: '0',
        color: theme.palette.text.primary,
        '&::placeholder': {
          textTransform: 'lowercase',
          fontSize: '14px',
          fontWeight: '700',
          color: theme.palette.secondary.light,
        },
      },
    },
  },
}));

export default function DateInput<T extends FieldValues>(
  props: Props & UseControllerProps<T> & InputProps
) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController<T>(props);

  const { name, id, label, storeValue } = props;

  useEffect(() => {
    storeValue(value);
  }, [value, storeValue]);

  return (
    <ErrorTooltip title={error?.message} isOpen={!!error}>
      <Stack>
        <FormLabel htmlFor={id} sx={{ fontSize: '11px', color: 'primary.contrastText' }}>
          {label}
        </FormLabel>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StyledDatePicker
            disablePast
            value={value}
            onChange={onChange}
            format="DD.MM.YY"
            localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
            slots={{
              openPickerIcon: CalendarIcon,
            }}
            slotProps={{
              inputAdornment: {
                position: 'start',
              },
              openPickerButton: {
                disableRipple: true,
              },
              openPickerIcon: {
                color: value ? '#5c87db' : '#5c5c5c',
              },
              textField: {
                InputProps: {
                  id,
                  spellCheck: false,
                  name,
                  error: false,
                },
              },
            }}
          />
        </LocalizationProvider>
      </Stack>
    </ErrorTooltip>
  );
}
