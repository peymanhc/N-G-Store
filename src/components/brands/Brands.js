import React, { useState } from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
    padding: "0 10px",
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
  },
  imgbrand: {
    border: "1px solid rgba(0,0,0,0.2)",
    padding: "5px",
    width: "100%",
    height: 50,
    objectFit: "contain",
    cursor: "pointer",
  },
  showmore: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 700,
    color: "#60b6ff",
    cursor: "pointer",
  },
}));
const Brands = ({ images, handleChangeBrand }) => {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);
  return (
    <Box className={classes.root}>
      <Box width="100%">
        <Typography className={classes.title}>Brands</Typography>
        <Grid container>
          {images?.slice(0, visible ? test.length : 4).map((item, i) => (
            <Grid key={i} item xs={6}>
              <Box margin="7px">
                <img
                  onClick={(e) => handleChangeBrand(item.title, i)}
                  className={classes.imgbrand}
                  alt="brand"
                  src={`https://nandwsouk.com/${item.imageSrc}`}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        <Typography
          onClick={() => setVisible(!visible)}
          className={classes.showmore}
        >
          {visible ? "Show Less" : "View More"}
        </Typography>
      </Box>
    </Box>
  );
};
const test = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export default Brands;
