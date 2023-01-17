import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles({
  imgslider: {
    width: "100%",
    height: 200,
    padding: 1,
    objectFit: "contain",
  },
  subtitle: {
    textAlign: "center",
    position: "relative",
    top: "-20px",
    letterSpacing: 2,
    fontSize: 10,
    color: "white",
    textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
  },
  "@global": {
    ".react-multi-carousel-list": {
      direction: "initial",
    },
    ".react-multi-carousel-dot button": {
      backgroundColor: "#e2e8f0 !important",
      width: "8px !important",
      height: "8px !important",
      margin: "0 5px",
      border: "1px solid #e2e8f0 !important",
    },
    ".react-multi-carousel-dot--active button": {
      backgroundColor: "black !important",
      width: "8px !important",
      height: "8px !important",
      margin: "0 5px",
      border: "1px solid black !important",
    },
  },
});
const Slider = ({ detail }) => {
  const classes = useStyles();
  return (
    <div
      style={{
        paddingBottom: "30px",
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
        renderDotsOutside={true}
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
        {detail?.images?.map((item) => (
          <div className="cursor-pointer" key={item.id}>
            <img
              alt="slide"
              className={classes.imgslider}
              src={`https://nandwsouk.com/${item?.url}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Slider;
