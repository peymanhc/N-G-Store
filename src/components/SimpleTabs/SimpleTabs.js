import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Divider, withStyles } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "transparent",
    margin: "0 20px",
  },
  appbar: {
    backgroundColor: "white",
    color: "black",
    boxShadow: "none",
    borderBottom: "1px solid rgba(0,0,0,0.2)",
  },
  detailtxt: {
    color: "rgba(0,0,0,0.6)",
  },
  producttitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 700,
  },
  producttxt: {
    color: "rgba(0,0,0,0.7)",
    marginTop: 15,
    fontSize: 15,
  },
  Technicals: {
    marginTop: 25,
    fontSize: 16,
    fontWeight: 700,
  },
  detailbox: {
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    padding: 10,
  },
}));

function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const Property =
    props?.detail?.properties === undefined ? "" : props?.detail?.properties[0];

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: "rgba(255, 204, 0,0.1)",
      },
    },
  }))(TableRow);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Tabs
          TabIndicatorProps={{ style: { background: "#fc0", color: "red" } }}
          value={value}
          onChange={handleChange}
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="Details" {...a11yProps(1)} />
          <Tab label="Video" {...a11yProps(2)} />
          <Tab label="Write Review" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography className={classes.detailtxt}>
          {ReactHtmlParser(props?.detail?.description)}
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow style={{ backgroundColor: "#fc0" }}>
                <TableCell style={{ fontSize: 16 }}>Title</TableCell>
                <TableCell style={{ fontSize: 16 }} align="right">
                  About
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(Property === undefined ? [] : Property)?.map(
                ([key, value]) => {
                  return (
                    <StyledTableRow key={key}>
                      <StyledTableCell component="th" scope="row">
                        {key}
                      </StyledTableCell>
                      <StyledTableCell align="right">{value}</StyledTableCell>
                    </StyledTableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item four
      </TabPanel>
      <Divider />
    </div>
  );
}
export default SimpleTabs;
