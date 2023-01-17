import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "20px auto",
    maxWidth: 345,
  },
  media: {
    height: 160,
    width: "55%",
    objectFit: "cover",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  status: {
    padding: "10px 15px",
    color: "white",
    borderRadius: "10px",
    backgroundColor: "red",
  },
  name: {
    width: "70%",
    fontSize: 12,
    fontWeight: 700,
  },
  content: {
    width: "100%",
  },
  propertyTitle: {
    fontSize: 13,
    fontWeight: 700,
    margin: "10px 0",
  },
  addresstitle: {
    fontSize: 13,
    fontWeight: 700,
    color: "rgba(0,0,0,0.6)",
  },
  boxdetail: {
    padding: "5px",
    borderBottom: "1px dotted rgba(0,0,0,0.2)",
  },
  detailtext: {
    fontWeight: 700,
    fontSize: 12,
    margin: "0 10px",
  },
}));

function OrderCard({ id, detail }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        style={{ borderBottom: "1px solid rgba(0,0,0,0.1)" }}
        avatar={
          <Box aria-label="recipe" className={classes.status}>
            {detail?.status[0]?.title}
          </Box>
        }
        action={
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        }
        title={`Price : ( ${detail?.products?.length} items)`}
        subheader={detail?.date}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {detail?.products?.map((item, i) => (
          <CardContent>
            <Typography className={classes.name}> {item.name}</Typography>
            <Box display="flex">
              <img
                className={classes.media}
                src={`https://nandwsouk.com/${item?.image}`}
              />
              <CardContent className={classes.content}>
                <Typography className={classes.propertyTitle} component="p">
                  {item.price} * {item.quantity}
                </Typography>
                <Box display="flex">
                  <Typography className={classes.propertyTitle}>
                    {" "}
                    Property :{" "}
                  </Typography>
                  {item.properties.map((item, i) => (
                    <Box
                      className={classes.propertyType}
                      display="flex"
                      justifyContent="center"
                    >
                      {item.PropertyName}
                    </Box>
                  ))}
                </Box>
                <Typography className={classes.propertyTitle}>
                  Product Price : ${item?.total?.toFixed(2)}
                </Typography>
              </CardContent>
            </Box>
          </CardContent>
        ))}
        <Box
          display="flex"
          flexDirection="column"
          padding="0 20px"
          paddingBottom="20px"
        >
          <Box className={classes.boxdetail}>
            <Typography className={classes.addresstitle}>
              Shipping address :
            </Typography>
            <Typography className={classes.detailtext}>
              {detail?.invoiceAddress[0]?.address}
            </Typography>
          </Box>
          <Box className={classes.boxdetail}>
            <Typography className={classes.addresstitle}>Phone :</Typography>
            <Typography className={classes.detailtext}>
              {detail.customer.email}
            </Typography>
          </Box>
          <Box className={classes.boxdetail}>
            <Typography className={classes.addresstitle}>Payment : </Typography>
            <Typography className={classes.detailtext}>
              {detail.gateway.title}
            </Typography>
          </Box>
        </Box>
      </Collapse>
    </Card>
  );
}
export default OrderCard;
