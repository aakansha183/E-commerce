import React, { useState } from "react";
import {
  Box,
  Slider,
  Typography,
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
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FilterIcon from "../../../Assests/ImagesData/FilterIcon";
import { useFilter } from "./FilterContext";
import sizes from "../Utils/ConstantsFilter";

const FilterComponent: React.FC = () => {
  const { priceRange, setPriceRange } = useFilter();
  const [selectedColors, setSelectedColors] = useState<string[]>(["Blue"]);
  const [selectedSize, setSelectedSize] = useState<string>("Large");
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
    const colors = [
      "#00C12B",
      "#F50606",
      "#F5DD06",
      "#F57906",
      "#06CAF5",
      "#063AF5",
      "#7D06F5",
      "#F506A4",
      "#FFFFFF",
      "#000000",
    ];
    return colors.map((color) => (
      <Box
        key={color}
        sx={{
          width: 24,
          height: 24,
          borderRadius: "50%",
          backgroundColor: color.toLowerCase(),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "2px",
          cursor: "pointer",
        }}
        onClick={() => handleColorChange(color)}
      >
        {selectedColors.includes(color) && (
          <Typography
            sx={{
              fontSize: "10px",
              color: "white",
              fontWeight: "bold",
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
        variant={selectedSize === size ? "filled" : "outlined"}
        sx={{
          margin: "3px",
          borderRadius: "20px",
          borderColor: selectedSize === size ? "black" : undefined,
          backgroundColor: selectedSize === size ? "black" : undefined,
          color: selectedSize === size ? "white" : "black",
          fontWeight: selectedSize === size ? "bold" : "normal",
          padding: "4px 8px",
        }}
      />
    ));
  };

  const renderDressStyleOptions = () => {
    const styles = ["Casual", "Formal", "Party", "Gym"];
    return styles.map((style) => (
      <Box
        key={style}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "4px 0",
        }}
        onClick={() => handleDressStyleChange(style)}
      >
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "12px",
            color: "#909090",
          }}
        >
          {style}
        </Typography>
        <IconButton size="small"></IconButton>
      </Box>
    ));
  };

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "80%", md: "70%", lg: "80%" }, 
        padding: "8px",
        border: "1px solid #ddd",
        borderRadius: 4,
        bgcolor: "white",
        position: "relative",
        overflow: "auto",
        maxWidth: "120%",
        boxSizing: "border-box",
        fontFamily: "Arial, sans-serif",
        marginLeft: { xs: 0, sm: "20px", md: "40px" }, 
      }}
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: "bold" }}>
          Filters
        </Typography>
        <FilterIcon />
      </Box>
      <Divider sx={{ my: 1 }} />
      <List>
        {["T-shirts", "Shorts", "Shirts", "Hoodie", "Jeans"].map((category) => (
          <ListItem disablePadding key={category}>
            <Accordion elevation={0} sx={{ width: "100%" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ padding: 0 }}
              >
                <Typography
                  sx={{
                    fontWeight: "400px",
                    fontSize: "14px",
                    color: "#909090",
                  }}
                >
                  {category}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Filter options for {category}...</Typography>
              </AccordionDetails>
            </Accordion>
          </ListItem>
        ))}

        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <Accordion elevation={0} sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ padding: 0 }}
            >
              <Typography
                sx={{
                  fontWeight: "700px",
                  fontSize: "16px",
                  color: "#000000",
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
                sx={{ color: "black" }}
              />
              <Typography variant="body2">
                ${priceRange[0]} - ${priceRange[1]}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ListItem>

        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <Accordion elevation={0} sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ padding: 0 }}
            >
              <Typography
                sx={{
                  fontWeight: "700px",
                  fontSize: "16px",
                  color: "#000000",
                }}
              >
                Colors
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {renderColorOptions()}
              </Box>
            </AccordionDetails>
          </Accordion>
        </ListItem>

        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <Accordion elevation={0} sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ padding: 0 }}
            >
              <Typography
                sx={{
                  fontWeight: "700px",
                  fontSize: "16px",
                  color: "#000000",
                }}
              >
                Size
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {renderSizeOptions()}
              </Box>
            </AccordionDetails>
          </Accordion>
        </ListItem>

        <Divider sx={{ my: 1 }} />
        <ListItem disablePadding>
          <Accordion elevation={0} sx={{ width: "100%" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ padding: 0 }}
            >
              <Typography
                sx={{
                  fontWeight: "700px",
                  fontSize: "16px",
                  color: "#000000",
                }}
              >
                Dress Style
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                {renderDressStyleOptions()}
              </Box>
            </AccordionDetails>
          </Accordion>
        </ListItem>
      </List>

      <Stack
        direction="row"
        spacing={2}
        sx={{ mt: 2, flexDirection: { xs: "column", sm: "row" } }}
      >
        <Button variant="contained"   sx = {{
          backgroundColor:'#000000',
          borderRadius:'62px',
          width:'300px',
          height:'50px',
         
        }}>
          Apply
        </Button>
       
      </Stack>
    </Box>
  );
};

export default FilterComponent;
