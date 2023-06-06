import { Box, Button, Grid, Typography, styled } from "@mui/material";
import { useSelector } from "react-redux";

//custom component
import CartItem from "./CartItem";
import PriceDetail from "./PriceDetail";
import EmptyCart from "./EmptyCart";
//styles

const Container = styled(Grid)`
  padding: 30px 135px;
`;

const Header = styled(Box)`
  padding: 15px 24px;
  background-color: #ffffff;
`;

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
          <Grid item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <OrderButtonWrapper>
              <OrderButton>Place Order</OrderButton>
            </OrderButtonWrapper>
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <PriceDetail cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
