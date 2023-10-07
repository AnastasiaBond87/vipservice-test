import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CalendarIcon from '@/assets/icons/calendar-icon.svg?react';
import { FormLabel, InputProps, Stack, styled } from '@mui/material';
import { ruRU } from '@mui/x-date-pickers/locales';
import 'dayjs/locale/ru';
import ErrorTooltip from '../ErrorTooltip';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

type Props<T extends FieldValues> = UseControllerProps<T> & InputProps & { label: string };

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

export default function DateInput<T extends FieldValues>(props: Props<T>) {
  const {
    field: { value, onBlur, onChange },
    fieldState: { error },
  } = useController<T>(props);

  const { name, id, label } = props;

  return (
    <ErrorTooltip title={error?.message} isOpen={!!error}>
      <Stack>
        <FormLabel htmlFor={id} sx={{ fontSize: '11px', color: 'primary.contrastText' }}>
          {label}
        </FormLabel>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StyledDatePicker
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
                color: 'text.primary',
              },
              textField: {
                InputProps: {
                  id,
                  spellCheck: false,
                  onBlur,
                  name,
                },
              },
            }}
          />
        </LocalizationProvider>
      </Stack>
    </ErrorTooltip>
  );
}
