import { Box } from "@mui/material";
import React from "react";
import TopHeader from "../../CommonComponents/TopHeader";
import Header from "../../CommonComponents/Header";
import CartComponent from "./Components/CartComponent";
const CartPage : React.FC= () => {
    return(
<Box>
    <TopHeader/>;
    <Header/>;
    <CartComponent/>;
</Box>
    );
};
export default CartPage;