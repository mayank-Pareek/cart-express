import { Box, Button, Divider, Typography, styled } from "@mui/material";
import React from "react";
import Carousel from "react-multi-carousel";
import Countdown from "react-countdown";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  margin-top: 10px;
  background-color: #ffffff;
`;
const Deal = styled(Box)`
  padding: 15px 20px;
  display: flex;
`;
const Timer = styled(Box)`
  display: flex;
  align-items: center;
  margin-left: 10px;
  color: #7f7f7f;
`;

const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 600;
  margin-right: 22px;
  line-height: 32px;
`;
const ViewButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 13px;
`;

const ProductWrapper = styled(Box)`
  text-align: center;
  padding: 25px 15px;
`;

const ProductImage = styled("img")({
  width: "auto",
  height: "150px",
});

const ProductText = styled(Typography)`
  font-size: 14px;
  margin-top: 5px;
`;

const Slide = ({ products, title, timer }) => {
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours}:{minutes}:{seconds} Left
      </Box>
    );
  };

  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg"
              alt="clock"
              width={"24px"}
            />
            <Countdown date={Date.now() + 8.64e7} renderer={renderer} />
          </Timer>
        )}
        <ViewButton variant="contained" color="primary">
          View all
        </ViewButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        infinite={true}
        swipeable={false}
        draggable={false}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        centerMode={true}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-itm-padding-40px"
        containerClass="carousel-container"
      >
        {products.map((product) => (
          <Link to={`product/${product.id}`} style={{ textDecoration: "none" }}>
            <ProductWrapper>
              <ProductImage src={product.url} alt="product" />
              <ProductText fontWeight={"600"} color={"#212121"}>
                {product.title.shortTitle}
              </ProductText>
              <ProductText color={"green"}>{product.discount}</ProductText>
              <ProductText color={"#757575"}>{product.tagline}</ProductText>
            </ProductWrapper>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
};

export default Slide;
