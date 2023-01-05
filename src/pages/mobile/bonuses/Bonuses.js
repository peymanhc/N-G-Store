import { Box, Grid, List, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import BonuseNeeded from "components/mobile/bonuseNeeded/BonuseNeeded";
import Deliveries from "components/mobile/deliveries/Deliveries";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import LockIcon from "@material-ui/icons/Lock";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "80px 15px",
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    textAlign: "center",
    maxWidth: "60%",
    margin: "auto",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 100,
    margin: "10px 0px",
    textAlign: "center",
  },
  usesicon: {
    color: "#04b",
    fill: "#04b",
  },
  title2: {
    fontSize: 15,
    fontWeight: 600,
    textAlign: "left",
  },
}));
const Bonuses = () => {
  const classes = useStyles();
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Box className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Your collection of Market Bonuses
      </Typography>
      <Typography variant="h6" className={classes.subtitle}>
        Market Bonuses are your personal way to save money. Buy on Yandex.Market
        and your bonuses will appear here.
      </Typography>
      <Box className={classes.usesicon} display="flex" justifyContent="center">
        <Box margin="0 15px" display="flex" alignItems="center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-2"
          >
            <path d="M6.47 6.255l1.626-5.007a.95.95 0 011.807 0l1.627 5.007h5.266a.95.95 0 01.559 1.719l-4.26 3.095 1.627 5.008a.95.95 0 01-1.462 1.062L9 14.044l-4.26 3.095a.95.95 0 01-1.462-1.062l1.627-5.008-4.26-3.095a.95.95 0 01.559-1.719h5.265zM9 3.321L7.56 7.755H2.895l3.773 2.74-1.441 4.435L9 12.19l3.772 2.74-1.44-4.434 3.771-2.74h-4.662L9 3.32z"></path>
          </svg>
          <Typography variant="p">How to get</Typography>
        </Box>
        <Box margin="0 15px" display="flex" alignItems="center">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-2"
          >
            <path d="M11.347 12.16a2.316 2.316 0 110 4.632 2.316 2.316 0 010-4.632zm0 1.45a.866.866 0 100 1.732.866.866 0 000-1.732zm-8.78-1.45a2.316 2.316 0 110 4.632 2.316 2.316 0 010-4.632zm0 1.45a.866.866 0 100 1.732.866.866 0 000-1.732zm.175-10.114L4.56 9.707l6.963-1.324a2.432 2.432 0 001.978-2.39V3.497H2.741zm-.44-1.5h12.7v3.998a3.932 3.932 0 01-3.199 3.863l-8.3 1.578L.31.529 1.75.107l.552 1.889z"></path>
          </svg>
          <Typography variant="p">How to use</Typography>
        </Box>
      </Box>
      <Deliveries />
      <Typography className={classes.title2} variant="h6">
        What you need to know about Market Bonuses
      </Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <List dense={false}>
            {BonNeed.map((item) => (
              <BonuseNeeded key={item.id} icon={item.icon} text={item.text} />
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

const BonNeed = [
  {
    id: 0,
    icon: <PersonOutlineIcon style={{ color: "#04b" }} />,
    text:
      "To accumulate Market Bonuses, you need to register or enter your personal account.",
  },
  {
    id: 1,
    icon: <LockIcon style={{ color: "#04b" }} />,
    text:
      "If you get a bonus when ordering, it will become active when you receive the product.",
  },
  {
    id: 2,
    icon: <StarBorderIcon style={{ color: "#04b" }} />,
    text:
      "Market Bonuses can be spent one at a time or stacked up and get an order almost free.",
  },
  {
    id: 3,
    icon: <AccessTimeIcon style={{ color: "#04b" }} />,
    text:
      "It's a pity, but the bonuses don't last forever. Their validity period is indicated on the card. Don't let them burn!",
  },
];

export default Bonuses;
