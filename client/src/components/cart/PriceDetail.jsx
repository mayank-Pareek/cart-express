import { Box, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";

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
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const deliveryCharges = 10;
  const totalAmount = price - discount + deliveryCharges;
  useEffect(() => {
    calculateTotalAmount();
  }, [cartItems]);

  const calculateTotalAmount = () => {
    let total = 0,
      discount = 0;
    cartItems.map((item) => {
      total += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(total);
    setDiscount(discount);
  };

  return (
    <Box>
      <HeaderWrapper>
        <Header>Price Details</Header>
      </HeaderWrapper>
      <Container>
        <Typography>
          Price ({cartItems?.length} item)
          <Price component="span">${price}</Price>
        </Typography>
        <Discount>
          Discount
          <Price component="span">-${discount}</Price>
        </Discount>
        <Typography>
          Delivery Charges
          <Price component="span">${deliveryCharges}</Price>
        </Typography>
        <Typography variant="h6" marginBottom={"20px"}>
          Total Amount
          <Price component="span">${totalAmount}</Price>
        </Typography>
        <Discount>
          You are saving ${discount - deliveryCharges} on this order
        </Discount>
      </Container>
    </Box>
  );
};

export default PriceDetail;
