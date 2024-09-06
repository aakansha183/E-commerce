import React, { useEffect, useState } from 'react';
import { Box, Container, Grid, Typography, Divider, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/cartSlice';
import TopHeader from '../../CommonComponents/TopHeader';
import Header from '../../CommonComponents/Header';
import MyButtons from './Components/ComponentButton';
import IncrementDecrementBox from './Components/ComponentIncrementDecrementBox';
import Footer from '../../CommonComponents/Footer';
import SuggestedProducts from './Components/ComponentProductCard';
import ProductTabs from './Components/ComponentProductTabs';
import { toast } from 'react-toastify'; 

const ProductDetail: React.FC = () => {
  const renderStars = (rating: number) => {
    return (
      <>
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          if (rating >= ratingValue) return <StarIcon key={index} style={{ color: '#ffcc00' }} />;
          if (rating >= ratingValue - 0.5) return <StarHalfIcon key={index} style={{ color: '#ffcc00' }} />;
          return <StarOutlineIcon key={index} style={{ color: '#ffcc00' }} />;
        })}
      </>
    );
  };

  const [selectedThumbnail, setSelectedThumbnail] = useState<number | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  if (!location.state || !location.state.product) {
    navigate('/');
    return null;
  }

  const { product } = location.state as {
    product: {
      id: string;
      image: string;
      name: string;
      rating: number;
      originalPrice?: number;
      price: number;
      discount: string;
    };
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedThumbnail(index);
  };

  const handleIncrement = () => setQuantity((prevQuantity) => prevQuantity + 1);

  const handleDecrement = () => setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));

  const handleAddToCart = () => {
    const selectedColor = 'black';

    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity,
        color: selectedColor,
      })
    );

    toast.success('Item added to cart!' , {
      theme:'dark'
    }); 
  };

  return (
    <Box>
      <TopHeader />
      <Header />
      <Divider sx={{ mt: 2 }} />
      <Container maxWidth="xl" sx={{ marginTop: '50px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[product.image, product.image, product.image].map((thumbnail, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: '150px',
                      height: '150px',
                      backgroundColor: '#f5f5f5',
                      borderRadius: 2,
                      cursor: 'pointer',
                      border: selectedThumbnail === index ? '1px solid black' : 'none',
                    }}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img
                      src={thumbnail}
                      alt={`Thumbnail ${index + 1}`}
                      style={{ width: '100%', height: '100%', borderRadius: '8px' }}
                    />
                  </Box>
                ))}
              </Box>

              <Box sx={{ flex: 1, borderRadius: 2 }}>
                <img src={product.image} alt="Product" style={{ width: '92%', height: 'auto', borderRadius: '8px' }} />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography
              variant="h4"
              fontWeight="700"
              lineHeight="48px"
              fontSize="40px"
              fontFamily="Poppins"
            >
              {product.name}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
              {renderStars(product.rating)}
              <Typography
                variant="body2"
                sx={{ ml: 1, color: '#000000', fontSize: '16px', lineHeight: '21.6px', fontWeight: '400' }}
              >
                {product.rating}/5
              </Typography>
            </Box>
            <Typography
              variant="h5"
              sx={{ mt: 2, fontWeight: '700', fontSize: '32px', lineHeight: '43.2px', color: '#000000', fontFamily: 'Poppins' }}
            >
              ${product.price}
              {product.originalPrice && (
                <Typography
                  component="span"
                  variant="body2"
                  sx={{
                    textDecoration: 'line-through',
                    marginLeft: '10px',
                    color: '#D3D3D3',
                    fontWeight: '700',
                    fontSize: '32px',
                    lineHeight: '43.2px',
                  }}
                >
                  ${product.originalPrice}
                </Typography>
              )}
              {product.discount && (
                <Box
                  component="span"
                  sx={{
                    display: 'inline-block',
                    marginLeft: '10px',
                    padding: '5px 15px',
                    backgroundColor: '#FFE9F0',
                    borderRadius: '60px',
                    fontSize: '16px',
                    lineHeight: '21.6px',
                    fontWeight: '500',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    color: '#FF3333',
                  }}
                >
                  {product.discount}
                </Box>
              )}
            </Typography>

            <Divider sx={{ mt: 3 }} />
              
            <Typography
              variant="body1"
              sx={{ mt: 2, fontSize: '16px', lineHeight: '22px', fontWeight: '400', color: 'grey' }}
            >
              This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
            </Typography>

            <Divider sx={{ mt: 3 }} />
            <Box sx = {{marginTop:'40px'}}>
              <MyButtons/>
            </Box>
            <Divider sx={{ mt: 3 }} />
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, gap: 2 }}>
              <IncrementDecrementBox count={quantity} onIncrement={handleIncrement} onDecrement={handleDecrement} />
              <Button
                variant="contained" onClick={handleAddToCart}
                sx={{
                  marginTop:'30px',
                  height: '52px',
                  width:'400px',
                  borderRadius: '62px',
                  backgroundColor: '#000000'
                }}
              >
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 5 }}>
          <ProductTabs />
        </Box>

        <Box sx={{ mt: 5 }}>
          <SuggestedProducts />
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default ProductDetail;
