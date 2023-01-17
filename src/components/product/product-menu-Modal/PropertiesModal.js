import React from "react";
import { withStyles } from '@material-ui/core/styles';
import {
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@material-ui/core";
import classNames from "classnames";

const YellowCheckbox = withStyles({
  root: {
    color: "#dcdbdb",
    "&:hover, &:focus": {
      backgroundColor: "transparent",
    },
    padding: "3px",
    "&$checked": {
      color: "rgb(255, 224, 51)",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

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
};

const PropertiesModal = ({ classes, product }) => {
  // eslint-disable-next-line
  const [checked, setChecked] = React.useState(true);
  const checkboxLabel = (
    <div className={classNames(classes.price, " py-3 px-1 w-full text-sm")}>
      <span>{product.PropertyName} </span>
      <span className={classes.gray}>+{product.PropertyPrice} ₽</span>
    </div>
  );
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div className={classNames(classes.root, "w-1/2 flex flex-row")}>
      <FormGroup row>
        <FormControlLabel
          control={<YellowCheckbox onChange={handleChange} />}
          label={checkboxLabel}
        />
      </FormGroup>
    </div>
  );
};

export default withStyles(styles)(PropertiesModal);
