import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../../constants/data";
import { styled } from "@mui/material";
const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "280px",
  [theme.breakpoints.down("md")]: {
    height: "170px",
    objectFit: "cover",
  },
}));

const Banner = () => {
  return (
    <Carousel
      responsive={responsive}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-itm-padding-40px"
      containerClass="carousel-container"
      infinite={true}
      swipeable={false}
      draggable={false}
      showDots={false}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      slidesToSlide={1}
    >
      {bannerData.map((item) => (
        <Image src={item.url} alt="product banner" />
      ))}
    </Carousel>
  );
};

export default Banner;
