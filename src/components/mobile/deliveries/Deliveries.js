import React from "react";
import banner from "images/bonuses.png";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px 0px",
    backgroundColor: "rgba(236, 236, 236,0.5)",
    minHeight: 300,
    position: "relative",
    padding: "10px 5px",
  },
  banner: {
    width: "70%",
    margin: "auto",
    position: "relative",
    top: -40,
  },
  text: {
    marginTop: -20,
    fontSize: 20,
    fontWeight: 600,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#fc0",
    color: "black",
    padding: "10px 30px",
    margin: "auto",
  },
}));
const Deliveries = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <img className={classes.banner} alt="bonuses" src={banner} />
      <Typography className={classes.text}>
        Three free deliveries per month
      </Typography>
      <Box margin="20px 0" display="flex" justifyContent="center" width="100%">
        <Button className={classes.button}>More details</Button>
      </Box>
    </Box>
  );
};

export default Deliveries;
