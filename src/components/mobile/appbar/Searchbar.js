import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { Box} from "@material-ui/core";
import Logo from "images/Logo.png"
import SimpleAutocomplate from "components/layout/Navbar/SimpleAutocomplate";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: "white",
    minHeight: 50,
  },
  searchbox: {
    width: "100%",
    border: "2px solid #ffd426",
    padding: "2px 5px",
    display: "flex",
    alignItems: "center",
    borderRadius: 5,
    [theme.breakpoints.down(900)]:{
      border: "2px solid rgba(0,0,0,0.2)",
      padding:0,
    }
  },
  searchicon: {
    color: "rgba(0,0,0,0.5)",
    margin: "0 5px",
  },
  priceandLng: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 15px",
    height: "30px",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.05)",
  },
  langform: {
    height: "20px",
  },
  formcontrol: {
    background: "white",
    color: "black",
    border: "none",
    borderRadius: 2,
    paddingRight: "2rem",
  },
  text: {
    fontSize: 11,
  },
  "@global": {
    ".huklGi > .wrapper:focus-within": {
      boxShadow: "none",
    },
    ".huklGi > .wrapper:hover": {
      boxShadow: "none",
    },
  },
  logo:{
    width:90,
    height:40,
    objectFit:"cover"
  }
}));

function Searchbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="fixed">
      <Toolbar style={{ height: 50 }}>
        <img className={classes.logo} alt="logo" src={Logo} />
        <Box className={classes.searchbox}>
          <SimpleAutocomplate />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default Searchbar;
