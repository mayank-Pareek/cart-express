import styled from "@emotion/styled";
import { Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const Container = styled(Box)`
  background-color: #ffffff;
  border-radius: 2px;
  display: flex;
  margin-left: 10px;
  width: 31%;
`;
const SearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
  font-size:unset;
`;

const SearchIconWrapper = styled(Box)`
  align-self: center;
  color: blue;
  padding: 5px;
`;
const Search = () => {
  return (
    <Container>
      <SearchBase placeholder="Search for products, brands and more" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </Container>
  );
};

export default Search;
