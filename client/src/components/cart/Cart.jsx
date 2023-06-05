import { Box, Grid, Typography, styled } from "@mui/material";
import { useSelector } from "react-redux";

//custom component
import CartItem from "./CartItem";
import PriceDetail from "./PriceDetail";

//styles

const Container = styled(Grid)`
  padding: 30px 135px;
`;

const Header = styled(Box)`
  padding: 15px 24px;
  background-color: #ffffff;
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
          </Grid>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <PriceDetail />
          </Grid>
        </Container>
      ) : (
        <div>No items</div>
      )}
    </>
  );
};

export default Cart;
