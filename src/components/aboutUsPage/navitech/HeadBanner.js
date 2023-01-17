import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import RoomIcon from "@material-ui/icons/Room";
import aboutusheader from 'images/aboutusheader.mp4'
const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },
  wrapper: {
    height: 500,
    width: "100%",
    objectFit: "cover",
    position: "relative",
    [theme.breakpoints.down(900)]:{
      height: 400,
    }
  },
  video: {
    position: "absolute",
    height: 500,
    top: 0,
    width: "100%",
    zIndex: 0,
    objectFit: "cover",
    [theme.breakpoints.down(900)]:{
      height: 400,
    }
  },
  titletext:{
    fontSize:"5.5em",
    [theme.breakpoints.down(900)]:{
      fontSize:"2em",
    }
  },
  title: {
    margin: "auto",
    padding: "100px 0",
    textAlign: "center",
    zIndex: 1,
    position:"relative",
    color: "white",
    textShadow: "2px 1px 2px black",
    [theme.breakpoints.down(900)]:{
      padding: 50
    }
  },
  ageLimit: {
    borderRadius: "50%",
    border: "2px solid white",
    padding: 5,
    margin: "0 5px",
    opacity: 0.5,
  },
}));
const HeadBanner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h1 className={`font-bold uppercase ${classes.titletext}`}>
            Naviteche 2020
          </h1>
          <div className="md:text-2xl my-2">
            12<sup>th</sup> International Exhibition Navigation systems,
            technologies and services
          </div>
          <div className="md:text-3xl text: mt-6">
            XIV<sup>th</sup> Inter­national Navi­gation Forum
          </div>
          <div className="md:text-4xl text-xl mt-6 font-bold">November 2–6, 2020</div>
          <div className="md:text-base text-xs  my-6 font-hairline">
            <RoomIcon /> Expocentre, Moscow, pavilion No. 8 (halls 1, 3)
            <span className={classes.ageLimit}>12+</span>
          </div>
        </div>
        <video className={classes.video} autoPlay loop muted>
          <source
            src={aboutusheader}
            type="video/mp4"
          />
          <source
            src="https://www.navitech-expo.ru/common/img/uploaded/exhibitions/navitech2020/img/navitech_web_back.webm"
            type="video/webm"
          ></source>
           Your browser does not support HTML5 video.
        </video>
      </div>
    </div>
  );
};

export default HeadBanner;
