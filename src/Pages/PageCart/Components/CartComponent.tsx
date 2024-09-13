import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Divider,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../Redux/Store";
import IncrementDecrementBox from "../../PageProductDetails/Components/ComponentIncrementDecrementBox";
import DeleteIcon from "../../../Assests/ImagesData/DeleteIcon";
import { removeItem, updateQuantity } from "../../../Redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TagIcon from "../../../Assests/ImagesData/TagIcon";
import { useNavigate } from "react-router-dom";

type ItemId = string;

const CartComponent: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleIncrement = (itemId: ItemId) => {
    const existingItem = cartItems.find((item) => item.id === itemId);
    if (existingItem) {
      dispatch(
        updateQuantity({ id: itemId, quantity: existingItem.quantity + 1 })
      );
    }
  };

  const handleDecrement = (itemId: ItemId) => {
    const existingItem = cartItems.find((item) => item.id === itemId);
    if (existingItem && existingItem.quantity > 1) {
      dispatch(
        updateQuantity({ id: itemId, quantity: existingItem.quantity - 1 })
      );
    }
  };

  const handleDelete = (itemId: ItemId) => {
    dispatch(removeItem(itemId));
    toast.info("Item removed from cart", {
      theme: "dark",
      autoClose: 2000,
    });
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  useEffect(() => {}, [cartItems]);

  return (
    <Box
      sx={{
        marginLeft: isMobile ? "5px" : "20px",
        padding: isMobile ? "0 10px" : "0",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Poppins",
          fontWeight: "700",
          fontSize: isMobile ? "24px" : "40px",
          lineHeight: isMobile ? "32px" : "48px",
          marginLeft: isMobile ? "0" : "170px",
          marginTop: isMobile ? "40px" : "80px",
          textAlign: isMobile ? "center" : "left",
        }}
      >
        YOUR CART
      </Typography>

      {cartItems.length === 0 ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="300px"
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: "700", fontSize: "24px", color: "grey" }}
          >
            Nothing to show!! Start Adding item to cart...
          </Typography>
        </Box>
      ) : (
        <Box
          display="flex"
          flexDirection={isMobile ? "column" : "row"}
          padding={isMobile ? "15px" : "15px 170px"}
          sx={{ backgroundColor: "#ffffff", marginBottom: -15 }}
        >
          <Box
            flex={isMobile ? "none" : 1.3}
            sx={{
              border: "1px solid #e0e0e0",
              marginRight: isMobile ? "20px" : "20px",
              borderRadius: "20px",
              width: isMobile ? "100%" : "auto",
            }}
          >
            {cartItems.map((item, index) => (
              <Box key={item.id}>
                <Box
                  display="flex"
                  flexDirection={isMobile ? "column" : "row"}
                  alignItems="center"
                  mb={4}
                  sx={{ padding: "20px 24px" }}
                >
                  <Box
                    component="img"
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    sx={{ borderRadius: "10px" }}
                  />
                  <Box
                    flex={1}
                    pl={isMobile ? 0 : 2}
                    textAlign={isMobile ? "center" : "left"}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "27px",
                      }}
                    >
                      {item.name}
                    </Typography>
                    <Typography variant="body2">
                      <span style={{ color: "black" }}>Color:</span>
                      <Typography
                        variant="body2"
                        component="span"
                        style={{ color: "grey" }}
                      >
                        {item.color}
                      </Typography>
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: "5px" }}>
                      <span style={{ color: "black" }}>Size:</span>
                      <Typography
                        variant="body2"
                        component="span"
                        style={{ color: "grey" }}
                      >
                        {item.size}
                      </Typography>
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "700",
                        marginTop: 1,
                        fontSize: "24px",
                        lineHeight: "32.4px",
                      }}
                    >
                      ${item.price}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    flexDirection={isMobile ? "row" : "column"}
                    alignItems={isMobile ? "center" : "flex-end"}
                    gap={isMobile ? "10px" : "0"}
                  >
                    <Box onClick={() => handleDelete(item.id)}>
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                    <IncrementDecrementBox
                      count={item.quantity} // Use item's actual quantity
                      onIncrement={() => handleIncrement(item.id)}
                      onDecrement={() => handleDecrement(item.id)}
                    />
                  </Box>
                </Box>
                {index < cartItems.length - 1 && (
                  <Divider sx={{ margin: "0 24px" }} />
                )}
              </Box>
            ))}
          </Box>

          <Box
            flex={isMobile ? "none" : 1}
            sx={{
              border: "1px solid #e0e0e0",
              borderRadius: "20px",
              padding: isMobile ? "5px" : "20px",
              height: "auto", // Ensure dynamic height
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              width: isMobile ? "100%" : "auto",
              backgroundColor: "#ffffff",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "700",
                fontSize: isMobile ? "20px" : "24px",
                lineHeight: isMobile ? "28px" : "32.4px",
              }}
            >
              Order Summary
            </Typography>
            <Box mb={2}>
              <Grid container justifyContent="space-between">
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "400",
                    fontSize: isMobile ? "16px" : "20px",
                    lineHeight: isMobile ? "22px" : "27px",
                    color: "grey",
                  }}
                >
                  Subtotal
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "700",
                    fontSize: isMobile ? "16px" : "20px",
                    lineHeight: isMobile ? "22px" : "27px",
                  }}
                >
                  ${subtotal}
                </Typography>
              </Grid>
              <Grid container justifyContent="space-between" mt={1}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "400",
                    fontSize: isMobile ? "16px" : "20px",
                    lineHeight: isMobile ? "22px" : "27px",
                    color: "grey",
                  }}
                >
                  Discount (-20%)
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#FF3333",
                    fontWeight: "700",
                    fontSize: isMobile ? "16px" : "20px",
                    lineHeight: isMobile ? "22px" : "27px",
                  }}
                >
                  -${discount.toFixed(2)}
                </Typography>
              </Grid>
              <Grid container justifyContent="space-between" mt={1}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "400",
                    fontSize: isMobile ? "16px" : "20px",
                    lineHeight: isMobile ? "22px" : "27px",
                    color: "grey",
                  }}
                >
                  Delivery Fee
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "700",
                    fontSize: isMobile ? "16px" : "20px",
                    lineHeight: isMobile ? "22px" : "27px",
                  }}
                >
                  ${deliveryFee}
                </Typography>
              </Grid>
              <Divider sx={{ margin: "20px 0" }} />
              <Grid container justifyContent="space-between" mt={1}>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "400",
                    fontSize: isMobile ? "16px" : "20px",
                    lineHeight: isMobile ? "22px" : "27px",
                    color: "grey",
                  }}
                >
                  Total
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: "700",
                    fontSize: isMobile ? "16px" : "20px",
                    lineHeight: isMobile ? "22px" : "27px",
                  }}
                >
                  ${total.toFixed(2)}
                </Typography>
              </Grid>
            </Box>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => navigate("/checkout")}
              sx={{
                backgroundColor: "#000",
                fontSize: "18px",
                textTransform: "none",
                height: "50px",
                borderRadius: "8px",
              }}
            >
              Proceed to Checkout
            </Button>
          </Box>
        </Box>
      )}

      <ToastContainer />
    </Box>
  );
};

export default CartComponent;
