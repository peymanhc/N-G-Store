import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 30,
    maxWidth: 1000,
    margin: "auto",
  },
  title: {
    fontSize: 18,
    fontWeight: 500,
  },
  card: {
    height: 400,
    backgroundColor: "rgba(230,244,254)",
    margin: 50,
    boxShadow: "1px -1px 14px rgba(0, 0, 0, 0.2)",
  },
  arrowBtn: {
    backgroundColor: "#846e91",
    borderRadius: "50%",
    width: 35,
    height: 35,
    position: "absolute",
    top: 0,
    transition: "300ms",
  },
  arrow: {
    width: 15,
    height: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color:"white",
    margin: "auto",
  },
  buttonGp: {
    height: 50,
    position: "absolute",
    width:80,
    top:0,
    right: 0,
    margin: "auto",
  },
  leftarrow:{
    transform: "rotateY(180deg)",
  },

  carousel: {
    direction: "initial !important",
    position: "relative",
  },
  cardbox: {},
  img: {
    width: "100%",
    height: 160,
    objectFit: "cover",
  },
  "@global": {
    ".react-multi-carousel-dot button": {
      width: "7px !important",
      height: "7px !important",
      backgroundColor: "white !important",
    },
    ".react-multi-carousel-dot--active button": {
      backgroundColor: "white !important",
      width: "10px !important",
      height: "10px !important",
      borderColor: "none",
    },
    ".react-multi-carousel-list":{
      paddingTop:50
    }
  },
  seeAllBtn: {
    color: "#846e91",
    border: "1px solid #846e91",
    fontSize: 10,
    width: 150,
    height: 40,
    display: "flex",
    margin: "20px auto",
  },
}));

const ButtonGroup = ({ next, previous }) => {
  const classes = useStyles();
  return (
    <div className={classes.buttonGp}>
      <button
        style={{ left: 0 }}
        className={classes.arrowBtn}
        onClick={() => previous()}
      >
        <span className={classes.arrow}>
        <ArrowRightAltIcon className={classes.leftarrow} />
        </span>
      </button>
      <button
        style={{ right: 0 }}
        className={classes.arrowBtn}
        onClick={() => next()}
      >
        <span className={classes.arrow}>
        <ArrowRightAltIcon/>
        </span>
      </button>
    </div>
  );
};

const News = (props) => {
  const classes = useStyles();
  const Lists = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>News</h2>
      <div
        style={{
          paddingTop: "30px",
          marginTop:-60,
          position: "relative",
        }}
      >
      <Carousel
        additionalTransfrom={0}
        arrows={false}
        customButtonGroup={
          <ButtonGroup next={props.next} previous={props.previous} />
        }
        draggable
        infinite
        autoPlay={true}
        focusOnSelect={false}
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        showDots={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 4,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 1024,
              min: 0,
            },
            items: 2,
          },
        }}
        slidesToSlide={2}
        swipeable
      >
        {Lists.map((item, i) => {
          return (
            <div className={`cursor-pointer p-2 ${classes.cardbox}`} key={i}>
              <img
                className={classes.img}
                src="https://www.navitech-expo.ru/common/img/uploaded/exhibitions/navitech/2019/photo/index/IMG_8876_.jpg"
              />
              <p style={{ fontSize: 11 }} className="mt-2 p-2 ">
                EXPOCENTRE AO has featured its projects at the 6th International
                Microelectronics Forum
              </p>
              <span style={{ fontSize: 10 }} className={`text-gray-500 p-2`}>
                29 / 09 / 2020{" "}
              </span>
            </div>
          );
        })}
      </Carousel>
      </div>
      <Button className={classes.seeAllBtn} >All News</Button>
    </div>
  );
};

export default News;
