import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import "./style.css";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import SimpleModal from "components/modal/SimpleModal";
import { getCities, cityChange } from "store/city";
import { useDispatch } from "react-redux";
import placeicon from "images/place.svg";
import Autocomplete from "@material-ui/lab/Autocomplete";
import ListIcon from "@material-ui/icons/List";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";
import { getMegaMenu } from "store/megaMenu/megaMenu.action";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1400,
    margin: "auto",
    display: "flex",
    height: 40,
    borderTop: "1px solid rgba(0,0,0,0.02)",
    backgroundColor: "white",
    [theme.breakpoints.down("md")]: {
      overflow: "hidden",
      height: 50,
      display: "block",
    },
  },
  link: {
    margin: "5px 10px",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
    padding: "10px",
    color: "rgba(0,0,0,0.8)",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: 11,
    fontWeight: 600,
    "&:hover": {
      boxShadow: "0px -1px 1px 0px rgba(0,0,0,0.1)",
    },
  },
  activeLink: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    display: "flex",
    padding: "10px",
    color: "#fc0",
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: 15,
    fontWeight: 600,
  },
  place: {
    fontSize: 14,
    textTransform: "capitalize",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    width: 180,
  },
  city: {
    fontSize: 13,
    display: "flex",
    letterSpacing: 3,
    "&:hover": {
      color: "red",
    },
  },
  svg: {
    fill: "black",
    margin: "0 10px",
  },
  citybox: {
    display: "flex",
    width: "100%",
    height: "100%",
    borderRadius: 4,
    border: "1px solid gray",
  },
  citylist: {
    width: "100%",
    height: 30,
    margin: 10,
    border: "1px solid black",
  },
  logocity: {
    width: "40%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#3e2d8f",
  },
  selectcity: {
    fontSize: 22,
    fontWeight: 700,
    margin: "10px 0",
  },
  titleca: {
    textTransform: "uppercase",
    fontSize: 14,
    textAlign: "left",
    fontWeight: 700,
  },
  list: {
    marginTop: 10,
    color: "rgba(0,0,0,0.6)",
    fontSize: 16,
    textAlign: "left",
  },
  brands: {
    display: "flex",
    height: "100%",
    objectFit: "cover",
    flexWrap: "wrap",
  },
  brand: {
    border: "1px solid rgba(0,0,0,0.1)",
    borderRadius: 3,
    margin: "5px",
    width: 200,
    height: 130,
    [theme.breakpoints.down(1550)]: {
      width: 150,
      height: 70,
    },
    [theme.breakpoints.down(1200)]: {
      width: 105,
      height: 70,
    },
  },
  modalbody: {
    top: "20%",
    position: "relative",
    margin: "auto",
    borderRadius: 4,
    backgroundColor: "white",
    overFlow: "hidden",
    width: "50%",
    height: "60%",
  },
  categorybtn: {
    backgroundColor: "#ffd426",
    display: "flex",
    alignItems: "center",
    color: "black",
    borderRadius: 3,
    fontSize: 11,
    "&:hover": {
      backgroundColor: "#ffd426",
    },
  },
  megatitle: {
    fontSize: 16,
    margin: "5px 15px",
    fontWeight: 700,
  },
  megadivider: {
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    marginTop: "10px",
    minWidth: "300px",
  },
  megaspan: {
    fontSize: 14,
    width:"100%",
    color: "rgba(0,0,0,0.7)",
    "&:hover": {
      cursor: "pointer",
      color: "#3866df",
    },
  },
  "@global": {
    ".li:hover>.ul": {
      transform: "translatex(101%) scale(1)",
    },
  },
}));
const Grouping = ({ intl }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const match = useRouteMatch({ path: "/:language/:city" });
  const { language, city = "all-city" } = match.params;
  const cities = useSelector((state) => state.city);
  const megaMenu = useSelector((state) => state.megaMenu);
  const categoryData = useSelector((state) => state.category);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch(getCities(language));
    dispatch(getMegaMenu(city,language));
    // eslint-disable-next-line
  }, []);
  const history = useHistory();
  const changeCity = (language) => {
    dispatch(cityChange(language));
    history.push(`/en/${language.name}/shop`);
    setOpen(false);
  };
  return (
    <nav className={classes.root}>
      <Box className="flex">
        <Box className={classes.place}>
          <Typography onClick={handleOpen} className={classes.city}>
            <svg
              className={classes.svg}
              width="14"
              height="18"
              viewBox="0 0 14 18"
            >
              <path d="M7 17.364C2.817 13.15.726 9.666.726 6.91a6.274 6.274 0 0112.548 0c0 2.755-2.091 6.24-6.274 10.453zM2.226 6.91c0 2.042 1.565 4.843 4.774 8.29 3.21-3.447 4.774-6.248 4.774-8.29a4.774 4.774 0 10-9.548 0zM4 6.91a3 3 0 116 0 3 3 0 01-6 0zm3-1.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"></path>
            </svg>
            {cities.current.title}
          </Typography>
        </Box>
        <Box>
          <Box
            alignItems="center"
            className="container mx-auto flex justify-between"
          >
            <div className="group inline-block" style={{ zIndex: 999999 }}>
              <Button
                className={`${classes.categorybtn} outline-none focus:outline-none`}
              >
                <span className="pr-1 font-semibold flex-1">
                  {" "}
                  <ListIcon className="mr-2" />{" "}
                  <FormattedMessage
                    id="categories"
                    defaultMessage="categories"
                  />
                </span>
                <span>
                  <svg
                    className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </span>
              </Button>
              <ul
                style={{
                  width: "300px",
                  backgroundColor: "#fcfbf4",
                  boxShadow: "1px 1px 4px rgba(0,0,0,0.3)",
                }}
                className="ul transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
              >
                {categoryData?.data?.map((item, i) => (
                  <li className="li rounded-sm relative px-3 py-1 hover:bg-gray-100">
                    <Button className="m- w-full text-left flex items-center outline-none focus:outline-none">
                      <span className="p-1 flex-1">{item.title}</span>
                      <span className="mr-auto">
                        <svg
                          className="fill-current h-4 w-4
                          transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </Button>
                    <ul
                      style={{ border: "1px solid rgba(0,0,0,0.1)" }}
                      className="ul bg-white border rounded-sm absolute top-0 right-0 
                    transition duration-150 ease-in-out origin-top-left
                    min-w-32
                  "
                    >
                      <Typography className={classes.megatitle}>
                        {item.title}
                      </Typography>
                      <Divider className={classes.megadivider} />
                      {item.children.map((index, i) => (
                        <Box display="flex" flexDirection="column">
                          <Link to={`${match.url}/Products/${index.title}/1`}>
                            <button
                              style={{ textAlign: "start" }}
                              className={`${classes.megaspan} p-3 hover:bg-gray-100`}
                            >
                              {index.title}
                            </button>
                          </Link>
                        </Box>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
            <ul className="flex">
              {megaMenu?.data?.data?.map((item, i) => (
                <li key={i} className="hoverable hover:text-black">
                  <a href="#" className={`${classes.link}`}>
                    {item.title}
                  </a>
                  <Box className="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-white  z-50">
                    <Typography className={classes.activeLink}>
                      {item.title}
                    </Typography>
                    <Box className="w-full flex flex-wrap justify-between mx-2">
                      <Box className="w-full text-black mb-8 text-center">
                        <Grid className="flex" container spacing={3}>
                          <Grid item xs={2}>
                            <Typography className={classes.titleca}>
                              Categories
                            </Typography>
                            <ul className="mt-4">
                              {item?.categories?.map((category, index) => (
                                <li key={index} className={classes.list}>
                                  {category?.title}
                                </li>
                              ))}
                            </ul>
                          </Grid>
                          <Grid item xs={5}>
                            <Typography className={classes.titleca}>
                              Top Brands
                            </Typography>
                            <Box className={classes.brands}>
                              {item?.brand?.map((brand, index) => (
                                <Grid key={index} item xs={4}>
                                  <img
                                    className={classes.brand}
                                    src={`https://nandwsouk.com/${brand?.imageSrc}`}
                                  />
                                </Grid>
                              ))}
                            </Box>
                          </Grid>
                          <Grid item xs={5}>
                            <Grid className="mt-4" container spacing={3}>
                              <Grid item xs={8}>
                                <img
                                  className={classes.brands}
                                  src={`https://nandwsouk.com/${
                                    item?.categories === undefined
                                      ? null
                                      : item?.categories[0]?.imageSrc
                                  }`}
                                />
                              </Grid>
                              <Grid item xs={4}>
                                <img
                                  className={classes.brands}
                                  src={`https://nandwsouk.com/${
                                    item?.categories === undefined
                                      ? null
                                      : item?.categories[1]?.imageSrc
                                  }`}
                                />
                              </Grid>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Box>
                    </Box>
                  </Box>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </Box>
      <SimpleModal
        className={classes.modalbody}
        handleClose={handleClose}
        open={open}
        body={
          <Box className={classes.citybox}>
            <Box className={classes.logocity}>
              <img width="40%" alt={"place"} src={placeicon} />
            </Box>
            <Box
              margin="auto"
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography className={classes.selectcity}>
                Select Your City
              </Typography>
              <Autocomplete
                id="combo-box-demo"
                onChange={(event, value) =>
                  changeCity(value === null ? "all-city" : value)
                }
                // eslint-disable-next-line
                options={cities?.cities}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Combo box" variant="outlined" />
                )}
              />
            </Box>
          </Box>
        }
      />
    </nav>
  );
};
export default injectIntl(Grouping);
