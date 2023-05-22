import { Box, Button, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled(Box)`
  align-items: center;
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
  }
`;
const CartContainer = styled(Box)`
  display: flex;
`;
const LoginButton = styled(Button)`
  background-color: #ffffff;
  border-radius: 2px;
  box-shadow: none;
  color: #2874f0;
  font-weight: 600;
  height: 32px;
  padding: 5px 40px;
  text-transform: none;
`;
const CustomButtons = () => {
  return (
    <Wrapper>
      <LoginButton variant="contained">Login</LoginButton>
      <Typography style={{ marginTop: "3px", width: "135px" }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: "3px" }}>More</Typography>
      <CartContainer>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </CartContainer>
    </Wrapper>
  );
};

export default CustomButtons;
