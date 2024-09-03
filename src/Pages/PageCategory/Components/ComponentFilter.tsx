import React, { useState } from 'react';
import {
  Box,
  Slider,
  Typography,
  Checkbox,
  List,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Chip,
  Divider,
  Stack,
  IconButton,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterIcon from '../../../Assests/ImagesData/FilterIcon';
import { useFilter } from './FilterContext'; 
import sizes from '../Utils/ConstantsFilter';

const FilterComponent: React.FC = () => {
  const { priceRange, setPriceRange } = useFilter(); 
  const [selectedColors, setSelectedColors] = useState<string[]>(['Blue']);
  const [selectedSize, setSelectedSize] = useState<string>('Large');
  const [selectedDressStyle, setSelectedDressStyle] = useState<string[]>([]);

  const handlePriceChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
  };

  const handleColorChange = (color: string) => {
    setSelectedColors((prevColors) =>
      prevColors.includes(color)
        ? prevColors.filter((c) => c !== color)
        : [...prevColors, color]
    );
  };

  const handleSizeChange = (size: string) => {
    setSelectedSize(size);
  };

  const handleDressStyleChange = (style: string) => {
    setSelectedDressStyle((prevStyles) =>
      prevStyles.includes(style)
        ? prevStyles.filter((s) => s !== style)
        : [...prevStyles, style]
    );
  };

  const renderColorOptions = () => {
    const colors = ['#00C12B', '#F50606', '#F5DD06', '#F57906', '#06CAF5', '#063AF5', '#7D06F5','#F506A4','#FFFFFF','#000000'];
    return colors.map((color) => (
      <Box
        key={color}
        sx={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          backgroundColor: color.toLowerCase(),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '4px',
          cursor: 'pointer',
        }}
        onClick={() => handleColorChange(color)}
      >
        {selectedColors.includes(color) && (
          <Typography
            sx={{
              fontSize: '12px',
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            ✓
          </Typography>
        )}
      </Box>
    ));
  };

  const renderSizeOptions = () => {
    
    return sizes.map((size) => (
      <Chip
        key={size}
        label={size}
        onClick={() => handleSizeChange(size)}
        variant={selectedSize === size ? 'filled' : 'outlined'}
        sx={{
          margin: '5px 5px 10px 0',
          borderRadius: '20px',
          borderColor: selectedSize === size ? 'black' : undefined,
          backgroundColor: selectedSize === size ? 'black' : undefined,
          color: selectedSize === size ? 'white' : 'black',
          fontWeight: selectedSize === size ? 'bold' : 'normal',
          padding: '6px 12px',
        }}
      />
    ));
  };

  const renderDressStyleOptions = () => {
    const styles = ['Casual', 'Formal', 'Party', 'Gym'];
    return styles.map((style) => (
      <Box
        key={style}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 0',
        }}
        onClick={() => handleDressStyleChange(style)} 
      >
        <Typography
          sx={{
            fontWeight: '400',
            fontSize: '16px',
            lineHeight: '21.6px',
            color: '#909090',
          }}
        >
          {style}
        </Typography>
        <IconButton size="small">
        </IconButton>
      </Box>
    ));
  };

  return (
    <Box
      sx={{
        width: '270px',
        padding: '10px 10px',
        border: '1px solid #ddd',
        borderRadius: 4,
        bgcolor: 'white',
        position: 'absolute',
        top: '20%',
        left: '8%',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
          Filters
        </Typography>
        <FilterIcon />
      </Box>
      <Divider sx={{ my: 1 }} />
      <List>
        {['T-shirts', 'Shorts', 'Shirts', 'Hoodie', 'Jeans'].map((category) => (
          <ListItem disablePadding key={category}>
            <Accordion elevation={0} sx={{ width: '100%' }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ padding: 0 }}
              >
                <Typography
                  sx={{
                    fontWeight: '400px',
                    fontSize: '16px',
                    lineHeight: '21.6px',
                    color: '#909090',
                  }}
                >
                  {category}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Filter options for {category}...
                </Typography>
              </AccordionDetails>
            </Accordion>
          </ListItem>
        ))}

        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <Accordion elevation={0} sx={{ width: '100%' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ padding: 0 }}
            >
              <Typography
                sx={{
                  fontWeight: '700px',
                  fontSize: '20px',
                  lineHeight: '27px',
                  color: '#000000',
                }}
              >
                Price
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Slider
                value={priceRange}
                onChange={handlePriceChange}
                valueLabelDisplay="auto"
                min={50}
                max={200}
                sx={{ color: 'black' }}
              />
              <Typography variant="body2">
                ${priceRange[0]} - ${priceRange[1]}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ListItem>

        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <Accordion elevation={0} sx={{ width: '100%' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ padding: 0 }}
            >
              <Typography
                sx={{
                  fontWeight: '700px',
                  fontSize: '20px',
                  lineHeight: '27px',
                  color: '#000000',
                }}
              >
                Colors
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {renderColorOptions()}
              </Box>
            </AccordionDetails>
          </Accordion>
        </ListItem>

       
        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <Accordion elevation={0} sx={{ width: '100%' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ padding: 0 }}
            >
              <Typography
                sx={{
                  fontWeight: '700px',
                  fontSize: '20px',
                  lineHeight: '27px',
                  color: '#000000',
                }}
              >
                Size
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {renderSizeOptions()}
              </Box>
            </AccordionDetails>
          </Accordion>
        </ListItem>

        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <Accordion elevation={0} sx={{ width: '100%' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ padding: 0 }}
            >
              <Typography
                sx={{
                  fontWeight: '700px',
                  fontSize: '20px',
                  lineHeight: '27px',
                  color: '#000000',
                }}
              >
                Dress Style
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Stack>{renderDressStyleOptions()}</Stack>
            </AccordionDetails>
          </Accordion>
        </ListItem>

        <Box sx={{ textAlign: 'center', marginTop: '10px' }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '20px',
              padding: '8px 16px',
              '&:hover': {
                backgroundColor: '#333',
              },
            }}
          >
            Apply Filters
          </Button>
        </Box>
      </List>
    </Box>
  );
};

export default FilterComponent;

