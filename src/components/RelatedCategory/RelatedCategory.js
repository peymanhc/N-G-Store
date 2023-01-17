import React from "react";
import { Box, Divider, makeStyles, Typography } from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 10px",
  },
  title: {
    fontSize: 16,
    fontWeight: 700,
    textTransform: "capitalize",
  },
  wrapper: {
    position: "relative",
    marginTop: 10,
    padding: "10px",
    boxShadow: "0px 0px 2px 1px rgba(0,0,0,0.1)",
  },
  titlecate: {
    fontSize: 15,
    padding: "5px",
    textTransform: "capitalize",
  },
  heading: {
    fontSize: 14,
    fontWeight: 500,
    padding: "5px",
    textTransform: "capitalize",
  },
  subheading: {
    fontSize: 14,
    padding: "4px 40px",
    textTransform: "capitalize",
    cursor: "pointer",
    color: "gray",
    fontWeight: 500,
    "&:hover": {
      color: "black",
    },
  },
  showMore: {
    borderTop: "1px solid rgba(0,0,0,0.1)",
    width: "100%",
    height: 30,
    fontSize: 14,
    backgroundColor: "transparent",
    textTransform: "lowercase",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    cursor: "pointer",
  },
  "@global": {
    ".MuiPaper-elevation1": {
      boxShadow: "none",
    },
    ".MuiAccordion-root.Mui-expanded": {
      margin: "0",
    },
    ".MuiAccordionSummary-root.Mui-expanded": {
      minHeight: "30px",
      height: 30,
    },
    ".MuiAccordionSummary-root": {
      height: 30,
      minHeight: 30,
      padding: "0",
    },
    ".MuiAccordion-root": {
      "&::before": {
        backgroundColor: "transparent",
      },
    },
  },
}));
const RelatedCategory = ({
  data,
  handleChangeFilter,
  CategoryFilter,
  setCategoryFilter,
}) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);
  const [Visible, setVisible] = React.useState(4);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const ShowMoreHandler = () => {
    setShowMore(!showMore);
    !showMore ? setVisible(data?.categoryLabels?.length) : setVisible(4);
  };
  return (
    <Box className={classes.root}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <ListIcon style={{ fontSize: 35 }} />
        <Typography className={classes.title} variant="h3">
           <FormattedMessage
              id="products.filter.categories_results"
              defaultMessage="categories results"
           />   
        </Typography>
      </Box>
      <Box className={classes.wrapper}>
        {/* <Typography className={classes.titlecate}>          
        </Typography> */}
        <Divider />
        <Box marginTop="10px">
          <Typography
            onClick={() => handleChangeFilter("All",1)}
            style={{ margin: "0 35px", cursor: "pointer" }}
            className={classes.heading}
          >
             <FormattedMessage
               id="products.filter.All"
               defaultMessage="All"
             />   
              
          </Typography>
          {data?.slice(0, Visible).map((item, i) => (
            <Accordion
              expanded={expanded === item.notes}
              onChange={handleChange(item.notes)}
            >
              <AccordionSummary
                style={{ flexDirection: "row-reverse" }}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography className={classes.heading}>
                  {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box display="flex" flexDirection="column">
                  {item.children?.map((index, i) => (
                    <Typography
                      onClick={() => handleChangeFilter(index.title, 1)}
                      className={classes.subheading}
                    >
                      {index.title}
                    </Typography>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
          <Box onClick={() => ShowMoreHandler()} className={classes.showMore}>
            {showMore ? (
              <>
                Show less
                <ExpandLessIcon />
              </>
            ) : (
              <>
                Show More
                <ExpandMoreIcon />
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default RelatedCategory;
