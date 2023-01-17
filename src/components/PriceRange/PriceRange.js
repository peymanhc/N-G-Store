import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Box,
  Button,
  debounce,
  Divider,
  Slider,
  withStyles,
} from "@material-ui/core";
import { getProducts } from "store/products/products.action";
import { useDispatch } from "react-redux";
import { useRouteMatch } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px",
  },
  wrapper: {
    width: "100%",
    padding: "10px",
    boxShadow: "0px 0px 2px 1px rgba(0,0,0,0.1)",
  },
  heading: {
    fontSize: 12,
    fontWeight: 700,
    padding: "5px",
    textTransform: "capitalize",
  },
  pricetxt: {
    fontSize: 13,
    color: "rgba(0,0,0,0.6)",
    marginTop: 3,
  },
  submit: {
    width: "100%",
    marginTop: 20,
    height: 30,
    backgroundColor: "#7edeea",
    color: "white",
    "&:hover": {
      backgroundColor: "#3d868a",
    },
  },
}));
const AirbnbSlider = withStyles({
  root: {
    color: "#3a8589",
    height: 3,
    padding: "13px 0",
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: "#fff",
    border: "1px solid #7edeea",
    marginLeft: -13,
    boxShadow: "#ebebeb 0 2px 2px",
    "&:focus, &:hover, &$active": {
      boxShadow: "#ccc 0 2px 3px 1px",
    },
    "& .bar": {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: "#7edeea",
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: "#7edeea",
    opacity: 1,
    height: 3,
  },
})(Slider);
function PriceRange({handleChange,railprice,max}) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState("panel1");

  const handleOpenPrice = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleOpenPrice("panel1")}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Price Range</Typography>
          </AccordionSummary>
          <Divider />
          <AccordionDetails>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              width="100%"
            >
              <AirbnbSlider
                getAriaLabel={(index) =>
                  index === 0 ? "Minimum price" : "Maximum price"
                }
                defaultValue={railprice}
                onChange={handleChange}
                step={100}
                min={0} 
                max={max}
              />
              <Box display="flex" justifyContent="space-between" width="100%">
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Typography className={classes.pricetxt}>From</Typography>
                  <Typography className={classes.pricetxt}>
                    ${railprice[0]}
                  </Typography>
                  <Typography className={classes.pricetxt}>Dollar</Typography>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                >
                  <Typography className={classes.pricetxt}>up to</Typography>
                  <Typography className={classes.pricetxt}>
                    ${railprice[1]}
                  </Typography>
                  <Typography className={classes.pricetxt}>Dollar</Typography>
                </Box>
              </Box>
              <Button className={classes.submit}>Submit</Button>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
export default PriceRange;
