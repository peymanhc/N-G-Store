import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Carousel from "react-multi-carousel";
const useStyles = makeStyles((theme) => ({
  root: {
    direction: "ltr !important",
    position: "relative",
  },
}));
const PostSlider = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        centerMode={props.center}
        draggable
        infinite
        autoPlay={false}
        focusOnSelect={false}
        className={classes.container}
        keyBoardControl
        minimumTouchDrag={80}
        renderDotsOutside={false}
        showDots={false}
        responsive={{
          tablet: {
            breakpoint: {
              max: 1000,
              min: 450,
            },
            items: props.itemslide,
          },
          mobile: {
            breakpoint: {
              max: 450,
              min: 0,
            },
            items:
              props.itemslidesmall === undefined ? 1 : props.itemslidesmall,
          },
        }}
        slidesToSlide={1}
        swipeable
      >
        {props.children === undefined ? "" : props.children}
      </Carousel>
    </Box>
  );
};

export default PostSlider;
