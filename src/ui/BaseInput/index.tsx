import { InputBase, InputLabel, InputProps, Stack, styled } from '@mui/material';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';
import ErrorTooltip from '../ErrorTooltip';

type Props<T extends FieldValues> = UseControllerProps<T> & InputProps & { label: string };

const StyledInput = styled(InputBase)(({ theme }) => ({
  '&.MuiInputBase-root': {
    maxWidth: '200px',
    width: '100%',
    '& .MuiInputBase-input': {
      backgroundColor: theme.palette.background.paper,
      fontSize: '14px',
      fontWeight: '700',
      borderRadius: '10px',
      padding: '13px',
      outlineColor: theme.palette.secondary.main,
      outlineWidth: '1px',
      outlineStyle: 'solid',
      outlineOffset: '-1.5px',
      '&:focus': {
        outlineColor: theme.palette.primary.main,
      },
    },
  },
}));

export default function BaseInput<T extends FieldValues>(props: Props<T>) {
  const {
    field: { value, onBlur, onChange },
    fieldState: { error },
  } = useController<T>(props);

  const { id, type, placeholder, label, name } = props;

  return (
    <ErrorTooltip isOpen={!!error} title={error?.message}>
      <Stack>
        <InputLabel htmlFor={id} sx={{ fontSize: '11px', color: 'primary.contrastText' }}>
          {label}
        </InputLabel>

        <StyledInput
          placeholder={placeholder}
          id={id}
          type={type ?? 'text'}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          name={name}
          autoComplete="off"
        />
      </Stack>
    </ErrorTooltip>
  );
}
