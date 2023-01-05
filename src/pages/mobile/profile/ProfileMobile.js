import {
  Box,
  Button,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import blacnkProfile from "images/blank_profile.jpg";
// icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TranslateIcon from "@material-ui/icons/Translate";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SimpleModal from "components/modal/SimpleModal";
import { localeChange } from "store/locale";
import { currencyChange } from "store/currency";
import sa from "images/sa.png";
import us from "images/us.png";
import fr from "images/fr.png";
import { cityChange, getCities } from "store/city";
import { doLogout } from "store/auth/auth.action";

const useStyles = makeStyles((theme) => ({
  texttitle: {
    marginBottom: 20,
    fontSize: 25,
    fontWeight: 700,
    color: "black",
    textAlign: "center",
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: "50%",
    border: "1px solid #d1d4d9",
    objectFit: "fill",
  },
  LoginBtn: {
    background: "#ffd426",
    color: "black",
    fontSize: 12,
    width: "100%",
    padding: "10px 45px",
    borderRadius: 0,
    "&:hover": {
      background: "#ffc826",
    },
  },
  LoginOut: {
    background: "red",
    marginTop: 15,
    color: "white",
    fontSize: 12,
    width: "100%",
    padding: "10px 45px",
    borderRadius: 0,
    "&:hover": {
      background: "red",
    },
  },
  lilist: {
    padding: "10px 5px",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    color: "black",
    cursor: "pointer",
  },
  modalbody: {
    bottom: "0",
    position: "absolute",
    margin: "auto",
    borderRadius: 4,
    backgroundColor: "white",
    overFlow: "hidden",
    width: "100%",
    height: "40%",
  },
  modaltitle: {
    fontSize: 17,
    fontWeight: 700,
    marginBottom: 20,
  },
  currencybox: {
    width: "100%",
    padding: "8px 0",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
    cursor: "pointer",
  },
  currency: {
    fontSize: 14,
    fontWeight: 700,
    margin: "0 10px",
  },
  flag: {
    width: 20,
    height: 20,
  },
}));
const ProfileMobile = () => {
  const classes = useStyles();
  const match = useRouteMatch({ path: "/:language/:city" });
  const { language, city = "all-city" } = match.params;
  const locale = useSelector((state) => state.locale);
  const cities = useSelector((state) => state.city);
  const [open, setOpen] = useState(false);
  const [modals, setmodals] = useState("");
  const [Lang, setLang] = useState("en");
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency);
  const profile = useSelector((state) => state.profile);
  const history = useHistory();
  useEffect(() => {
    dispatch(getCities(language));
    // eslint-disable-next-line
  }, []);
  const changeCity = (language) => {
    dispatch(cityChange(language));
    history.push(`/en/${language}/shop`);
    setOpen(false);
  };
  const handleChangeLocale = (event) => {
    setLang(event);
    dispatch(localeChange(event));
    history.push(`/${event}/all-city/shop`);
  };
  const handleChangeCurrency = (event) => {
    dispatch(currencyChange(event));
    setOpen(false);
  };
  const handleOpen = (index) => {
    setOpen(true);
    setmodals(index);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const logoutHandler = () => {
    dispatch(doLogout());
  };
  return (
    <Box marginTop="70px">
      {profile?.detail?.data ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <img className={classes.avatar} alt=" " src={blacnkProfile} />
          <Box marginTop="15px">
            <Typography>{profile?.detail?.data[0].data.displayName}</Typography>
            <Button onClick={logoutHandler} className={classes.LoginOut}>
              Log Out
            </Button>
          </Box>
        </Box>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <img className={classes.avatar} alt=" " src={blacnkProfile} />
          <Box marginTop="15px">
            <Link
              to={`/${
                locale.current.locale === undefined
                  ? "en"
                  : locale.current.locale
              }/${cities.current.title}/Login`}
            >
              <Button className={classes.LoginBtn}>Login</Button>
            </Link>
          </Box>
        </Box>
      )}
      <List style={{ margin: "10px", padding: "60px 0" }} dense={false}>
        {list.map((item, i) => (
          <Link
            to={`/${
              locale.current.locale === undefined ? "en" : locale.current.locale
            }/${cities.current.title}/${item.link}`}
          >
            <ListItem key={item.id} className={classes.lilist}>
              <ListItemIcon style={{ minWidth: 40, color: "black" }}>
                {item.icon}
              </ListItemIcon>
              <Typography
                style={{
                  fontWeight: "300 !important",
                  lineHeight: 1.5,
                  color: "black",
                }}
                variant="inherit"
              >
                {item.text}
              </Typography>
            </ListItem>
          </Link>
        ))}
        <ListItem onClick={() => handleOpen("City")} className={classes.lilist}>
          <ListItemIcon style={{ minWidth: 40, color: "black" }}>
            <LocationCityIcon />
          </ListItemIcon>
          <Typography
            style={{
              fontWeight: "300 !important",
              lineHeight: 1.5,
              color: "black",
            }}
            variant="inherit"
          >
            City
          </Typography>
        </ListItem>
        <ListItem
          onClick={() => handleOpen("Language")}
          className={classes.lilist}
        >
          <ListItemIcon style={{ minWidth: 40, color: "black" }}>
            <TranslateIcon />
          </ListItemIcon>
          <Typography
            style={{
              fontWeight: "300 !important",
              lineHeight: 1.5,
              color: "black",
            }}
            variant="inherit"
          >
            Language
          </Typography>
        </ListItem>
        <ListItem
          onClick={() => handleOpen("Currency")}
          className={classes.lilist}
        >
          <ListItemIcon style={{ minWidth: 40, color: "black" }}>
            <MonetizationOnIcon />
          </ListItemIcon>
          <Typography
            style={{
              fontWeight: "300 !important",
              lineHeight: 1.5,
              color: "black",
            }}
            variant="inherit"
          >
            Currency
          </Typography>
        </ListItem>
      </List>
      <SimpleModal
        className={classes.modalbody}
        handleClose={handleClose}
        open={open}
        body={
          <Box padding="20px" display="flex">
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              width="100%"
            >
              <Typography className={classes.modaltitle}>{modals}</Typography>
              {modals === "Currency" ? (
                <>
                  {currency?.currencies.map((item) => (
                    <Box
                      display="flex"
                      className={classes.currencybox}
                      onClick={() => handleChangeCurrency(item)}
                    >
                      <MonetizationOnIcon />
                      <Typography className={classes.currency}>
                        {item.title}
                      </Typography>
                    </Box>
                  ))}
                </>
              ) : modals === "Language" ? (
                <>
                  <Box
                    display="flex"
                    className={classes.currencybox}
                    onClick={() => handleChangeLocale("en")}
                  >
                    <img className={classes.flag} alt="lang" src={us} />
                    <Typography className={classes.currency}>
                      English
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    className={classes.currencybox}
                    onClick={() => handleChangeLocale("fr")}
                  >
                    <img className={classes.flag} alt="lang" src={fr} />
                    <Typography className={classes.currency}>French</Typography>
                  </Box>
                  <Box
                    display="flex"
                    className={classes.currencybox}
                    onClick={() => handleChangeLocale("ar")}
                  >
                    <img className={classes.flag} alt="lang" src={sa} />
                    <Typography className={classes.currency}>Arabic</Typography>
                  </Box>
                </>
              ) : (
                <>
                  {cities?.cities.map((item) => (
                    <Box
                      display="flex"
                      className={classes.currencybox}
                      onClick={() => changeCity(item.title)}
                    >
                      <LocationCityIcon />
                      <Typography className={classes.currency}>
                        {item.title}
                      </Typography>
                    </Box>
                  ))}
                </>
              )}
            </Box>
          </Box>
        }
      />
    </Box>
  );
};

const list = [
  {
    id: 0,
    icon: <ShoppingCartIcon />,
    text: "My Cart",
    link: "Cart",
  },
  {
    id: 0,
    icon: <ShoppingBasketIcon />,
    text: "My Orders",
    link: "Orders",
  },
  {
    id: 1,
    icon: <FavoriteBorderIcon />,
    text: "My Favorates",
    link: "wishlist",
  },
  {
    id: 2,
    icon: <HelpOutlineIcon />,
    text: "FAQ",
    link: "FAQ",
  },
];

export default ProfileMobile;
