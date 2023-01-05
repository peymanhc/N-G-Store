import {
  Box,
  Button,
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
// Icons
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import SmsIcon from "@material-ui/icons/Sms";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import plustoken from "images/plus-token-angle.png";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LockIcon from "@material-ui/icons/Lock";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "20px",
    width: "100%",
    margin: "60px auto",
  },
  title: {
    fontSize: 30,
    lineHeight: "44px",
    fontWeight: 500,
  },
  subtitle: {
    fontSize: 13,
    color: "rgba(0,0,0,0.8)",
    maxWidth: 600,
  },
  item: {
    color: "#04b",
    fontSize: 13,
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    transition: "0.3s",
    "&:hover": {
      color: "red",
      transition: "0.3s",
    },
  },
  gridbox: {
    padding: 20,
    maxWidth: 265,
  },
  bonues: {
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: 350,
    padding: "30px 20px",
    borderRadius: 8,
    backgroundColor: "#f0f2f6",
    border: "1px solid #f0f2f6",
    textAlign: "center",
  },
  bonuestxt: {
    fontSize: 17,
    fontWeight: 700,
  },
  bonuessubtxt: {
    fontSize: 14,
    color: "rgba(0,0,0,0.6)",
  },
  plustoken: {
    width: 30,
    height: 30,
    position: "absolute",
    right: 0,
    top: 0,
  },
  addbtn: {
    backgroundColor: "#fc0",
    color: "black",
    padding: "8px 15px",
    textTransform: "capitalize",
    maxWidth: 120,
    margin: "15px auto",
    "&:hover": {
      backgroundColor: "#fc0",
    },
  },
  textabout: {
    fontSize: 13,
    color: "rgba(0,0,0,0.8)",
  },
}));
const BonusesPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography className={classes.title}>
        My collection of Market Bonuses
      </Typography>
      <Box display="flex" justifyContent="space-between" margin="20px 0">
        <Typography className={classes.subtitle}>
          Market Bonuses are your personal way to save money. Buy on
          Yandex.Market and your bonuses will appear here.
        </Typography>
        <Typography className={classes.item}>
          <SmsIcon style={{ margin: "0 5px" }} />
          More about bonuses
        </Typography>
        <Typography className={classes.item}>
          <StarOutlineIcon style={{ margin: "0 5px" }} />
          How to get
        </Typography>
        <Typography className={classes.item}>
          <ShoppingBasketIcon style={{ margin: "0 5px" }} />
          How to use
        </Typography>
      </Box>
      <Divider />
      <Box
        margin="50px 0"
        display="flex"
        flexWrap="wrap"
        justifyContent="start"
      >
        {[0, 1, 2, 3].map((item, i) => (
          <Box className={classes.gridbox}>
            <Box className={classes.bonues}>
              <img className={classes.plustoken} alt={"plus"} src={plustoken} />
              <Typography className={classes.bonuestxt}>
                More value with a Plus subscription
              </Typography>
              <Typography className={classes.bonuessubtxt}>
                Cashback points are awarded for orders, which can be spent on
                new orders
              </Typography>
              <Button className={classes.addbtn}>Pro Plus</Button>
            </Box>
          </Box>
        ))}
      </Box>
      <Typography className={classes.title}>
        What you need to know about Market Bonuses
      </Typography>
      <Box display="flex" justifyContent="space-between">
        <Box padding="40px">
          <PersonOutlineIcon style={{ color: "#04b", margin: "15px 0" }} />
          <Typography className={classes.textabout}>
            Only regular customers can accumulate Market Bonuses - do not log
            out of your account.
          </Typography>
        </Box>
        <Box padding="40px">
          <LockIcon style={{ color: "#04b", margin: "15px 0" }} />
          <Typography className={classes.textabout}>
            If you get a bonus when ordering, it will become active when you
            receive the product.
          </Typography>
        </Box>
        <Box padding="40px">
          <StarOutlineIcon style={{ color: "#04b", margin: "15px 0" }} />
          <Typography className={classes.textabout}>
            Market Bonuses can be spent one at a time or stacked up and get an
            order almost free.
          </Typography>
        </Box>
        <Box padding="40px">
          <AccessTimeIcon style={{ color: "#04b", margin: "15px 0" }} />
          <Typography className={classes.textabout}>
            It's a pity, but the bonuses don't last forever. Their validity
            period is indicated on the card. Don't let them burn!
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default BonusesPage;
