import React from "react";
import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";

const LeftContainer = styled(Box)`
  min-width: 40%;
  padding: 40px 0px 0px 80px;
`;
const ProductImage = styled("img")({
  width: "95%",
  padding: "15px",
});
const StyledButton = styled(Button)`
  width: 48%;
  height: 50px;
  border-radius: 2px;
`;
const ActionItem = ({ product }) => {
  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <ProductImage src={product.detailUrl} alt="Product" />
      </Box>
      <StyledButton
        variant="contained"
        style={{
          marginRight: "10px",
          backgroundColor: "orange",
        }}
      >
        <Cart />
        Add to Cart
      </StyledButton>
      <StyledButton
        variant="contained"
        style={{
          backgroundColor: "#ef5350",
        }}
      >
        <Flash />
        Buy Now
      </StyledButton>
    </LeftContainer>
  );
};

export default ActionItem;
