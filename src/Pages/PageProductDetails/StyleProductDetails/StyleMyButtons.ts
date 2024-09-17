import { SxProps, Theme } from '@mui/material/styles';

export const typographyStyles: SxProps<Theme> = {
  marginBottom: '10px',
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '21.6px',
  color: 'GrayText',
};

export const buttonContainerStyles: SxProps<Theme> = {
  display: 'flex',
  gap: '12px',
  mt: 1,
};

export const styledButtonStyles = (isClicked: boolean): SxProps<Theme> => ({
  borderRadius: '62px',
  width: '90px',
  height: '46px',
  backgroundColor: isClicked ? 'black' : '#F0F0F0',
  color: isClicked ? 'white' : 'grey',
  '&:hover': {
    backgroundColor: isClicked ? 'black' : 'grey',
    color: isClicked ? 'white' : 'white',
  },
});
