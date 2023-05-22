import React from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const Container = styled(Box)`
  padding: 10px 10px;
  background-color: #f2f2f2;
`;
const Home = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Banner />
      </Container>
    </>
  );
};

export default Home;
