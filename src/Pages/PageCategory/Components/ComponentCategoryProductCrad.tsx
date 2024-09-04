import React from 'react';
import { Box, Grid, Typography, Button, Rating, Pagination, Divider } from '@mui/material';
import { useFilter } from './FilterContext';
import products from '../Utils/ConstantsCategory';
import ArrowIcon from '../../../Assests/ImagesData/ArrowIcon';
import { useNavigate } from 'react-router-dom';



const ProductGrid: React.FC = () => {
  const navigate = useNavigate();
  const { priceRange } = useFilter();

  const filteredProducts = products.filter(product =>
    product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  return (
    <Box sx={{ padding: 2 ,marginLeft:'60px'}}>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginBottom: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: -5 }}>
          Casual
        </Typography>
        <Box display="flex" alignItems="center" sx={{ marginBottom: -5 }}>
          <Typography variant="body1" sx={{ color: '#808080' }}>
            Showing {filteredProducts.length} Products
          </Typography>
          <Typography variant="body1" sx={{ marginRight:21}}>
            <Typography variant="body1" sx={{ color: '#808080', display: 'inline',  }}>
              Sort by:
            </Typography>
            <Typography variant="body1" sx={{ color: '#000000', display: 'inline' }}>
              Most Popular
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={2} md={3.6} key={product.id}>
            <Box sx={{ marginTop: '30px', transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                }, }}>
              <Box
                component="img"
                onClick={() => {navigate('/ProductDetails', { state: { product } } ); window.scrollTo(0,0);}}
                src={product.image}
                alt={product.name}
                sx={{ width: '350px', borderRadius: '20px', marginBottom: 2,height:'auto' }}
              />
              <Typography variant="body1" sx={{ fontWeight: '700',fontSize:'20px',lineHeight:'27px' }}>
                {product.name}
              </Typography>
              <Rating
                name="read-only"
                value={product.rating}
                precision={0.5}
                readOnly
                sx={{ fontSize: '1.6rem', marginBottom: 1 ,color:'#FFC633',marginTop:1}}
              />
              <Box display="flex" alignItems="center" sx={{ marginBottom: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: '700',fontSize:'24px',lineHeight:'32.4px' }}>
                  ${product.price}
                </Typography>
                {product.originalPrice && (
                  <>
                    <Typography
                      variant="body2"
                      sx={{ textDecoration: 'line-through', marginLeft: 1, color: '#D3D3D3',fontWeight:'700',fontSize:'24px',lineHeight:'32.4px' }}
                    >
                      ${product.originalPrice}
                    </Typography>
                    <Typography variant="body2"  sx = {{backgroundColor: '#FFE9F0', 
              color: '#FF3333',
              borderRadius: '62px',
              padding: '6px 14px 6px 14px',
              marginLeft: 0.5,}}>
                      {product.discount}
                    </Typography>
                  </>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ marginY: 3,marginRight:'120px' }} />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
        <Button variant="outlined" sx = {{color:'black',borderColor:'black',fontSize:"bold"}}>
       
       Previous</Button>
        </Box>
        <Pagination count={10} shape="rounded" />
        <Button variant="outlined"sx={{marginRight:'120px',color:'black',borderColor:'black'}}>Next</Button>
      </Box>
    </Box>
  );
};

export default ProductGrid;