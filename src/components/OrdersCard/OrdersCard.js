import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  makeStyles,
  Table,
  TableCell,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Link  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  subtitle: {
    fontSize: 13,
    color: "rgba(0,0,0,0.9)",
    [theme.breakpoints.down("md")]: {
      fontSize: 10,
    },
  },
  price: {
    fontSize: 20,
    fontWeight: 700,
    color: "red",
    [theme.breakpoints.down("md")]: {
      fontSize: 12,
    },
  },
  like: {
    display: "flex",
    color: "gray",
    flexDirection: "column-reverse",
  },
  imgcart: {
    width: 75,
    height: 75,
    borderRadius: "100%",
    border: "1px solid rgba(0,0,0,0.05)",
    objectFit: "cover",
    margin: "auto 30px",
    [theme.breakpoints.down("md")]: {
      height: 90,
    },
  },
  lastprice: {
    fontSize: 14,
    fontWeight: 700,
    margin: "8px 0",
  },
  propertyType: {
    fontSize: 10,
    width: 50,
    height: 20,
    margin: "2px auto",
    border: "1px solid rgba(0,0,0,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textTransform: "capitalize",
  },
  "@global": {
    ".MuiTableCell-root": {
      border: "none",
      width: "100%",
      padding: 0,
    },
    ".MuiAccordionSummary-root.Mui-expanded": {
      backgroundColor: "white",
      margin: "0",
    },
    ".MuiAccordionSummary-root.Mui-expanded ": {
      backgroundColor: "white",
      margin: "0",
    },
    ".MuiAccordionSummary-content": {
      margin: "0 !important",
      backgroundColor: "white",
    },
    ".MuiAccordionSummary-root": {
      padding: 0,
    },
  },
  property: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "10px",
    fontSize: 12,
    padding: 10,
    margin: 5,
    borderRadius: 4,
    border: "3px solid rgba(0,0,0,0.2)",
  },
  boldtitle: {
    fontSize: 22,
    color: "rgba(0,0,0,0.4)",
    margin: "0 2px",
  },
  statusbox: {
    position: "relative",
    width: 200,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  status: {
    margin: "0 5px",
    color: "white",
    fontWeight: 800,
    fontSize: 20,
  },
  statusborder: {
    width: 45,
    height: 145,
    right: -27,
    transform: "rotate(40deg)",
    backgroundColor: "white",
    position: "absolute",
  },
  statusborder2: {
    width: 50,
    height: 140,
    right: -40,
    transform: "rotate(145deg)",
    backgroundColor: "white",
    position: "absolute",
  },
  totalprice: {
    fontSize: 20,
    fontWeight: 500,
    margin: "0 30px",
    color: "rgba(0,0,0,0.7)",
  },
  phoneNumber: {
    color: "green",
  },
  addresstitle: {
    fontSize: 15,
    fontWeight: 700,
    color: "rgba(0,0,0,0.6)",
  },
}));
const OrdersCard = ({ id, detail }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <Accordion
      style={{ overflow: "hidden", margin: "10px 0", borderRadius: "8px" }}
      square
      expanded={expanded === id}
      onChange={handleChange(id)}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Table>
          <TableCell style={{ width: "100%", padding: "0" }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              overflow="hidden"
              height="65px"
            >
              <Box
                style={{ backgroundColor: expanded === id ? "red" : "#b1b1b1" }}
                className={classes.statusbox}
                display="flex"
              >
                <Typography className={classes.status}>
                  {detail?.status[0]?.title}
                </Typography>
                <Box className={classes.statusborder}></Box>
                <Box className={classes.statusborder2}></Box>
              </Box>
              <Box display="flex">
                <Typography style={{ color: "rgba(0,0,0,0.7)" }}>
                  {detail?.date}
                </Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography className={classes.boldtitle}>
                  Price : ( {detail?.products?.length} items)
                </Typography>
                <Typography className={classes.totalprice}>
                  {" "}
                  ${detail.total}
                </Typography>
              </Box>
            </Box>
          </TableCell>
        </Table>
      </AccordionSummary>
      <AccordionDetails
        style={{ borderTop: "1px dotted", flexDirection: "column" }}
      >
        {detail?.products?.map((item, i) => (
          <Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                borderBottom: "2px solid rgba(0,0,0,0.2)",
                height: 90,
              }}
            >
              <TableCell align="center">
                <Link to="/">
                  <img
                    className={classes.imgcart}
                    alt=" "
                    src={`https://nandwsouk.com/${item?.image}`}
                  />
                </Link>
              </TableCell>
              <TableCell align="center">
                <Box
                  style={{ maxWidth: 250 }}
                  display="flex"
                  flexDirection="column"
                >
                  <Typography className={classes.subtitle} align="left">
                    {item.name}
                  </Typography>
                  <Typography className={classes.subtitle} align="left">
                    <Typography className={classes.lastprice}>
                      {item.price} * {item.quantity}
                    </Typography>
                  </Typography>
                </Box>
              </TableCell>
              <TableCell style={{ textAlign: "end" }}>
                {item.properties.map((item, i) => (
                  <Box
                    className={classes.propertyType}
                    display="flex"
                    justifyContent="center"
                  >
                    {item.PropertyName}
                  </Box>
                ))}
              </TableCell>
              <TableCell style={{ textAlign: "end" }}>
                <Typography className={classes.price}>
                  $ {item?.total?.toFixed(2)}
                </Typography>
              </TableCell>
            </Box>
          </Box>
        ))}
        <Box display="flex" justifyContent="space-between">
          <Box width="50%" padding="20px">
            <Typography className={classes.addresstitle}>
              Shipping address :
            </Typography>
            <Typography className={classes.addresstitle}>Phone :</Typography>
          </Box>
          <Box width="100%" padding="20px">
            <Typography>{detail?.invoiceAddress[0]?.address}</Typography>
            <Typography className={classes.phoneNumber}>
              {detail.customer.email}
            </Typography>
          </Box>
          <Box
            width="100%"
            padding="20px"
            display="flex"
            justifyContent="end"
            flexDirection="column"
          >
            <Typography
              style={{ textAlign: "end" }}
              className={classes.addresstitle}
            >
              Payment :{" "}
            </Typography>
            <Box>
              <Typography style={{ textAlign: "end" }}>
                {detail.gateway.title}
              </Typography>
            </Box>
          </Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default OrdersCard;
