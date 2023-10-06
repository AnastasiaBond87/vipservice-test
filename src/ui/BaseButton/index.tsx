import { Button, styled } from '@mui/material';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  disabled?: boolean;
  onClick?: () => void;
}

const StyledButton = styled(Button)(({ theme }) => ({
  textTransform: 'none',
  color: theme.palette.primary.contrastText,
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '19.6px',
  padding: '10.2px 13.5px',
  borderRadius: '10px',
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none',
    backgroundColor: theme.palette.primary.dark,
  },
  '&:active': {
    backgroundColor: theme.palette.primary.light,
    color: 'rgba(255, 255, 255, 0.50)',
    boxShadow: 'none',
  },
}));

export default function BaseButton({ children, type = 'button', disabled, onClick }: Props) {
  return (
    <StyledButton
      type={type}
      variant="contained"
      disableRipple
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
}
