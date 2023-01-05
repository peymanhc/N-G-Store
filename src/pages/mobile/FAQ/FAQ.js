import { Box } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  title:{
    fontSize:17,
    fontWeight:800,
    color:"black",
    textAlign:"center",
    "&:first-letter" :{
      color: "red",
      fontSize:20
    }
  }
}));
const FAQ = () => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" margin="100px 15px">
      <Typography className={classes.title} >Frequently Asked Questions</Typography>
     <Box margin="50px 0">
     {[0, 1, 2, 3, 4].map((item) => (
        <Accordion >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>Test 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
     </Box>
    </Box>
  );
};

export default FAQ;
