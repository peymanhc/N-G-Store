import React, { useReducer } from "react";
import { TextField, Dialog } from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";
import { makeStyles, withStyles } from '@material-ui/core/styles';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addAddress, editAddress, removeAddress } from "store/user";

import Utils from "assert/Utils";
import AddressMap from "./AddressMap";

const InfoField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#a9a6a6",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#e0e0e0",
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: "#e0e0e0",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#e0e0e0",
      },
      "&:hover fieldset": {
        borderColor: "#e0e0e0",
      },
      "&.Mui-focused": {
        border: "1px solid #e0e0e0",
      },
    },
  },
})(TextField);

const image = "url(/static/images/map/map.png)";

const useStyles = makeStyles(() => ({
  map: {
    backgroundImage: `${image}`,
    flex: "0 0 auto",
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "250px",
    cursor: "pointer",
  },
  mapPin: {
    top: "50%",
    left: "50%",
    width: "30px",
    position: "absolute",
    transform: "translate(-50%, -100%)",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    width: "100%",
    zIndex: 10,
    marginTop: "10px",
    padding: 12,
  },
  margin: {
    width: "23.5%",
    marginRight: "2%",
  },
  width: {
    width: "23.5%",
  },
  dltBtn: {
    display: "block",
    background: "transparent",
    boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, .1)",
    color: "#000",
    height: "52px",
    border: "0",
    padding: "0 20px",
    fontSize: "16px",
    fontWeight: "500",
    userSelect: "none",
    borderRadius: "8px",
  },
  saveBtn: {
    border: " 1px solid rgb(255, 224, 51)",
    background: "rgb(255, 224, 51)",
    borderRadius: "8px",
    height: "52px",
    padding: "0 38px",
  },
  paperWidth: {
    maxWidth: "420px",
    minWidth: "280px",
    flexWrap: "nowrap",
    maxHeight: "calc(100% - 40px)",
    borderRadius: "8px",
  },
}));

const officeInput = {
  name: (
    <FormattedMessage
      id="home.userAddressInput.Office"
      defaultMessage="SQ / office"
    />
  ),
};
const intercomInput = {
  name: (
    <FormattedMessage
      id="home.userAddressInput.Intercom"
      defaultMessage="Intercom"
    />
  ),
};
const porchInput = {
  name: (
    <FormattedMessage id="home.userAddressInput.Porch" defaultMessage="Porch" />
  ),
};
const floorInput = {
  name: (
    <FormattedMessage id="home.userAddressInput.Floor" defaultMessage="Floor" />
  ),
};
const commentInput = {
  name: (
    <FormattedMessage
      id="home.userAddressInput.Comment"
      defaultMessage="Comment on the order"
    />
  ),
};
const initialState = {
  id: null,
  description: "",
  office: "",
  intercom: "",
  porch: "",
  floor: "",
  comment: "",
};

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value,
  };
};

const AddressEditing = ({
  intl,
  address,
  goToBack,
  addAddress,
  editAddress,
  removeAddress,
}) => {
  const descriptionAddressInput = {
    name: intl.formatMessage({
      id: "home.userAddressInput.DeliveryAddress",
      defaultMessage: "Delivery address",
    }),
  };
  const classes = useStyles();

  const [state, dispatch] = useReducer(
    reducer,
    Object.assign({}, initialState, address || {})
  );

  const handleChange = (event) => {
    dispatch({ field: event.target.name, value: event.target.value });
  };

  const { description, office, intercom, porch, floor, comment } = state;

  const [open, setOpen] = React.useState(false);
  const [mapOpen, setMapOpen] = React.useState(false);

  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };

  const mapDialogOnChange = () => {
    setMapOpen(!mapOpen);
  };

  const editAddressClick = () => {
    if (state.id === null) addAddress({ ...state, id: Utils.generateGUID() });
    else editAddress(state);
    goToBack();
  };

  const removeAddressClick = () => {
    if (state.id !== null) removeAddress(address);
    goToBack();
  };

  const selectAddress = (item) => {
    const { lat, lng, description } = item;
    dispatch({ field: "lat", value: lat });
    dispatch({ field: "lng", value: lng });
    dispatch({ field: "description", value: description });
    mapDialogOnChange();
  };

  const AlertDialog = () => (
    <Dialog
      onClose={closeDialog}
      aria-labelledby="customized-dialog-title"
      open={open}
      classes={{ paper: classes.paperWidth }}
    >
      <div className="flex flex-col p-6">
        <div className="w-full text-lg font-bold">
          <FormattedMessage
            id="home.addressEditing.DeleteAddress"
            defaultMessage="Do you want to delete the address ?"
          />
        </div>
        <div className="w-full flex flex-row mt-8 justify-center">
          <button
            className={classNames(
              classes.saveBtn,
              "text-center text-lg mr-3 w-1/2"
            )}
            onClick={removeAddressClick}
          >
            <FormattedMessage id="home.locationModal.Ok" defaultMessage="Ok" />
          </button>
          <button
            className={classNames(classes.dltBtn, "w-1/2")}
            onClick={closeDialog}
          >
            <FormattedMessage
              id="home.mobileSearchInput.Cancel"
              defaultMessage="Cancel"
            />
          </button>
        </div>
      </div>
    </Dialog>
  );
  return (
    <div className="flex flex-col h-full">
      <div className={classes.map} onClick={mapDialogOnChange}>
        <img
          className={classes.mapPin}
          src="/static/images/map/location.svg"
          alt="map-pin"
        />
      </div>
      <AddressMap
        open={mapOpen}
        closeDialog={mapDialogOnChange}
        address={state}
        selectAddress={selectAddress}
      />
      <form className={classes.root} noValidate>
        <InfoField
          name="description"
          className="w-full"
          value={description}
          label={descriptionAddressInput.name}
          onChange={handleChange}
        />
        <div className="w-full flex flex-row flex-no-wrap mt-3">
          <InfoField
            name="office"
            className={classes.margin}
            value={office}
            label={officeInput.name}
            onChange={handleChange}
          />
          <InfoField
            name="intercom"
            className={classes.margin}
            value={intercom}
            label={intercomInput.name}
            onChange={handleChange}
          />
          <InfoField
            name="porch"
            className={classes.margin}
            value={porch}
            label={porchInput.name}
            onChange={handleChange}
          />
          <InfoField
            name="floor"
            className={classes.width}
            value={floor}
            label={floorInput.name}
            onChange={handleChange}
          />
        </div>
        <div className="w-full mt-3">
          <InfoField
            name="comment"
            className="w-full"
            value={comment}
            label={commentInput.name}
            onChange={handleChange}
            multiline
            rows={4}
            rowsMax={6}
          />
        </div>
      </form>
      <div className="w-full flex flex-col mt-10 px-4">
        <button className={classes.dltBtn} onClick={openDialog}>
          <FormattedMessage
            id="home.userAddress.Delete"
            defaultMessage="Delete"
          />
        </button>
        <button
          className={classNames(
            classes.saveBtn,
            "text-center w-full px-2 py-5 mt-5 text-base"
          )}
          onClick={editAddressClick}
        >
          <FormattedMessage id="home.userAddress.Save" defaultMessage="Save" />
        </button>
      </div>
      <AlertDialog />
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addAddress,
      editAddress,
      removeAddress,
    },
    dispatch
  );
}
export default connect(null, mapDispatchToProps)(injectIntl(AddressEditing));
