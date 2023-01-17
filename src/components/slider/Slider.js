import { makeStyles } from "@material-ui/core";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useSelector } from "react-redux";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    margin: "20px 0",
  },
  main: {
    minHeight: 400,
    padding: 20,
    boxShadow: "none",
    border: "1px solid #DCDEE3",
  },
  marketLink: {
    color: "#333",
    textOverflow: "ellipsis",
    lineHeight: "38px",
    fontSize: "15px",
    "&:hover": {
      color: "#FF6A00",
    },
    textDecoration: "none",
  },
  marketListItem: {
    paddingBottom: 0,
    paddingTop: 0,
  },
  justifyCenter: {
    textAlign: "center",
  },
  rightBoxTopLink: {
    background: "#12225B",
    color: "white",
    height: 32,
    lineHeight: "29px",
    display: "block",
    textDecoration: "none",
  },
  rightBoxMiddleLink: {
    position: "relative",
    display: "block",
    boxSizing: "border-box",
    paddingLeft: "16px",
    height: "120px",
    width: "100%",
    borderBottom: "1px solid rgba(220,222,227,.7)",
    overflow: "hidden",
    textDecoration: "none",
    //color:'#fff',
  },
  rightBoxMiddleBoxFirtLink: {
    color: "#333",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 700,
  },
  sourceNow: {
    display: "inline-block",
    maxWidth: 110,
    padding: "0 10px",
    color: "#fff",
    borderRadius: 10,
    fontSize: 12,
    lineHeight: "19px",
    height: 20,
    background: "#12225B",
  },
  rightBoxImage: {
    position: "absolute",
    left: -15,
    bottom: -3,
  },
  imageZoom: {
    maxHeight: 80,
    maxWidth: 80,
  },
  slider: {
    zIndex: 600,
  },
  MarketTitle: {
    fontSize: 20,
    fontWeight: 500,
  },
  "@global": {
    ".react-multi-carousel-list": {
      direction: "initial",
    },
    ".react-multi-carousel-dot-list": {
      bottom: "20px !important",
    },
    ".react-multi-carousel-dot button": {
      backgroundColor: "#dcdcdc !important",
      width: "7px !important",
      height: "7px !important",
      margin: "0 5px",
      border: "1px solid #dcdcdc !important",
    },
    ".react-multi-carousel-dot--active button": {
      backgroundColor: "blue !important",
      width: "7px !important",
      height: "7px !important",
      margin: "0 5px",
      border: "1px solid blue !important",
    },
    ".react-multiple-carousel__arrow--right": {
      right: 40,
    },
    ".react-multiple-carousel__arrow--left": {
      left: 40,
    },
    ".react-multiple-carousel__arrow": {
      minWidth: "50px !important",
      zIndex: "1 !important",
      height: "50px !important",
      borderRadius: "50% !important",
      color: "black !important",
      backgroundColor: "rgba(255, 255, 255, 0.6) !important",
      "&::before": {
        color: "rgba(0,0,0,0.8) !important",
      },
    },
  },
  buttonGp: {
    position: "ltr !important",
    height: 0,
    width: 80,
    backgroundColor: "white",
    right: 30,
  },
  arrowBtn: {
    marginTop: "-25px",
    width: 45,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    position: "absolute",
    border: "none",
    backgroundColor: "rgba(255,255,255,0.8)",
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
});
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
const Slider = (props) => {
  const classes = useStyles();
  const Brands = useSelector((state) => state.Brands);
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
        arrows={false}
        customButtonGroup={
          <ButtonGroup next={props.next} previous={props.previous} />
        }
        draggable
        autoPlay={true}
        autoPlaySpeed={7000}
        focusOnSelect={false}
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        infinite
        showDots={props.dots}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 0,
            },
            items: props.ItemsToShow,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 1024,
              min: 0,
            },
            items: props.ItemsToShowMobile,
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

export default Slider;
