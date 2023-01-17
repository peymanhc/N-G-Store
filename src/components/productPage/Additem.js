import React from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/";
import Rating from "@material-ui/lab/Rating";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  addbtn: {
    margin: "10px 0",
    backgroundColor: "#fc0",
    color: "black",
    width: "100%",
    padding: 18,
    "&:hover": {
      backgroundColor: "#fc0",
    },
  },
  name: {
    textTransform: "uppercase",
  },
  reviews: {
    color: "blue",
  },
  addcmm: {
    width: "100%",
    padding: "10px",
    backgroundColor: "white",
    borderRadius: 4,
    margin: "10px 0",
    color: "rgba(0,0,0,0.5)",
    border: "2px solid rgba(0,0,0,0.2)",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.5)",
      color: "white",
    },
  },
  plus: {
    border: "1px solid rgba(0,0,0,0.1)",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 15,
    padding: "10px 0",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  plusicon: {
    width: 70,
    height: 70,
    margin: "10px",
    backgroundColor: "blue",
    color: "white",
    "&:hover": {
      backgroundColor: "blue",
    },
  },
  descriptionplus: {
    color: "blue",
    marginBottom: 20,
  },
}));
const Additem = (props) => {
  const classes = useStyles();
  return (
    <Box margin="0 20px">
      <Divider style={{ margin: "10px 0" }} />
      <Box className={classes.detailpro}>
        <Typography className={classes.name}>{props?.detail?.name}</Typography>
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Box display="flex" justifyContent="space-between">
            <Rating readOnly value={props.detail?.taxRate} />
            <Typography className={classes.reviews}>
              {props.detail?.like} reviews
            </Typography>
          </Box>
        </Box>
        <Button className={classes.addcmm}>Add Comment</Button>
        <Typography className="my-2">
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna .
        </Typography>
      </Box>
      <Box className={classes.plus}>
        <IconButton className={classes.plusicon}>+</IconButton>
        <Typography className={classes.descriptionplus}>
          Lorem ipsum dolor sit amet
        </Typography>
        <Divider style={{ margin: "10px 0", width: "100%" }} />
        <Box
          style={{ cursor: "pointer" }}
          color="rgba(0,0,0,0.4)"
          display="flex"
          justifyContent="space-between"
          padding="20px"
          width="100%"
        >
          <Typography>I don't know What that mean</Typography>
          <ArrowForwardIosIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Additem;
