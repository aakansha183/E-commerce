import { SxProps, Theme } from '@mui/material/styles';

export const productInfoContainer: SxProps<Theme> = {
  width: { xs: '100%', sm: '80%', md: '70%', lg: 'auto' },
  mx: 'auto',
};

export const productNameStyles: SxProps<Theme> = {
  mb: 1,
  fontWeight: '700',
  lineHeight: '48px',
  fontSize: '40px',
  fontFamily: 'Poppins',
  textAlign: 'left',
};

export const starRatingContainer: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  justifyContent: 'left',
  mt: 1,
};

export const starRatingText: SxProps<Theme> = {
  ml: 1,
  color: '#000000',
  fontSize: '16px',
  fontWeight: '400',
};

export const priceStyles: SxProps<Theme> = {
  mt: 2,
  fontWeight: '700',
  fontSize: '32px',
  lineHeight: '43.2px',
  color: '#000000',
  fontFamily: 'Poppins',
  textAlign: 'left',
};

export const originalPriceStyles: SxProps<Theme> = {
  textDecoration: 'line-through',
  ml: '10px',
  color: '#D3D3D3',
  fontWeight: '700',
  fontSize: '32px',
  lineHeight: '43.2px',
  fontFamily: 'Poppins',
};

export const discountStyles: SxProps<Theme> = {
  ml: '12px',
  p: '7px 15px',
  backgroundColor: '#FFE9F0',
  borderRadius: '60px',
  fontSize: '16px',
  fontWeight: '500',
  color: '#FF3333',
};
