import React from "react";
import { withStyles } from '@material-ui/core/styles';
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Icon,
} from "@material-ui/core";

import classNames from "classnames";

const YellowRadio = withStyles({
  root: {
    color: "#dcdbdb",
    "&$checked": {
      color: "rgb(255, 224, 51)",
    },
  },
  checked: {},
})((props) => (
  <Radio
    color="default"
    disableRipple
    checkedIcon={<Icon style={{ color: "#ffe033" }}>radio_button_checked</Icon>}
    icon={<Icon>radio_button_unchecked</Icon>}
    {...props}
  />
));

const styles = {
  body: {
    borderTop: "solid 1px #f5f5f5",
  },
  gray: {
    color: "#b0b0b0",
  },
  option: {
    display: "flex",
    fontSize: "14px",
  },
  price: {
    borderBottom: "1px solid #f3f1f1",
  },
  radio:{
    flexDirection:"row"
  },
  label:{
    margin:"5px 0"
  }
};

const propertiesOption = [
  { id: "06bc2ed9", PropertyName: " Салями (27 г)", PropertyPrice: 150 },
  { id: "06bc2ei9", PropertyName: " Сыр дорблю (20 г)", PropertyPrice: 250 },
  {
    id: "06bc2ed3",
    PropertyName: " Трюфельный крем (12 г)",
    PropertyPrice: 350,
  },
  { id: "06bc2ed6", PropertyName: " Миндаль (10 г)", PropertyPrice: 100 },
  {
    id: "06bc2ed7",
    PropertyName: " Грецкие орехи (10 г)",
    PropertyPrice: 50,
  },
  { id: "06bc2ed8", PropertyName: " Курица (50 г)", PropertyPrice: 200 },
  { id: "06bc2ed2", PropertyName: " Томаты черри (10 г)", PropertyPrice: 50 },
  {
    id: "06bc2ed1",
    PropertyName: " Сыр моцарелла (50 г)",
    PropertyPrice: 450,
  },
  { id: "06bc2ed4", PropertyName: " Курица (50 г)", PropertyPrice: 40 },
  { id: "06bc2ed5", PropertyName: " Сыр рикотта (25 г)", PropertyPrice: 150 },
];

const PropertiesOptionModal = ({ classes }) => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="gender"
        name="gender"
        value={value}
        onChange={handleChange}
        className={classes.radio}
      >
        {propertiesOption.map((product) => {
          const radioboxLabel = (
            <div className={classNames(classes.root, " flex flex-row")}>
              <div
                className={classNames(
                  classes.price,
                  " py-3 px-1 w-full text-sm"
                )}
              >
                <span>{product.PropertyName} </span>
                <span className={classes.gray}>+{product.PropertyPrice} ₽</span>
              </div>
            </div>
          );
          return (
            <FormControlLabel
              key={product.id}
              value={product.id}
              control={<YellowRadio />}
              label={radioboxLabel}
              className={classNames(classes.label,"w-full md:w-1/2 mx-0")}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};

export default withStyles(styles)(PropertiesOptionModal);
