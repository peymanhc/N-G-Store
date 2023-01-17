import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#846e91",
    padding: 15,
  },
  title: {
    maxWidth: 1000,
    margin: "auto",
    color: "white",
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
    backgroundColor: "white",
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
    margin: "auto",
  },
  buttonGp: {
    height: 50,
    position: "absolute",
    left: 0,
    right: 0,
    margin: "auto",
  },

  carousel: {
    direction: "initial !important",
    position: "relative",
  },
  img: {
    width: "100%",
    height: 250,
    objectFit: "cover",
  },
  "@global": {
    ".react-multi-carousel-list": {
      direction: "initial",
    },
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
  },
  seeAllBtn: {
    color: "white",
    border: "1px solid white",
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
          <img
            alt="arrow"
            src="https://home-school.interneturok.ru/static/img/swiper-button-next.svg"
          />
        </span>
      </button>
      <button
        style={{ right: 0 }}
        className={classes.arrowBtn}
        onClick={() => next()}
      >
        <span className={classes.arrow}>
          <img
            alt="arrow"
            src="https://home-school.interneturok.ru/static/img/swiper-button-prev.svg"
          />
        </span>
      </button>
    </div>
  );
};

const Photos = (props) => {
  const classes = useStyles();
  const Lists = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <div className={classes.root}>
      <h2 className={classes.title}>Photos</h2>
      <div
        style={{
          paddingBottom: "30px",
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
          autoPlay={true}
          focusOnSelect={false}
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          infinite
          showDots={false}
          renderDotsOutside
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
              <div className="cursor-pointer p-2" key={i}>
                <img
                  className={classes.img}
                  src="https://www.navitech-expo.ru/common/img/uploaded/exhibitions/navitech/2019/photo/index/IMG_8876_.jpg"
                />
              </div>
            );
          })}
        </Carousel>
      </div>
      <Button className={classes.seeAllBtn}>All Photos</Button>
    </div>
  );
};

export default Photos;
