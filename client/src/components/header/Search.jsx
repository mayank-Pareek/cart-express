import styled from "@emotion/styled";
import { Box, InputBase, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

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
  font-size: unset;
`;

const SearchIconWrapper = styled(Box)`
  align-self: center;
  color: blue;
  display: flex;
  padding: 5px;
`;

const ListWrapper = styled(List)`
  position: absolute;
  z-index: 1;
  background-color: #ffffff;
  color: #000;
  margin-top: 34px;
`;

const Search = () => {
  const [text, setText] = useState("");
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.longTitle.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <Container>
      <SearchBase
        placeholder="Search for products, brands and more"
        onChange={handleInputChange}
        value={text}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {text && (
        <ListWrapper>
          {filteredProducts.map((product) => (
            <ListItem key={product.id}>
              <Link
                to={`/product/${product.id}`}
                onClick={() => setText("")}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                {product.title.longTitle}
              </Link>
            </ListItem>
          ))}
        </ListWrapper>
      )}
    </Container>
  );
};

export default Search;
