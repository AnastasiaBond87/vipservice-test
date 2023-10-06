import { FormHelperText, InputBase, InputLabel, Stack, styled } from '@mui/material';

interface Props {
  error?: string;
  placeholder: string;
  id: string;
  label: string;
}

const StyledInput = styled(InputBase)(({ theme }) => ({
  '&.MuiInputBase-root': {
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

export default function BaseInput({ error, placeholder, id, label }: Props) {
  return (
    <Stack>
      <InputLabel htmlFor={id} sx={{ fontSize: '11px', color: 'primary.contrastText' }}>
        {label}
      </InputLabel>
      <StyledInput placeholder={placeholder} id={id} />
      {error && <FormHelperText error>{error}</FormHelperText>}
    </Stack>
  );
}
