import React from "react";
import { Avatar, Box, Grid, makeStyles, Typography } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "30px 0",
  },
  name: {
    fontSize: 14,
    fontWeight: 700,
  },
  title: {
    padding: "10px 0",
    fontSize: 25,
    fontWeight: 700,
    borderBottom: "1px solid rgba(0,0,0,0.2) ",
  },
  commenstnum: {
    color: "rgba(0,0,0,0.4)",
  },
  commenttitle: {
    color: "black",
    fontSize: 10,
    margin: "0 10px",
  },
  time: {
    fontSize: 10,
    color: "gray",
    margin: "0 10px",
  },
  commenttxt: {
    fontSize: 13,
    fontWeight: 400,
  },
  "@global": {
    ".MuiPaginationItem-page.Mui-selected": {
      width: "100%",
      backgroundColor: "rgba(255, 204, 0,0.3)",
      border: "1px solid #ffcc00",
      fontWeight: "bold",
      borderRadius: 0,
      "&:hover": {
        backgroundColor: "rgba(255, 204, 0,0.3)",
      },
    },
    ".MuiPaginationItem-outlined": {
      width: "100%",
      borderRadius: 0,
    },
  },
}));
const CommentDetail = () => {
  const classes = useStyles();
  return (
    <Box>
      {[0, 1].map(() => (
        <Grid style={{ margin: "10px 0" }} container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar
              alt="Peymanhc"
              src="https://i.pinimg.com/736x/e0/72/ca/e072caf6cab0307e13381a7637fa484d.jpg"
            />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <Box display="flex" alignItems="center">
              <Typography variant="h4" className={classes.name}>
                Michel Michel
              </Typography>
              <Typography className={classes.time}>
                posted 1 minute ago
              </Typography>
            </Box>
            <Box display="flex">
              <Typography className={classes.commenttxt}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna .
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" marginTop="10px">
              <Rating value={5} style={{ fontSize: 15 }} />
              <Typography className={classes.commenttitle}>
                The best in its class
              </Typography>
            </Box>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default CommentDetail;
