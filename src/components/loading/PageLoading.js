import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import LOGO from "images/Logo.png";
const useStyles = makeStyles((theme) => ({
  loadwrapp: {
    textAlign: "center",
    fontWeight: 700,
    color: "#fc0",
  },

  letterholder: {
    padding: "20px",
  },
  l_1: {
    "animation-delay": "0.48s",
    animation: `$loadingF 200ms ${theme.transitions.easing.easeInOut}`,
    "animation-duration": "1.6s",
    "animation-iteration-count": "infinite",
    "animation-direction": "initial",
    display: "inline-block",
    fontSize: "2.6rem",
    margin: "0 3px",
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },

  l_2: {
    "animation-delay": "0.6s",
    animation: `$loadingF 200ms ${theme.transitions.easing.easeInOut}`,
    "animation-duration": "1.6s",
    "animation-iteration-count": "infinite",
    "animation-direction": "initial",
    display: "inline-block",
    fontSize: "2.6rem",
    margin: "0 3px",
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },

  l_3: {
    "animation-delay": "0.72s",
    animation: `$loadingF 200ms ${theme.transitions.easing.easeInOut}`,
    "animation-duration": "1.6s",
    "animation-iteration-count": "infinite",
    "animation-direction": "initial",
    display: "inline-block",
    fontSize: "2.6rem",
    margin: "0 3px",
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },

  l_4: {
    "animation-delay": "0.84s",
    animation: `$loadingF 200ms ${theme.transitions.easing.easeInOut}`,
    "animation-duration": "1.6s",
    "animation-iteration-count": "infinite",
    "animation-direction": "initial",
    display: "inline-block",
    fontSize: "2.6rem",
    margin: "0 3px",
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },

  l_5: {
    "animation-delay": "0.96s",
    animation: `$loadingF 200ms ${theme.transitions.easing.easeInOut}`,
    "animation-duration": "1.6s",
    "animation-iteration-count": "infinite",
    "animation-direction": "initial",
    display: "inline-block",
    fontSize: "2.6rem",
    margin: "0 3px",
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },

  l_6: {
    "animation-delay": "1.08s",
    animation: `$loadingF 200ms ${theme.transitions.easing.easeInOut}`,
    "animation-duration": "1.6s",
    "animation-iteration-count": "infinite",
    "animation-direction": "initial",
    display: "inline-block",
    fontSize: "2.6rem",
    margin: "0 3px",
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },

  l_7: {
    "animation-delay": "1.2s,",
    animation: `$loadingF 200ms ${theme.transitions.easing.easeInOut}`,
    "animation-duration": "1.6s",
    "animation-iteration-count": "infinite",
    "animation-direction": "initial",
    display: "inline-block",
    fontSize: "2.6rem",
    margin: "0 3px",
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },

  l_8: {
    "animation-delay": "1.32s",
    animation: `$loadingF 200ms ${theme.transitions.easing.easeInOut}`,
    "animation-duration": "1.6s",
    "animation-iteration-count": "infinite",
    "animation-direction": "initial",
    display: "inline-block",
    fontSize: "2.6rem",
    margin: "0 3px",
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },

  l_9: {
    "animation-delay": "1.44s",
    animation: `$loadingF 200ms ${theme.transitions.easing.easeInOut}`,
    "animation-duration": "1.6s",
    "animation-iteration-count": "infinite",
    "animation-direction": "initial",
    display: "inline-block",
    fontSize: "2.6rem",
    margin: "0 3px",
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },

  l_10: {
    "animation-delay": "1.56s",
    animation: `$loadingF 200ms ${theme.transitions.easing.easeInOut}`,
    "animation-duration": "1.6s",
    "animation-iteration-count": "infinite",
    "animation-direction": "initial",
    display: "inline-block",
    fontSize: "2.6rem",
    margin: "0 3px",
    [theme.breakpoints.down("md")]: {
      fontSize: 16,
    },
  },
  "@keyframes loadingF": {
    "0%": {
      opacity: 0,
    },
    "100%": {
      opacity: 1,
    },
  },
  subtext: {
    textAlign: "center",
    fontSize: 13,
    color: "red",
    fontWeight: 700,
    marginTop: 20,
    [theme.breakpoints.down("md")]: {
      marginTop: 10,
      fontSize: 12,
    },
  },
  logo: {
    width: 350,
    [theme.breakpoints.down("md")]: {
      width: 200,
    },
  },
}));

const PageLoading = () => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      minHeight="70vh"
      padding="50px"
    >
      <img className={classes.logo} alt="logo" src={LOGO} />
      <div className={classes.letterholder}>
        <div>
          <div className={classes.loadwrapp}>
            <div className={classes.l_1}>N</div>
            <div className={classes.l_2}>&</div>
            <div className={classes.l_3}>W</div>
            <div className={classes.l_4}>S</div>
            <div className={classes.l_5}>O</div>
            <div className={classes.l_6}>U</div>
            <div className={classes.l_7}>K</div>
            <div className={classes.l_8}>.</div>
            <div className={classes.l_9}>.</div>
            <div className={classes.l_10}>.</div>
          </div>
          <p className={classes.subtext}>Modern Market</p>
        </div>
      </div>
    </Box>
  );
};

export default PageLoading;
