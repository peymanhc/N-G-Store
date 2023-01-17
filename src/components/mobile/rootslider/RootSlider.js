import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const useStyles = makeStyles({
  "@global": {
    ".react-multi-carousel-list": {
      direction: "initial",
    },
    ".react-multi-carousel-dot-list": {
      bottom: "35px !important",
    },
    ".react-multi-carousel-dot button": {
      backgroundColor: "transparent !important",
      width: "8px !important",
      height: "8px !important",
      margin: "0 5px",
      border: "1px solid white !important",
    },
    ".react-multi-carousel-dot--active button": {
      backgroundColor: "white !important",
      width: "8px !important",
      height: "8px !important",
      margin: "0 5px",
      border: "1px solid white !important",
    },
  },
});
const RootSlider = (props) => {
  const classes = useStyles();
  return (
    <div
      style={{
        position: "relative",
        direction: "initial",
      }}
    >
      <Carousel
        additionalTransfrom={0}
        draggable
        arrows={false}
        autoPlay={true}
        autoPlaySpeed={7000}
        focusOnSelect={false}
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        infinite
        showDots
        responsive={{
          desktop: {
            breakpoint: {
              max: 1000,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 40,
          },
        }}
        slidesToSlide={1}
        swipeable
      >
        {props.children === undefined ? "" : props.children}
      </Carousel>
    </div>
  );
};
export default RootSlider;
