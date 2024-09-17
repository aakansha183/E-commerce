import { SxProps, Theme } from '@mui/material/styles';
import { theme } from '../Utils/Theme/Theme';

export const incrementDecrementContainerStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: '35px',
  mt: 4,
};

export const incrementDecrementBoxStyles: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 3,
  borderRadius: '62px',
  backgroundColor: theme.colors.grey,
  height: '52px',
  padding: '0px 20px',
};
