import { Box, Button, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import React, { useState, useContext } from "react";
import styled from "@emotion/styled";

///components
import LoginDialog from "../login/LoginDialog";

//context
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

//styles
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
  const [isOpen, setOpen] = React.useState(false);
  const { account,setAccount } = useContext(DataContext);
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount}/>
      ) : (
        <LoginButton variant="contained" onClick={openDialog}>
          Login
        </LoginButton>
      )}
      <Typography style={{ marginTop: "3px", width: "135px" }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: "3px" }}>More</Typography>
      <CartContainer>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </CartContainer>
      <LoginDialog open={isOpen} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
