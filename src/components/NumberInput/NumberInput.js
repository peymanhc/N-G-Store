import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// components
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  number: {
    userSelect: "none",
  },
  numberroot: {
    padding: 4,
    width: "auto",
    justifyContent: "space-between",
  },
}));

function NumberInput({ min = 0, max, val, decrease, increase, className }) {
  const classes = useStyles();

  return (
    <Paper elevation={0} variant="outlined">
      <Box className={classes.numberroot} display="flex" alignItems="center">
        <Button
          disabled={min === val ? true : false}
          size="small"
          color="default"
          onClick={decrease}
          className={className}
          style={{ minWidth: 10 }}
        >
          -
        </Button>
        <Box>
          <Typography component="span" variant="button">
            {val}
          </Typography>
        </Box>
        <Button
          size="small"
          color="default"
          onClick={increase}
          disabled={max <= val ? true : false}
          className={className}
          style={{ minWidth: 10 }}
        >
          +
        </Button>
      </Box>
    </Paper>
  );
}

export default NumberInput;
