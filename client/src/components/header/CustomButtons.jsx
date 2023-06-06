import { Badge, Box, Button, Typography, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import React, { useState, useContext } from "react";

///custom components
import LoginDialog from "../login/LoginDialog";

//context
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

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
    cursor: pointer;
  }

  @media (max-width: 960px) {
    display: block;

    & > * {
      margin: 10px;
    }
  }
`;

const CartContainer = styled(Link)`
  display: flex;
  text-decoration: none;
  color: inherit;
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

//Component for Header Buttons
const CustomButtons = () => {
  const [isOpen, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  const { cartItems } = useSelector((state) => state.cart);
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={openDialog}>
          Login
        </LoginButton>
      )}
      <Typography style={{ marginTop: "3px", width: "135px" }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: "3px" }}>More</Typography>
      <CartContainer to="/cart">
        <Badge badgeContent={cartItems?.length} color="success">
          <ShoppingCart />
        </Badge>
        <Typography marginLeft={"10px"}>Cart</Typography>
      </CartContainer>

      <LoginDialog open={isOpen} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
