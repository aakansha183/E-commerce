import React from 'react';
import { Box, Typography, Grid, Rating } from '@mui/material';
import BlueTshirt from '../../../Assests/Images/BlueShirt.png';
import PrintedTshirt from '../../../Assests/Images/PrintedShirt.png';
import PinkTshirt from '../../../Assests/Images/PinkT-Shirt.png';
import CheckTshirt from '../../../Assests/Images/CheckT-shirt.png';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Polo with Contrast Trims',
    image: BlueTshirt,
    price: 212,
    oldPrice: 242,
    discount: '-20%',
    rating: 4.0,
  },
  {
    id: 2,
    name: 'Gradient Graphic T-shirt',
    image: PrintedTshirt,
    price: 145,
    rating: 3.5,
  },
  {
    id: 3,
    name: 'Polo with Tipping Details',
    image: PinkTshirt,
    price: 180,
    rating: 4.5,
  },
  {
    id: 4,
    name: 'Black Striped T-shirt',
    image: CheckTshirt,
    price: 120,
    oldPrice: 150,
    discount: '-30%',
    rating: 5.0,
  },
];

const ProductCard: React.FC<Product> = ({ name, image, price, oldPrice, discount, rating }) => {
  return (
    <Box>
      <img src={image} alt={name} style={{ maxWidth: '100%', borderRadius: '20px' }} />
      <Typography variant="h6" fontWeight="700px" sx={{ marginTop: 1,width:'250px',height:'27px',fontSize:'20px',lineHeight:'27px',fontFamily:'Poppins' }}>
        {name}
      </Typography>
      <Box display="flex" sx={{ marginTop: 1 }}>
        <Rating value={rating} precision={0.5} readOnly sx={{ color: '#FFC633' }} />
        <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 0.5,fontWeight:'400',fontSize:'14px',lineHeight:'18.9px',width:'35px',height:'19px',marginTop:0.4,fontFamily:'Poppins' }}>
          {rating}/5
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', marginTop: 1,gap :1}}>
        <Typography variant="h6" fontWeight="700" lineHeight={'32.4px'} width = {'53px'} height={'32px'} fontSize = {'24px'}fontFamily = {'Poppins'}>
          ${price}
        </Typography>
        {oldPrice && (
          <Typography
            variant="body2"
            sx={{ textDecoration: 'line-through', marginLeft: 0.5 ,fontWeight:'700',fontSize:'24px',lineHeight:'32.4px',width:'58px',height:'32px',color:'#D3D3D3'}}
          >
            ${oldPrice}
          </Typography>
        )}
        {discount && (
          <Typography
            variant="body2"
            sx={{
              backgroundColor: '#FFE9F0', 
              color: '#FF3333',
              borderRadius: '62px',
              padding: '6px 14px 6px 14px',
              marginLeft: 0.5,
              fontFamily:'Poppins'
            }}
          >
            {discount}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

const SuggestedProducts: React.FC = () => {
  return (
    <Box sx={{ padding: 30 }}>
      <Typography variant="h4" fontWeight='700' marginLeft= {'350px'} marginTop={-30} marginBottom={5} width ={'579px'} height={'58px'}  lineHeight={'57.6px'} fontSize={'48px'} fontFamily={'Poppins'} >
        YOU MIGHT ALSO LIKE
      </Typography>
      <Grid container spacing={0} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SuggestedProducts;

