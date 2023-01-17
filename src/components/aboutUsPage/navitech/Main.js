import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Button } from "@material-ui/core";
import PictButton from "./PictButton";
import ListIcon from "@material-ui/icons/List";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import InfoIcon from "@material-ui/icons/Info";
import PieChartIcon from "@material-ui/icons/PieChart";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1000,
    padding:"20px 0",
    margin: "auto",
    position: "relative",
  },
  videoBox: {
    marginTop: "2em",
    width: "100%",
    height: 80,
    backgroundColor: "#f2f2f2",
    display: "flex",
    alignItems: "center",
    padding: "1em",
    justifyContent: "center",
    color: "#846e91",
    cursor: "pointer",
    "&:hover": {
      color: "#6f249b",
      "& $playIcon":{
        backgroundColor: "#6f249b",
      },
    },

    [theme.breakpoints.down(900)]:{
      fontSize:12,
      height: 50,
    }
  },
  playIcon: {
    backgroundColor: "#846e91",
    borderRadius: "50%",
    width: 50,
    height: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down(900)]:{
      width: 20,
      height: 20,
    }
  },
  play: {
    fontSize: 40,
    color: "#f2f2f2",
    width: 25,
    height: 25,
    [theme.breakpoints.down(900)]:{
      width: 15,
      height: 15,
    }
  },
  getbtn: {
    backgroundColor: "#faa149",
    width: 200,
    marginTop:10,
    borderRadius: 1,
    height: 40,
    fontSize: 11,
    fontWeight: 700,
    margin: "0 10px",
    color: "white",
    "&:hover": {
      backgroundColor: "#846e91",
    },
    [theme.breakpoints.down(900)]:{
      width: "100%"
    }
  },
  booth: {
    backgroundColor: "transparent",
    width: 200,
    marginTop:10,
    borderRadius: 1,
    height: 40,
    fontSize: 11,
    border: "1px solid #846e91",
    fontWeight: 700,
    margin: "0 10px",
    color: "#846e91",
    "&:hover": {
      backgroundColor: "#846e91",
      color: "white",
    },
    [theme.breakpoints.down(900)]:{
      width: "100%"
    }
  },
  icon: {
    fontSize: 35,
    color: "#846e91",
  },
}));
const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="flex flex-wrap ">
        <div className="md:w-4/6 p-2">
          <div className="p-2 w-full">
            <h4 className="text-center font-medium md:text-xl leading-6">
              NAVITECH runs within the
              <a className="px-2" style={{ color: "#846e91" }} href="#test">
                Russian Week of High Technologies
              </a>
            </h4>
            <h5 className="text-center md:font-normal leading-6 my-4">
              NAVITECH: Your New Business Opportunities
            </h5>
            <p className="text-justify text-xs md:text-sm text-gray-700">
              <strong className="text-black ">NAVITECH</strong> is Russia’s
              largest project which brings together global leaders of the
              satellite navigation, navigation and information technologies,
              geodesy and mapping market.
            </p>
            <p className="text-justify text-xs md:text-sm text-gray-700 mt-4">
              is Russia’s largest project which brings together global leaders
              of the satellite navigation, navigation and information
              technologies, geodesy and mapping market.
            </p>
          </div>
          <div className={classes.videoBox}>
            <div className={classes.playIcon}>
              <PlayArrowIcon className={classes.play} />
            </div>
            <p className="px-2">
              Video of The Russian Week of High Technologies '2019
            </p>
          </div>
          <div className="mt-6 flex md:flex-row flex-col items-center justify-center">
            <Button className={classes.getbtn}>Get electronic ticket</Button>
            <Button className={classes.booth}>Book a booth</Button>
          </div>
        </div>
        <div className="md:w-2/6 w-full p-2">
          <div className="text-center p-2">
            <PictButton
              icon={<ListIcon className={classes.icon} />}
              text="Product sector"
            />
            <PictButton
              icon={<TrendingUpIcon className={classes.icon} />}
              text="Your advantages"
            />
            <PictButton
              icon={<InfoIcon className={classes.icon} />}
              text="Benefits of visiting"
            />
            <PictButton
              icon={<PieChartIcon className={classes.icon} />}
              text="NAVITECH 2019 results"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
