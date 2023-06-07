import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import { Box, Grid, styled } from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";
const Container = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
`;

const Component = styled(Grid)(({ theme }) => ({
  backgroundColor: "#ffffff",
  display: "flex",

  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const RightContainer = styled(Grid)`
  margin-top: 50px;
  padding-left: 25px;
  & > p {
    margin-top: 10px;
  }
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
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <ProductDetail product={product} />
          </RightContainer>
        </Component>
      )}
    </Container>
  );
};

export default DetailView;
