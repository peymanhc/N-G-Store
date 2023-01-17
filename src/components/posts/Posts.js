import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import Carousel from "react-multi-carousel";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  root: {
    direction: "ltr !important",
    position: "relative",
  },
  imgpainter: {
    width: "35%",
    height: 450,
    objectFit: "cover",
    [theme.breakpoints.down(1050)]: {
      display: "none",
    },
  },
  Posts: {
    margin: "100px 0",
    alignItems: "center",
    position: "relative",
    display: "flex",
  },
  boxSlider: {
    width: "75%",
    height: 350,
    right: 0,
    padding: 30,
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 10,
    boxShadow: "1px 4px 9px 1px rgba(0,0,0,0.4)",
    [theme.breakpoints.down(1050)]: {
      position: "relative",
      width: "80%",
      padding: 30,
      margin: "auto",
    },
  },
  SliderHeader: {
    color: "#f44336",
    backgroundColor: "white",
    fontWeight: "bold",
    height: 50,
    width: 190,
  },
  boxheader: {
    display: "flex",
    width: "100%",
    height: 15,
    borderBottom: "1px solid black",
    textAlign: "center",
  },
  img: {
    width: "100%",
    height: 180,
    objectFit: "cover",
  },
  buttonGp: {
    position:"ltr !important",
    height: 0,
    width: 80,
    backgroundColor: "white",
    right: 30,
  },
  arrowBtn: {
    marginTop:"-25px",
    width: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    position: "absolute",
    border: "none",
    backgroundColor: "#e8e8e8",
    borderRadius: "50%",
    cursor: "pointer",
  },
  arrow: {
    width: 10,
    border: "none",
    height: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    margin: "auto",
  },
  leftarrow: {
    transform: "rotateY(180deg)",
  },
}));
const ButtonGroup = ({ next, previous }) => {
  const classes = useStyles();
  return (
    <div className={classes.buttonGp}>
      <button
        style={{ left: 10 }}
        className={classes.arrowBtn}
        onClick={() => previous()}
      >
        <span className={classes.arrow}>
          <ArrowForwardIosIcon
            style={{ fontSize: 14 }}
            className={classes.leftarrow}
          />
        </span>
      </button>
      <button
        style={{ right: 10 }}
        className={classes.arrowBtn}
        onClick={() => next()}
      >
        <span style={{ color: "black" }} className={classes.arrow}>
          <ArrowForwardIosIcon style={{ fontSize: 14 }} />
        </span>
      </button>
    </div>
  );
};
const Posts = (props) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        customButtonGroup={
          <ButtonGroup next={props.next} previous={props.previous} />
        }
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
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1200,
            },
            items: props.itemsDesktop,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 1200,
              min: 0,
            },
            items: 2,
          },
        }}
        slidesToSlide={2}
        swipeable
      >
        {props.children === undefined ? "" : props.children}
      </Carousel>
    </Box>
  );
};

export default Posts;
