import { Box, Typography, styled } from "@mui/material";

const HeaderWrapper = styled(Box)`
  padding: 15px 24px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
`;

const Header = styled(Typography)`
  color: #878787;
`;

const Container = styled(Box)`
  padding: 15px 24px;
  background-color: #fff;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
`;

const Price = styled(Box)`
  float: right;
`;

const Discount = styled(Typography)`
  color: #4caf50;
`;

const PriceDetail = ({ cartItems }) => {
  const totalDiscount = cartItems.reduce(
    (total, item) => total + (item.price.mrp - item.price.cost) * item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price.mrp * item.quantity,
    0
  );

  const deliveryCharges = totalPrice * 0.05;

  const totalAmount = totalPrice - totalDiscount + deliveryCharges;

  return (
    <Box>
      <HeaderWrapper>
        <Header>Price Details</Header>
      </HeaderWrapper>
      <Container>
        <Typography>
          Price ({cartItems?.length} item)
          <Price component="span">${totalPrice}</Price>
        </Typography>
        <Discount>
          Discount
          <Price component="span">-${totalDiscount}</Price>
        </Discount>
        <Typography>
          Delivery Charges
          <Price component="span">${deliveryCharges}</Price>
        </Typography>
        <Typography variant="h6" marginBottom={"20px"}>
          Total Amount
          <Price component="span">${totalAmount}</Price>
        </Typography>
        <Discount>You are saving ${totalDiscount} on this order</Discount>
      </Container>
    </Box>
  );
};

export default PriceDetail;
