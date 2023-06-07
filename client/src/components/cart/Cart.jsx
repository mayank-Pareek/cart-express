import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { useSelector } from "react-redux";

//custom component
import CartItem from "./CartItem";
import PriceDetail from "./PriceDetail";
import EmptyCart from "./EmptyCart";

//styles

const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 100px",

  [theme.breakpoints.down("md")]: {
    padding: "15px 0px",
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background-color: #ffffff;
`;

const ItemContainer = styled(Grid)(({ theme }) => ({
  paddingRight: "15px",
  [theme.breakpoints.down("md")]: {
    marginBottom: "15px",
  },
}));

const OrderButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background-color: #ffffff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 2px solid #f0f0f0;
`;

const OrderButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background-color: #f44336;
  color: #fff;
  width: 230px;
  height: 50px;
`;

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      {cartItems.length ? (
        <Container container>
          <ItemContainer item lg={8} md={8} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
            <OrderButtonWrapper>
              <OrderButton>Place Order</OrderButton>
            </OrderButtonWrapper>
          </ItemContainer>
          <ItemContainer item lg={4} md={4} sm={12} xs={12}>
            <PriceDetail cartItems={cartItems} />
          </ItemContainer>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
