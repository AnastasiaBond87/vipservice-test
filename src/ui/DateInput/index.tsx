import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CalendarIcon from '@/assets/icons/calendar-icon.svg?react';
import { FormLabel, Stack, Tooltip, styled } from '@mui/material';
import { ruRU } from '@mui/x-date-pickers/locales';
import 'dayjs/locale/ru';

interface Props {
  label: string;
  id: string;
  error?: string;
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

export default function DateInput({ label, id, error }: Props) {
  return (
    <Tooltip
      title={error}
      open={!!error}
      arrow
      placement="bottom-end"
      componentsProps={{
        tooltip: { sx: { bgcolor: 'error.main' } },
        arrow: { sx: { color: 'error.main' } },
      }}
    >
      <Stack>
        <FormLabel htmlFor={id} sx={{ fontSize: '11px', color: 'primary.contrastText' }}>
          {label}
        </FormLabel>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <StyledDatePicker
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
                },
              },
            }}
          />
        </LocalizationProvider>
      </Stack>
    </Tooltip>
  );
}
