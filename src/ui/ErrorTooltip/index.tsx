import { Tooltip } from '@mui/material';
import { ReactElement } from 'react';

interface Props {
  title: string;
  isOpen: boolean;
  children: ReactElement;
}

export default function ErrorTooltip({ title, isOpen, children }: Props) {
  return (
    <Tooltip
      open={isOpen}
      title={title}
      arrow
      placement="bottom-end"
      componentsProps={{
        tooltip: { sx: { bgcolor: 'error.main' } },
        arrow: { sx: { color: 'error.main' } },
      }}
    >
      {children}
    </Tooltip>
  );
}
