import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Link, NavLink, useHistory, useRouteMatch } from "react-router-dom";
import Logo from "images/Logo.png";
import blankProfile from "images/blank_profile.jpg";
// icons
import MenuIcon from "@material-ui/icons/Menu";
import sa from "images/sa.png";
import us from "images/us.png";
import fr from "images/fr.png";
// materials
import {
  Badge,
  Box,
  Button,
  FormControl,
  IconButton,
  Menu,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import Grouping from "./Grouping";
import { useDispatch, useSelector } from "react-redux";
import { localeChange } from "store/locale";
import { currencyChange, getCurrencies } from "store/currency";
import SimpleAutocomplate from "./SimpleAutocomplate";
import OffImg from "images/Topnav(of).webp";
import { FormattedMessage } from "react-intl";
import { getProfile } from "store/profile";
import { doLogout } from "store/auth/auth.action";
import { getCategory } from "store/category/category.action";
import { getFooterData, getTopBanner } from "store/layout/layout.action";

const navbarItems = [
  {
    id: 1,
    name: <FormattedMessage id="BONUSES" defaultMessage="Bonuses" />,
    icon: (
      <path
        d="M9.831 7.642l-6.238 1.1L5.59 20.067l7.386-1.302-.206-1.169-3.223-.568a1.35 1.35 0 01-1.095-1.564l1.38-7.822zm5.035 10.324l.193 1.092a1.35 1.35 0 01-1.096 1.564L5.297 22.15a1.35 1.35 0 01-1.564-1.095L1.51 8.449a1.35 1.35 0 011.096-1.564L10.2 5.546l.474-2.688a1.35 1.35 0 011.563-1.095l9.156 1.615a1.35 1.35 0 011.095 1.564l-2.222 12.605a1.35 1.35 0 01-1.564 1.095l-3.837-.676zm5.54-12.731l-7.875-1.39-1.997 11.326 7.876 1.389 1.997-11.325z"
        fill="currentColor"
      ></path>
    ),
    link: "/Bonous",
  },
  {
    id: 2,
    name: (
      <FormattedMessage id="restaurant.cart.MyOrder" defaultMessage="cart" />
    ),
    icon: (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 8.793l-5.296-2.12L12 4.553l5.298 2.12L12 8.793zm8.34-3.062l-7.968-3.19a1.003 1.003 0 00-.745 0L3.631 5.743a.989.989 0 00-.63.966v10.62a1.003 1.003 0 00.63.932l7.996 3.2a1.003 1.003 0 00.773-.011l7.969-3.19a1.004 1.004 0 00.631-.93V6.672a.997.997 0 00-.016-.18.979.979 0 00-.644-.762zM5.007 8.155l2.36.945 3.63 1.453v8.494l-5.99-2.398V8.155zm13.986 0l-5.99 2.398v8.494l5.99-2.398V8.155z"
        fill="currentColor"
      ></path>
    ),
    link: "/Orders",
  },
  {
    id: 3,
    name: <FormattedMessage id="FAVORITE" defaultMessage="Favorite" />,
    icon: (
      <path
        d="M12 4.367C10.675 3.28 9.245 2.72 7.73 2.72A5.73 5.73 0 002 8.45c0 4.328 3.197 8.531 9.448 12.664l.552.365.551-.365C18.803 16.981 22 12.778 22 8.45a5.73 5.73 0 00-5.73-5.73c-1.515 0-2.945.56-4.27 1.648zM4 8.449a3.73 3.73 0 013.73-3.73c1.223 0 2.402.551 3.566 1.705l.704.698.704-.698c1.164-1.154 2.343-1.704 3.567-1.704A3.73 3.73 0 0120 8.45c0 3.397-2.623 6.956-8 10.626-5.377-3.67-8-7.23-8-10.627z"
        fill="currentColor"
      ></path>
    ),
    link: "/wishlist",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    zIndex: 99,
    boxShadow: "0px 0px 7px 0px rgba(0,0,0,0.1)",
  },
  wrapper: {
    height: 70,
    backgroundColor: "white",
    boxShadow: "none",
  },
  links: {
    maxWidth: 1400,
    margin: "auto",
    display: "flex",
    width: "100%",
    fontFamily: "Arial",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    margin: 10,
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
    padding: "0 10px",
    color: "rgba(0,0,0,0.8)",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: 11,
    fontWeight: 600,
    [theme.breakpoints.down(1050)]: {
      padding: "0 4px",
      margin: 5,
    },
  },
  activeLink: {
    margin: 10,
    padding: "0 10px",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: 11,
    fontWeight: 600,
    color: "red",
  },
  Catalog: {
    margin: "0 20px",
    backgroundColor: "#fc0",
    textTransform: "capitalize",
    display: "flex",
    width: 120,
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    "&:hover": {
      backgroundColor: "#fc0",
    },
  },
  searchBox: {
    border: "2px solid #ffd426",
    display: "flex",
    height: 45,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    flex: 1,
  },
  searchBtn: {
    backgroundColor: "#ffd426",
    borderRadius: 0,
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#ffd426",
    },
  },
  searchinput: {
    width: "100%",
    padding: "0 20px",
  },
  selectitem: {
    "-webkit-appearance": "none",
    "-moz-appearance": "none",
    background: "#e8e8e8",
    color: "black",
    backgroundRepeat: "no-repeat",
    backgroundPositionX: "100%",
    backgroundPositionY: 5,
    border: "none",
    borderRadius: 2,
    margin: 2,
    padding: 5,
    paddingRight: "2rem",
    [theme.breakpoints.down(1150)]: {
      display: "none",
    },
  },
  Login: {
    backgroundColor: "#e8e8e8",
    height: 45,
    textTransform: "capitalize",
    fontWeight: 900,
    padding: 10,
  },
  menu: {
    display: "none",
  },
  logomobile: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  // [theme.breakpoints.down(1050)]: {
  //   links: { display: "none" },
  //   nav: { display: "flex", justifyContent: "space-between" },
  //   menu: { display: "block" },
  // },
  dropdownItem: {
    display: "flex",
    width: 200,
    height: 50,
    justifyContent: "space-between",
  },
  iconlink: {
    width: 25,
    [theme.breakpoints.down(1050)]: {
      width: 15,
    },
  },
  formcontrol: {
    background: "white",
    color: "black",
    border: "none",
    borderRadius: 2,
    margin: 2,
    padding: 5,
    paddingRight: "2rem",
  },
  currencyform: {
    width: 90,
    margin: "0 10px",
  },
  langform: {
    width: 120,
    [theme.breakpoints.down(1150)]: {
      width: 90,
    },
  },
  flag: {
    width: 25,
    [theme.breakpoints.down(1150)]: {
      display: "none",
    },
  },
  offimg: {
    width: "100%",
    height: 60,
    objectFit: "cover",
  },
  "@global": {
    ".MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    ".MuiSelect-select:focus": {
      backgroundColor: "transparent",
    },
    ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
    },
    ".MuiOutlinedInput-root": {
      height: 45,
    },
    ".MuiSelect-select.MuiSelect-select": {
      padding: "10px 8px",
      width: 90,
      border: "none",
    },
    ".MuiMenuItem-root": {
      height: 40,
      width: "100%",
    },
    ".MuiSelect-icon": {
      display: "none",
    },
    ".MuiOutlinedInput-notchedOutline": {
      borderColor: "transparent",
      "&:hover": {
        borderColor: "transparent",
      },
    },
  },
  profileimg: {
    width: 45,
    height: 45,
    borderRadius: "50%",
  },
}));

