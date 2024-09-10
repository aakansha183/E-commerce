import { Box, Divider } from "@mui/material";
import React, { useEffect } from "react";
import TopHeader from "../../CommonComponents/TopHeader";
import Header from "../../CommonComponents/Header";
import CartComponent from "./Components/CartComponent";
import Footer from "../../CommonComponents/Footer";
const CartPage : React.FC= () => {

    return(
<Box>
    <TopHeader/>
    <Header/>
    <Divider sx={{ mt: 2,width: '87%',marginLeft:'120px' }} />
    <Box sx = {{marginBottom:'250px'}}>
    <CartComponent/>
   </Box>
    <Footer/>
   
</Box>
    );
};
export default CartPage;