import React, { useState } from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import classNames from "classnames";
import { useSelector } from "react-redux";
import MagenifyImg from "./MagenifyImg";

const useStyles = makeStyles((theme) => ({
  items: {
    margin: "10px 0px",
    width: "60%",
    border: "2px solid white",
    padding: 5,
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  active: {
    border: "2px solid #fc0",
    borderRadius: 5,
  },
  bigimg: {
    margin: "auto",
    width: "85%",
    height: 500,
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  images: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  mobile: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "flex",
    },
  },
}));
const ImageGallery = () => {
  const [image, setimage] = useState(0);
  const handleSetImage = (index) => {
    setimage(index);
  };
  const productDetail = useSelector((state) => state.productDetail);
  const classes = useStyles();
  return (
    <Box>
      {productDetail?.data?.data?.images === undefined ? null : (
        <>
          <Grid container spacing={6}>
            <Grid className={classes.images} item xs={3} md={2}>
              <Box>
                <img
                  alt="1"
                  className={classNames(
                    classes.items,
                    image === 0 ? classes.active : ""
                  )}
                  style={{
                    display:
                      productDetail?.data?.data?.images === undefined && "none",
                  }}
                  onClick={() => handleSetImage(0)}
                  src={`https://nandwsouk.com/${productDetail?.data?.data?.images[0]?.url}`}
                />
                <img
                  alt="2"
                  className={classNames(
                    classes.items,
                    image === 1 ? classes.active : ""
                  )}
                  style={{
                    display:
                      productDetail?.data?.data?.images[1] === undefined &&
                      "none",
                  }}
                  onClick={() => handleSetImage(1)}
                  src={`https://nandwsouk.com/${productDetail?.data?.data?.images[1]?.url}`}
                />

                <img
                  alt="3"
                  className={classNames(
                    classes.items,
                    image === 2 ? classes.active : ""
                  )}
                  style={{
                    display:
                      productDetail?.data?.data?.images[2] === undefined &&
                      "none",
                  }}
                  onClick={() => handleSetImage(2)}
                  src={`https://nandwsouk.com/${productDetail?.data?.data?.images[2]?.url}`}
                />

                <img
                  alt="4"
                  className={classNames(
                    classes.items,
                    image === 3 ? classes.active : ""
                  )}
                  style={{
                    display:
                      productDetail?.data?.data?.images[3] === undefined &&
                      "none",
                  }}
                  onClick={() => handleSetImage(3)}
                  src={`https://nandwsouk.com/${productDetail?.data?.data?.images[3]?.url}`}
                />

                <img
                  alt="5"
                  className={classNames(
                    classes.items,
                    image === 4 ? classes.active : ""
                  )}
                  style={{
                    display:
                      productDetail?.data?.data?.images[4] === undefined &&
                      "none",
                  }}
                  onClick={() => handleSetImage(4)}
                  src={`https://nandwsouk.com/${productDetail?.data?.data?.images[4]?.url}`}
                />
              </Box>
            </Grid>
            <Grid item xs={9} md={10}>
              <Box display="flex" justifyContent="center">
                <MagenifyImg
                  image={`https://nandwsouk.com/${productDetail?.data?.data?.images[image]?.url}`}
                />
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </Box>
  );
};

export default ImageGallery;
