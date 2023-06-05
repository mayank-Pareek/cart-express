import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return( <>{cartItems.length ? <Grid container>
    <Grid item lg={9} md={9} sm={12} xs={12}>
        <Box><Typography>My Cart ({cartItems.length})</Typography></Box>
        {
            // cartItems.map(item=>(

            // ))
        }
    </Grid>
    <Grid item lg={3} md={3} sm={12} xs={12}></Grid>
  </Grid> : <div>No items</div>}</>);
};

export default Cart;
