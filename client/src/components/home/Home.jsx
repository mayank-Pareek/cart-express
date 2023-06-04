import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productActions";
import { useDispatch, useSelector } from "react-redux";
const Container = styled(Box)`
  padding: 10px 10px;
  background-color: #f2f2f2;
`;
const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <NavBar />
      <Container>
        <Banner />
        <Slide products={products} />
      </Container>
    </>
  );
};

export default Home;
