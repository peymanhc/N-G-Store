import {
  Box,
  Button,
  Grid,
  InputBase,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import Banner from "images/call-us.jpeg";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import logo from "images/Logo.png";
import { useDispatch, useSelector } from "react-redux";
import { getFooterData } from "store/layout/layout.action";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "transparent",
  },
  wrapper: {
    maxWidth: 1400,
    margin: "auto",
  },
  Box: {
    padding: theme.spacing(2),
    textAlign: "left",
    height: "80%",
    borderRight: "1px solid rgba(0,0,0,0.2)",
  },
  logotxt: {
    margin: "0 15px",
    fontSize: 20,
  },
  sublogo: {
    marginTop: 10,
    fontSize: 12,
    color: "rgba(0,0,0,0.6)",
  },
  title: {
    textTransform: "uppercase",
    fontSize: 18,
    fontWeight: 700,
    color: "rgba(0,0,0,0.9)",
    "&::after": {
      display: "block",
      content: "''",
      height: 3,
      width: 30,
      backgroundColor: " #ffb50d",
      bottom: 25,
      left: 0,
    },
  },
  link: {
    textDecoration: "none",
    color: "rgba(0,0,0,0.6)",
    margin: "0 5px",
  },
  instaimages: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  instatext: {
    textTransform: "capitalize",
    display: "flex",
    height: 40,
    backgroundColor: "white",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: "auto",
  },
  imginsta: {
    width: 85,
    height: 85,
    objectFit: "cover",
    padding: "0.5px",
    cursor: "pointer",
  },
  contactus: {
    position: "relative",
    maxWidth: 1400,
    backgroundImage: `url(${Banner})`,
    margin: "auto",
    height: 107,
    border: "1px solid rgba(0,0,0,0.2)",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  mobileaddress: {
    textAlign: "center",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  contactusWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    position: "absolute",
    right: 0,
  },
  icons: {
    transition: "0.5s",
    color: "rgba(0,0,0,0.7)",
    "&:hover": {
      transition: "0.5s",
      backgroundColor: "#21cde4",
      color: "white",
    },
  },
  icon: {
    fontSize: 28,
  },
  newsbox: {
    margin: "20px auto",
    backgroundColor: "#60b6ff",
    height: 100,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
  inputbox: {
    backgroundColor: "white",
    overflow: "hidden",
    display: "flex",
    borderRadius: 20,
  },
  subscribebtb: {
    width: 100,
    backgroundColor: "#fab808",
    color: "white",
    height: 35,
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "#fab808",
    },
  },
  subscribeinput: {
    backgroundColor: "white",
  },
  categories: {
    maxWidth: 1400,
    margin: "auto",
    display: "flex",
  },
  copyWrite: {
    width: "100%",
    height: 50,
    display: "flex",
    alignItems: "center",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.3)",
    textShadow: "1px 1px 1px rgba(0,0,0,0.5)",
  },
}));
const Footer = () => {
  const classes = useStyles();
  const match = useRouteMatch({ path: "/:language/:city" });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFooterData(match.params.language, match.params.city));
  }, []);
  const layout = useSelector((state) => state.Layout);
  return (
    <div className={classes.root}>
      <Box className={classes.newsbox}>
        <Box display="flex" alignItems="center">
          <MailOutlineIcon className="mx-2" />
          <Typography className="uppercase font-bold">News Letter</Typography>
        </Box>
        <Box margin="0 50px" display="flex" alignItems="center">
          |
          <Typography className="mx-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et maxime
          </Typography>
        </Box>
        <Box className={classes.inputbox}>
          <InputBase placeholder="Email..." className="px-4" />
          <Button className={classes.subscribebtb}>Subscribe</Button>
        </Box>
      </Box>
      <Box
        className={classes.wrapper}
        display="flex"
        justifyContent="center"
        m={1}
        p={1}
        bgcolor="background.Box"
      >
        <Grid container>
          <Grid item xs={12} md={4}>
            <Box className={classes.Box}>
              <Box display="flex">
                <img width="70px" src={logo} alt={"logo"} />
                <Typography className={classes.logotxt} variant="h4">
                  <b>Nadwsouk</b> market
                </Typography>
              </Box>
              <Typography className={classes.sublogo}>
                {layout?.footer?.data?.footer_aboutus}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box className={classes.Box}>
              <Typography className={classes.title}>my account</Typography>
              <Box margin="20px 0">
                {layout?.footer?.data?.footer_myaccount?.map((item, i) => (
                  <Typography key={i} className={classes.sublogo}>
                    <Link
                      className={classes.link}
                      to={`${match.url}/${item.menuurl}`}
                    >
                      {item.menutitle}
                    </Link>
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Box className={classes.Box}>
              <Typography className={classes.title}>quick links</Typography>
              <Box margin="20px 0">
                {layout?.footer?.data?.footer_quick_links?.map((item, i) => (
                  <Typography key={i} className={classes.sublogo}>
                    <Link
                      className={classes.link}
                      to={`${match.url}/${item.menuurl}`}
                    >
                      {item.menutitle}
                    </Link>
                  </Typography>
                ))}
              </Box>
            </Box>
          </Grid>
          <Box p={1} className={classes.mobileaddress}>
            <Typography
              style={{ fontSize: 12, color: "rgba(0,0,0,0.7)" }}
              variant="subtitle2"
            >
              Address
            </Typography>
            <Typography style={{ fontSize: 15 }} variant="h6">
              B-56 big market near School USA 653-8964
            </Typography>
            <Typography style={{ fontSize: 15 }} variant="h6">
              <span style={{ color: "#ffb50d" }}>Phone Number:</span> 653-8964
            </Typography>
          </Box>
          <Grid item md={4}>
            <Box className={classes.instaimages}>
              <Box className={classes.instatext}>
                <Typography>
                  follow us{" "}
                  <span style={{ color: "#ffb50d" }}>#Nadwsouk market</span>
                </Typography>
              </Box>
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
                <img
                  key={i}
                  className={classes.imginsta}
                  alt="insta"
                  src="https://znews-photo.zadn.vn/w660/Uploaded/lce_qdhuc/2019_07_19/q.jpg"
                />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.contactus}>
        <Box className={classes.contactusWrapper} display="flex" p={1} m={1}>
          <Box p={1}>
            <Typography style={{ fontSize: 22 }} variant="subtitle1">
              call us
            </Typography>
            <Typography
              style={{ fontSize: 22, color: "#21cde4", fontWeight: 700 }}
              variant="subtitle2"
            >
              {layout?.footer?.data?.call_us}
            </Typography>
          </Box>
          <Box p={1} display="flex">
            {layout?.footer?.data?.footer_sociallink?.map((item, i) => (
              <a
                key={i}
                className={classes.link}
                href={item.href}
                target="_blank"
              >
                <img
                  alt={item?.alt}
                  src={`https://nandwsouk.com/${item.src}`}
                  className={classes.icons}
                />
              </a>
            ))}
          </Box>
          <Box p={1}>
            <Typography
              style={{ fontSize: 12, color: "rgba(0,0,0,0.7)" }}
              variant="subtitle2"
            >
              Address
            </Typography>
            <Typography style={{ fontSize: 15 }} variant="h6">
              {layout?.footer?.data?.address}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={classes.categories}>
        <ul className="flex justify-center w-full my-4">
          {layout?.footer?.data?.footer_item_links?.map((item, i) => (
            <li key={i} className="text-gray-600 mx-6 cursor-pointer">
              <Link
                className={classes.link}
                to={`${match.url}/${item.menuurl}`}
              >
                {item.menutitle}
              </Link>
            </li>
          ))}
        </ul>
      </Box>
      <Box className={classes.copyWrite}>
        <Box
          display="flex"
          width="100%"
          maxWidth="1400px"
          margin="auto"
          justifyContent="center"
        >
          <Typography> {layout?.footer?.data?.footer} </Typography>
        </Box>
      </Box>
    </div>
  );
};
export default Footer;
