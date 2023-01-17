import React from "react";
import { DialogContent, DialogActions } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { makeStyles } from '@material-ui/core/styles';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "store/dialog";

import FixedModalHeader from "./FixedModalHeader";
import PropertiesModal from "./PropertiesModal";
import ProductMenuModalFooter from "./ProductMenuModalFooter";
// eslint-disable-next-line
import PropertiesOptionModal from "./PropertiesOptionModal";

const useStyles = makeStyles((theme) => ({
  gray: {
    color: "#b0b0b0",
  },
  dialog: {
    backgroundColor: " #fafafa",
    borderTop: "solid 1px #f5f5f5",
    borderBottom: "solid 1px #f5f5f5",
  },
}));

const products = {
  properties: [
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
  ],
  propertiesOption: [{ id: "06bc2ed9", PropertyName: "", PropertyPrice: "" }],
};

const ProductMenuModal = ({ closeDialog }) => {
  const classes = useStyles();

  return (
    <>
      <FixedModalHeader
        closeDialog={closeDialog}
        title={
          <FormattedMessage
            id="restaurant.productMenuModal.SelectOptions"
            defaultMessage="Select options"
          />
        }
      />
      <DialogContent dividers={false} className={classes.dialog}>
        <div className="text-md">
          <div className={classes.gray}>
            <div>
              <FormattedMessage
                id="restaurant.productMenuModal.AdditionalIngredients"
                defaultMessage="Additional ingredients"
              />
            </div>
            <div>
              <FormattedMessage
                id="restaurant.productMenuModal.ChooseTo"
                defaultMessage="Choose to "
              />{" "}
              18
            </div>
          </div>
          <div className="flex flex-wrap">
            {products.properties.map((product) => (
              <PropertiesModal key={product.id} product={product} />
            ))}
          </div>
          <div className="flex flex-wrap">
		  {
              //<PropertiesOptionModal/>		  
		  }
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <ProductMenuModalFooter />
      </DialogActions>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      closeDialog: Actions.closeDialog,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(ProductMenuModal);
