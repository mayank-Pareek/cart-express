import { Box, Typography } from "@mui/material";
import React from "react";
import { navData } from "../../constants/data";
import styled from "@emotion/styled";

const Container = styled(Box)`
  display: flex;
  margin: 55px 18px 0px;
  justify-content: space-between;
`;

const Wrapper = styled(Box)`
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Text = styled(Typography)`
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
`;
const NavBar = () => {
  return (
    <Container>
      {navData.map((item) => (
        <Wrapper>
          <img src={item.url} width="64px" alt="product category" />
          <Text>{item.text}</Text>
        </Wrapper>
      ))}
    </Container>
  );
};

export default NavBar;
