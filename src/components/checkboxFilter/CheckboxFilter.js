import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  formControl: {
    margin: theme.spacing(3),
    marginBottom: 0,
  },
  title: {
    fontSize: 14,
    fontWeight: 700,
  },
}));

function CheckBoxFilter({
  title,
  properties,
  setFilter,
  Filter,
  handleChange,
}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend" className={classes.title}>
          {title}
        </FormLabel>
        <FormGroup>
          {properties.map((item, i) => (
            <FormControlLabel
              control={
                <Checkbox
                  size="small"
                  name={item.title}
                  checked={Filter[item.title]}
                  onChange={(e) => handleChange(e,i)}
                />
              }
              label={<span className="text-xs">{item.title}</span>}
            />
          ))}
        </FormGroup>
      </FormControl>
    </div>
  );
}
export default CheckBoxFilter;
