import {
  Box,
  Button,
  Grid,
  InputBase,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import blankProfile from "images/blank_profile.jpg";
import React, { useEffect, useState } from "react";
import BookMark from "images/bookmark.png";
import { getProfile } from "store/profile";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { getAddresses, getOrders } from "store/cart/cart.action";
const useStyles = makeStyles((theme) => ({
  root: {
    margin: "50px 0",
    minHeight: "70vh",
  },
  rootbox: {
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 500,
    paddingBottom: 15,
  },
  titletab: {
    fontSize: 20,
    fontWeight: 500,
    marginTop: 15,
  },
  imageprofile: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "50% 11%",
  },
  proimg: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    objectFit: "cover",
    objectPosition: "50% 11%",
  },
  userName: {
    color: "black",
    fontSize: 20,
    fontWeight: 500,
    textTransform: "capitalize",
    "&:first-letter": {
      color: "#ff0000",
    },
  },
  sections: {
    padding: "20px 0",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
  },
  sections2: {
    padding: "20px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
  },
  addressBox: {
    padding: "30px",
    display: "flex",
    alignItems: "center",
    border: "1px solid rgba(0,0,0,0.1)",
    margin: "20px 0",
  },
  addresstitle: {
    fontSize: 18,
    fontWeight: 700,
  },
  addressinfo: {
    fontSize: 15,
    fontWeight: 500,
    color: "rgba(0,0,0,0.6)",
  },
  userEmail: {
    color: "rgba(0,0,0,0.6)",
    fontSize: 10,
  },
  inputLabel: {
    color: "rgba(0,0,0,0.5)",
    fontSize: 15,
    fontWeight: 500,
    textTransform: "capitalize",
    width: "400px",
  },
  inputclass: {
    width: "100%",
    borderRadius: 5,
    padding: "4px 15px",
  },
  submit: {
    backgroundColor: "#fc0",
    color: "black",
    width: "200px",
    marginTop: "15px",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "#fc0",
    },
  },
  "@global": {
    ".MuiInputBase-input:focus": {
      color: "#04b",
    },
    ".MuiInputBase-input": {
      cursor: "pointer",
    },
  },
  proname: {
    fontSize: 20,
    marginTop: "20px",
    fontWeight: 500,
  },
  informationstxt: {
    fontSize: 11,
    color: "rgba(0,0,0,0.6)",
  },
  about: {
    marginTop: "20px",
    fontSize: 13,
    color: "gray",
  },
  link: {
    color: "#04b",
  },
  imageaddress: {
    width: "100px",
    height: "100px",
  },
  skilcontainer: {
    width: "100%",
    backgroundColor: "#ddd",
    borderRadius: 10,
    marginTop: 10,
  },
  skildata: {
    textAlign: "right",
    borderRadius: 10,
    padding: 2,
    fontSize: 12,
    color: "white",
    backgroundColor: "#fc0",
  },
  subtitle: {
    fontSize: 15,
    color: "rgba(0,0,0,0.8)",
  },
}));

const Profile = () => {
  const classes = useStyles();
  const [Tabsval, setTabsval] = useState(0);
  const match = useRouteMatch({ path: "/:language/:city" });
  const profile = useSelector((state) => state.profile);
  const cart = useSelector((state) => state.cart);
  const [userName, setuserName] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    setuserName(profile?.detail?.data[0].data.displayName);
    setPhone(profile?.detail?.data[0].mobile);
    setEmail(profile?.detail?.data[0].data.email);

    dispatch(getProfile(match.params.language));
    dispatch(getAddresses(setuserName, match.params.language));
    dispatch(
      getOrders(
        profile?.detail?.data[0].id,
        match.params.language,
        0,
        10,
        "AZ",
        "yearly",
        0
      )
    );
  }, [profile?.detail?.data[0].id]);

  const handleChange = (event, newTabs) => {
    setTabsval(newTabs);
  };
  return (
    <Box className={classes.root}>
      <Grid container>
        <Grid item xs={12} md={4} lg={3}>
          <Typography className={classes.title} variant="h4">
            Settings
          </Typography>
          <Box display="flex" flexDirection="column" margin="10px 0">
            <img className={classes.proimg} alt="profile" src={blankProfile} />
            <Typography className={classes.proname}>
              {profile?.detail?.data[0].data.displayName}
            </Typography>
            <Box display="flex">
              <Typography className={classes.informationstxt}>
                20 Favorites{" "}
              </Typography>
              <Typography
                style={{ margin: "0 20px" }}
                className={classes.informationstxt}
              >
                {cart?.orders?.results} purchases
              </Typography>
            </Box>
            <Typography className={classes.about}>
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget{" "}
              <a href="#" className={classes.link}>
                {" "}
                Lorem ipsum
              </a>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={8} lg={9}>
          <Tabs
            style={{ marginBottom: "15px" }}
            value={Tabsval}
            TabIndicatorProps={{ style: { background: "#fc0", color: "red" } }}
            onChange={handleChange}
          >
            <Tab label="Edit Profile" />
            <Tab label="My Addresses" />
          </Tabs>
          {Tabsval === 0 ? (
            <>
              <Box className={classes.sections}>
                <img
                  className={classes.imageprofile}
                  alt={"profile"}
                  src={blankProfile}
                />
                <Box
                  margin="0 25px"
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                >
                  <Typography className={classes.userName}>
                    {profile?.detail?.data[0].data.displayName}
                  </Typography>
                  <Typography className={classes.userEmail}>
                    {profile?.detail?.data[0].data.email}
                  </Typography>
                </Box>
              </Box>
              <Box className={classes.sections}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography className={classes.inputLabel}>
                    Name and Username :
                  </Typography>
                  <InputBase
                    onChange={(e) => setuserName(e.target.value)}
                    value={userName}
                    className={classes.inputclass}
                  />
                </Box>
              </Box>
              <Box className={classes.sections}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography className={classes.inputLabel}>
                    Phone Number :
                  </Typography>
                  <InputBase
                    onChange={(e) => setPhone(e.target.value)}
                    value={Phone}
                    className={classes.inputclass}
                  />
                </Box>
              </Box>
              <Box className={classes.sections}>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <Typography className={classes.inputLabel}>
                    Email :
                  </Typography>
                  <InputBase
                    onChange={(e) => setEmail(e.target.value)}
                    value={Email}
                    className={classes.inputclass}
                  />
                </Box>
              </Box>
              <Box display="flex" justifyContent="end">
                <Button className={classes.submit}>Submit</Button>
              </Box>
            </>
          ) : (
            <>
              <Box className={classes.sections2}>
                <Typography className={classes.titletab}>
                  This is Your Addresses
                </Typography>
                {cart.getaddress.map((item, i) => {
                  return (
                    <Box className={classes.addressBox}>
                      <img
                        className={classes.imageaddress}
                        alt="bookmark"
                        src={BookMark}
                      />
                      <Box
                        display="flex"
                        flexDirection="column"
                        margin="0 50px"
                        width="100%"
                      >
                        <Typography className={classes.addresstitle}>
                        {item.address}
                        </Typography>
                        <Typography className={classes.addressinfo}>
                        {item.title}
                        </Typography>
                        <Box className={classes.skilcontainer}>
                          <Box
                            style={{ width: "50%" }}
                            className={classes.skildata}
                          >
                            0.5/1
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
{/* 
                <>
                  <Typography
                    style={{ fontSize: 14 }}
                    className={classes.titletab}
                  >
                    
                  </Typography>
                  <Typography className={classes.subtitle}>
                   
                  </Typography>
                </> */}
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
