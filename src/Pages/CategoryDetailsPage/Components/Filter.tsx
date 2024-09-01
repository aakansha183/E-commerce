import React from 'react';
import {
  Box,
  Slider,
  Typography,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterIcon from '../../../Assests/ImagesData/FilterIcon';
const FilterComponent: React.FC = () => {
  const [priceRange, setPriceRange] = React.useState<number[]>([50, 200]);
  const [selectedColors, setSelectedColors] = React.useState<string[]>(['Blue']);
  const [selectedSize, setSelectedSize] = React.useState<string>('Large');

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

  const renderColorOptions = () => {
    const colors = ['Green', 'Red', 'Orange', 'Pink', 'Blue', 'Cyan', 'Black'];
    return colors.map((color) => (
      <FormControlLabel
        key={color}
        control={
          <Checkbox
            checked={selectedColors.includes(color)}
            onChange={() => handleColorChange(color)}
            sx={{
              color,
              '&.Mui-checked': {
                color,
              },
              padding: 0,
              margin: 0,
            }}
          />
        }
        label=""
        sx={{ width: 24, height: 24, margin: '4px 8px' }}
      />
    ));
  };

  const renderSizeOptions = () => {
    const sizes = [
      'XX-Small',
      'X-Small',
      'Small',
      'Medium',
      'Large',
      'X-Large',
      'XX-Large',
      '3X-Large',
      '4X-Large',
    ];
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

  return (
    <Box
      sx={{
        width: 280,
        padding: 2,
        border: '1px solid #ddd',
        borderRadius: 4,
        boxShadow: 2,
        bgcolor: 'white',
        position: 'fixed',
        top: '10%',
        left: '5%',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
          Filters
        </Typography>
        <FilterIcon />
      </Box>
  
      <List>
        <ListItem disablePadding>
          <Accordion elevation={0} sx={{ width: '100%' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ padding: 0 }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>T-shirts</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Filter options for T-shirts...</Typography>
            </AccordionDetails>
          </Accordion>
        </ListItem>


        <ListItem disablePadding>
          <Accordion elevation={0} sx={{ width: '100%' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ padding: 0 }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>Shorts</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Filter options for Shorts...</Typography>
            </AccordionDetails>
          </Accordion>
        </ListItem>


        <ListItem disablePadding>
          <Accordion elevation={0} sx={{ width: '100%' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ padding: 0 }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>Shirts</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Filter options for Shirts...</Typography>
            </AccordionDetails>
          </Accordion>
        </ListItem>


        {/* Hoodie Section */}
        <ListItem disablePadding>
          <Accordion elevation={0} sx={{ width: '100%' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ padding: 0 }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>Hoodie</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Filter options for Hoodie...</Typography>
            </AccordionDetails>
          </Accordion>
        </ListItem>


        <ListItem disablePadding>
          <Accordion elevation={0} sx={{ width: '100%' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ padding: 0 }}
            >
              <Typography sx={{ fontWeight: 'bold' }}>Jeans</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Filter options for Jeans...</Typography>
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
              <Typography sx={{ fontWeight: 'bold' }}>Price</Typography>
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
              <Typography sx={{ fontWeight: 'bold' }}>Colors</Typography>
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
              <Typography sx={{ fontWeight: 'bold' }}>Size</Typography>
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
              <Typography sx={{ fontWeight: 'bold' }}>Dress Style</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Filter options for Dress Style...</Typography>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      </List>

      <Button
        variant="contained"
        fullWidth
        sx={{
          marginTop: 3,
          backgroundColor: 'black',
          color: 'white',
          borderRadius: 20,
          textTransform: 'none',
          padding: '10px 0',
          fontWeight: 'bold',
        }}
      >
        Apply Filter
      </Button>
    </Box>
  );
};

export default FilterComponent;
