import React from "react";
import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import Posts from "components/posts/Posts";
import { Link, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 10px",
  },
  bestShoppingbox: {
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.01)",
    padding: "10px",
    boxShadow: "0px 0px 3px 1px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    textTransform: "capitalize",
  },
  imghead: {
    width: "100%",
    height: 150,
    objectFit: "cover",
  },
  img: {
    width: "100%",
    height: 150,
    border: "1px solid rgba(0,0,0,0.1)",
    padding: 10,
    objectFit: "cover",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 12,
    marginTop: 5,
    backgroundColor: "#ff4747",
    color: "white",
    padding: "2px 10px",
    borderRadius: 10,
  },
  titletxt: {
    fontSize: 12,
    marginTop: 5,
    color: "black",
    fontWeight: 700,
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    textAlign: "center",
  },
  bestcategoryimg: {
    objectFit: "cover",
    width: "100%",
    height: 150,
    border: "2px solid #fc0",
  },
}));
const BestShopping = ({ data }) => {
  const classes = useStyles();
  const match = useRouteMatch({ path: "/:language/:city" });
  return (
    <Box className={classes.root}>
      <Box className={classes.bestShoppingbox}>
        {/* <Typography className={classes.title} variant="h3">
          {data?.data === undefined ? null : data?.data[0]?.name}
        </Typography> */}
        <Box display="flex" marginTop="20px">
          <Box width="20%">
            <img
              className={classes.bestcategoryimg}
              alt="best"
              src={`https://nandwsouk.com/${
                data?.data !== undefined && data?.data[0]?.images[0].url
              }`}
            />
            <Typography className={classes.titletxt}>
              {data?.data !== undefined && data?.data[0]?.name}
            </Typography>
          </Box>
          <Box width="80%">
            <Posts itemsDesktop={4}>
              {data?.data !== undefined &&
                data?.data[0]?.products?.map((item, i) => (
                  <Box
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    margin="0 15px"
                    className="cursor-pointer"
                  >
                    <Link
                      to={`${match.url}/Product/${item?.productDetails?.slug}/${item?.productDetails?.id}`}
                    >
                      <img
                        className={classes.img}
                        alt="best"
                        src={`https://nandwsouk.com/${
                          item?.productDetails?.images[0]?.url
                            ? item?.productDetails?.images[0]?.url
                            : ""
                        }`}
                      />
                      <Typography
                        style={{ fontWeight: 100 }}
                        className={classes.titletxt}
                      >
                        {item?.product_name}
                      </Typography>
                    </Link>
                  </Box>
                ))}
            </Posts>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BestShopping;
