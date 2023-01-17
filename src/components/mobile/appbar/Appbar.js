import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import { Badge, Box, Typography } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import { NavLink, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBetterForU } from "store/betterforu/betterforu.action";
import { getProducts } from "store/products/products.action";
import { getCategory } from "store/category/category.action";
import { getProfile } from "store/profile";
import { getBrands, getSlider } from "store/brands/brands.action";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {
  getDiscountTimerData,
  getNewItemsData,
  getonlyTodayData,
  getRecommentedData,
} from "store/layout/layout.action";
import { getCurrencies } from "store/currency";
import { getAddresses, getCarts, getGateways } from "store/cart/cart.action";
const useStyles = makeStyles((theme) => ({
  appBar: {
    top: "auto",
    bottom: 0,
    backgroundColor: "white",
    borderTop: "1px solid rgba(0,0,0,0.1)",
    color: "rgba(0,0,0,0.3)",
  },
  grow: {
    flexGrow: 1,
  },
  activelink: {
    color: "black",
  },
  navlink: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: 40,
    height: 40,
    position: "relative",
  },
  navtxt: {
    fontSize: 10,
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 1,
    "-webkit-box-orient": "vertical",
    overflow: "hidden",
  },
}));

function Appbar() {
  const classes = useStyles();
  const match = useRouteMatch({ path: "/:language/:city" });
  const locale = useSelector((state) => state.locale);
  const cities = useSelector((state) => state.city);
  const profile = useSelector((state) => state.profile);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getRecommentedData(
        match.params.language,
        match.params.city,
        "recommented_for_you"
      )
    );
    dispatch(getBrands(match.params.language, match.params.city));
    dispatch(
      getBetterForU(match.params.language, match.params.city, "better_for_you")
    );
    dispatch(
      getCarts(profile?.detail?.data[0].id, match.params.language, "cart")
    );
    dispatch(getAddresses(profile?.detail?.data[0].id, match.params.language));
    dispatch(getGateways());
    dispatch(getProducts(match.params.language, match.params.city));
    dispatch(getCategory(match.params.language, match.params.city));
    dispatch(getCurrencies());
    dispatch(getProfile(match.params.language));
    dispatch(
      getonlyTodayData(match.params.language, match.params.city, "only_today")
    );
    dispatch(
      getDiscountTimerData(
        match.params.language,
        match.params.city,
        "discount_list_timer"
      )
    );
    dispatch(
      getNewItemsData(match.params.language, match.params.city, "new_products")
    );
    dispatch(getSlider(match.params.language, match.params.city));
  }, []);
  const cartData = JSON.parse(localStorage.getItem("cart"));
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Box
            width="100%"
            display="flex"
            position="relative"
            justifyContent="space-around"
          >
            {links.map((item) => (
              <NavLink
                to={`/${
                  locale.current.locale === undefined
                    ? "en"
                    : locale.current.locale
                }/${
                  cities.current.title === undefined
                    ? cities.current
                    : cities.current.title
                }/${item.link}`}
                activeClassName={classes.activelink}
                className={classes.navlink}
              >
                {item.icon}
                <Typography className={classes.navtxt}>{item.name}</Typography>
              </NavLink>
            ))}{" "}
            <NavLink
              to={`/${
                locale.current.locale === undefined
                  ? "en"
                  : locale.current.locale
              }/${
                cities.current.title === undefined
                  ? cities.current
                  : cities.current.title
              }/Cart`}
              activeClassName={classes.activelink}
              className={classes.navlink}
            >
              {" "}
              <Badge
                badgeContent={
                  profile?.detail === null
                    ? cartData?.length
                    : cart.allcarts.length
                }
                color="secondary"
              >
                <ShoppingCartIcon />
              </Badge>
              <Typography className={classes.navtxt}>Cart</Typography>
            </NavLink>
            <NavLink
              to={`/${
                locale.current.locale === undefined
                  ? "en"
                  : locale.current.locale
              }/${
                cities.current.title === undefined
                  ? cities.current
                  : cities.current.title
              }/Profile`}
              activeClassName={classes.activelink}
              className={classes.navlink}
            >
              <PersonOutlineIcon />
              {profile?.detail?.data ? (
                <Typography className={classes.navtxt}>
                  {profile?.detail?.data[0].data.displayName}
                </Typography>
              ) : (
                <Typography className={classes.navtxt}>Profile</Typography>
              )}
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
const links = [
  {
    id: 0,
    name: "Home",
    link: "shop",
    icon: <HomeIcon />,
  },
  {
    id: 1,
    name: "Search",
    link: "Search",
    icon: <SearchIcon />,
  },
  {
    id: 2,
    name: "Bonous",
    link: "Bonous",
    icon: (
      <svg style={{ width: 25 }} viewBox="0 0 24 24" fill="none">
        <path
          d="M9.831 7.642l-6.238 1.1L5.59 20.067l7.386-1.302-.206-1.169-3.223-.568a1.35 1.35 0 01-1.095-1.564l1.38-7.822zm5.035 10.324l.193 1.092a1.35 1.35 0 01-1.096 1.564L5.297 22.15a1.35 1.35 0 01-1.564-1.095L1.51 8.449a1.35 1.35 0 011.096-1.564L10.2 5.546l.474-2.688a1.35 1.35 0 011.563-1.095l9.156 1.615a1.35 1.35 0 011.095 1.564l-2.222 12.605a1.35 1.35 0 01-1.564 1.095l-3.837-.676zm5.54-12.731l-7.875-1.39-1.997 11.326 7.876 1.389 1.997-11.325z"
          fill="currentColor"
        ></path>
      </svg>
    ),
  },
];
export default Appbar;