function Navbar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const match = useRouteMatch({ path: "/:language/:city" });
  const dispatch = useDispatch();
  const [Lang, setLang] = useState("en");
  const currency = useSelector((state) => state.currency);
  const locale = useSelector((state) => state.locale);
  const cities = useSelector((state) => state.city);
  const profile = useSelector((state) => state.profile);
  const layout = useSelector((state) => state.Layout);
  const [Currencyval, setCurrencyval] = useState(currency.current);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openprofile = Boolean(anchorEl);
  const cart = useSelector((state) => state.cart);
  const cartData = JSON.parse(localStorage.getItem("cart"));
  const history = useHistory();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleChange = (event) => {
    setLang(event.target.value);
    dispatch(localeChange(event.target.value));
    dispatch(getFooterData(event.target.value, match.params.city));
    history.push(`/${event.target.value}/all-city/shop`);
    setTimeout(() => {
      window.location.reload();
    }, 0);
  };

  const handleChangeCurrency = (event) => {
    setCurrencyval(event.target.value);
    dispatch(currencyChange(event.target.value));
  };

  useEffect(() => {
    dispatch(getProfile(match.params.language));
    dispatch(getCurrencies());
    dispatch(getCategory(match.params.language, match.params.city));
    dispatch(getFooterData(match.params.language, match.params.city));
    dispatch(
      getTopBanner(
        match.params.language,
        match.params.city,
        "top_header_banner"
      )
    );
    // eslint-disable-next-line
  }, [profile?.detail?.data[0].id]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const logoutHandler = () => {
    dispatch(doLogout());
  };
  return (
    <div className={classes.root}>
      <Link
        to={`${match.url}/product/${
          layout?.TopBanner?.data === undefined
            ? null
            : layout?.TopBanner?.data[0].products[0].productDetails.slug
        }/${
          layout?.TopBanner?.data === undefined
            ? null
            : layout?.TopBanner?.data[0].products[0].productDetails.id
        }`}
      >
        <img
          className={classes.offimg}
          alt="off"
          src={`https://nandwsouk.com/${
            layout?.TopBanner?.data === undefined
              ? null
              : layout?.TopBanner?.data[0].images[0].url
          }`}
        />
      </Link>
      <AppBar className={classes.wrapper} position="static">
        <Toolbar className={classes.nav}>
          <Box className={classes.links}>
            <Link
              to={`/${
                locale.current.locale === undefined
                  ? "en"
                  : locale.current.locale
              }/${cities.current.title}/shop`}
              variant="h6"
              className={classes.title}
            >
              <img width={100} alt="LOGO" src={Logo} />
            </Link>
            <Box height="47px" margin="0 10px">
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  value={
                    locale.current.locale === undefined
                      ? Lang
                      : locale.current.locale
                  }
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  className={classes.langform}
                >
                  <MenuItem value="en">
                    <Box
                      width="100%"
                      display="flex"
                      justifyContent="space-between"
                    >
                      <img className={classes.flag} alt="lang" src={us} />
                      <Typography>English</Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem value="ar">
                    <Box
                      width="100%"
                      display="flex"
                      justifyContent="space-between"
                    >
                      <img className={classes.flag} alt="lang" src={sa} />
                      <Typography>Arabic</Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem value="fr">
                    <Box
                      width="100%"
                      display="flex"
                      justifyContent="space-between"
                    >
                      <img className={classes.flag} alt="lang" src={fr} />
                      <Typography>French</Typography>
                    </Box>
                  </MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" className={classes.currencyform}>
                <Select
                  value={currency?.current}
                  onChange={handleChangeCurrency}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {currency?.currencies.map((item, i) => (
                    <MenuItem key={i} value={item}>
                      <Box display="flex" justifyContent="space-between">
                        <Typography>{item.title}</Typography>
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box className={classes.searchBox}>
              <SimpleAutocomplate />
              <Button className={classes.searchBtn}>
                <FormattedMessage
                  id="restaurant.mobileRestaurantSearch.Search"
                  defaultMessage="Search"
                />
              </Button>
            </Box>
            <Box display="flex" margin="0 20px">
              {navbarItems.map((item) => (
                <NavLink
                  exact
                  key={item.id}
                  activeClassName={classes.activeLink}
                  className={classes.link}
                  to={`${match.url}${item.link}`}
                >
                  <svg
                    className={classes.iconlink}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    {item.icon}
                  </svg>
                  <Typography style={{ fontSize: 12 }}>{item.name}</Typography>
                </NavLink>
              ))}
              <NavLink
                exact
                activeClassName={classes.activeLink}
                className={classes.link}
                to={`${match.url}/Cart`}
              >
                <Badge
                  badgeContent={
                    profile?.detail === null
                      ? cartData === null
                        ? 0
                        : cartData.length
                      : cart.allcarts.length
                  }
                  color="secondary"
                >
                  <svg
                    className={classes.iconlink}
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M16.016 15.792a2.78 2.78 0 110 5.558 2.78 2.78 0 010-5.558zm0 1.74a1.04 1.04 0 100 2.08 1.04 1.04 0 000-2.08zM5.48 15.792a2.78 2.78 0 110 5.558 2.78 2.78 0 010-5.558zm0 1.74a1.04 1.04 0 100 2.079 1.04 1.04 0 000-2.079zm.21-12.137l2.182 7.452 8.356-1.587A2.919 2.919 0 0018.6 8.392V5.395H5.691zm-.528-1.8h15.24v4.797a4.718 4.718 0 01-3.838 4.635l-9.96 1.895L2.772 1.835 4.5 1.328l.662 2.267z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </Badge>
                <Typography style={{ fontSize: 12 }}>
                  <FormattedMessage id="CART" defaultMessage="Cart" />
                </Typography>
              </NavLink>
            </Box>
            {profile?.detail?.data ? (
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                // onClick={handleMenu}
              >
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={openprofile}
                  onClose={handleClose}
                >
                  <Link to={`${match.url}/Profile`}>
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                  </Link>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={logoutHandler}>LogOut</MenuItem>
                </Menu>
                <Box
                  aria-controls="fade-menu"
                  aria-haspopup="true"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  style={{ cursor: "pointer" }}
                  onClick={handleClick}
                >
                  <img className={classes.profileimg} src={blankProfile} />
                  <Typography
                    style={{
                      color: "rgba(0,0,0,0.7)",
                      fontSize: 10,
                      fontWeight: 700,
                    }}
                  >
                    {profile?.detail?.data[0].data.displayName}
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Link
                to={`${match.url}/Login`}
                style={{ textDecoration: "none", color: "#757575" }}
              >
                <Button className={classes.Login}>
                  <FormattedMessage id="header.Login" defaultMessage="Login" />
                </Button>
              </Link>
            )}
          </Box>
          <Link to="/" variant="h6" className={classes.logomobile}>
            <img width={100} alt="LOGO" src={Logo} />
          </Link>
          <Box className={classes.menu}>
            <IconButton type="button" onClick={handleDrawerOpen}>
              <MenuIcon style={{ color: "black" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Grouping />
    </div>
  );
}
export default Navbar;
