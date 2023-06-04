import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import { Box, Grid, Typography, styled } from "@mui/material";
import ActionItem from "./ActionItem";

const Container = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
`;

const Component = styled(Grid)`
  background-color: #ffffff;
  display: flex;
`;

const RightContainer = styled(Grid)`
  margin-top: 50px;
`;
const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.getProductDetails);
  useEffect(() => {
    if (product && id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product, loading]);
  return (
    <Container>
      {product && Object.keys(product).length && (
        <Component container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer lg={8} md={8} sm={8} xs={12}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              style={{
                marginTop: "5px",
                color: "#878787",
                fontSize: "14px",
              }}
            >
              8 ratings and 1 review
            </Typography>
            <Box component="span" style={{ fontSize: 28 }}>
              ${product.price.cost}
            </Box>
            &nbsp;&nbsp;&nbsp;
            <Box component="span" style={{ color: "#878787" }}>
              <strike>${product.price.mrp}</strike>
            </Box>
            &nbsp;&nbsp;&nbsp;
            <Box component="span" style={{ color: "#388e3c" }}>
              {product.price.discount}
            </Box>
          </RightContainer>
        </Component>
      )}
    </Container>
  );
};

export default DetailView;
