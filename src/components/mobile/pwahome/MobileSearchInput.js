import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import useAutocomplete from "@material-ui/lab/useAutocomplete";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { openDialog } from "store/dialog";
import * as Actions from "store/dialog";

const useStyles = makeStyles((theme) => ({
  searchBox: {
    height: "64px",
    padding: "8px 16px 0px 16px",
    position: "relative",
    background: "white",
  },
  searchInput: {
    flex: "1",
    height: "48px",
    margin: "0",
    padding: "16px 0",
    position: "relative",
    background: "#F1F0ED",
    borderRadius: "16px",
  },
  searchIcon: {
    top: "12px",
    left: "12px",
    position: "absolute",
    backgroundImage: "url(/static/images/icons/search.svg)",
    width: "24px",
    height: "24px",
    display: "inline-block",
    backgroundSize: "24px 24px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  searchIconLabel: {
    color: "#9E9B98",
    fontSize: "16px",
    textAlign: "left",
    paddingLeft: "48px",
  },
  sortIcon: {
    width: "48px",
    height: "48px",
    marginLeft: "8px",
    borderRadius: "8px",
    backgroundColor: "#F1F0ED",
    backgroundImage: "url(/static/images/icons/sort.svg)",
    display: "inline-block",
    backgroundSize: "24px 24px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  borderBottom: {
    borderBottom: " 1px solid rgba(0,0,0,.05)",
    backgroundColor: " #ffffff",
  },
  addressInput: {
    "&::placeholder": {
      color: "rgb(117, 117, 117)",
    },
  },
  divider: {
    width: "1px",
    height: "24px",
    backgroundColor: "rgba(0,0,0,.05)",
    marginTop: "15px",
  },
  cancelBtn: {
    width: "105px",
    border: "none",
    fontSize: "14px",
    backgroundColor: "#ffffff",
  },
  searchPlaceRoot: {
    display: "flex",
    marginTop: "20px",
    minHeight: "54px",
    alignItems: "flex-start",
    paddingLeft: "20px",
  },
  bgLoading: {
    backgroundSize: "240px",
    backgroundImage: "url(/static/images/restaurants/fallback-pattern.svg)",
    backgroundColor: "#f5f5f5",
    backgroundPosition: "center",
    width: "36px",
    float: "left",
    height: "36px",
    overflow: "hidden",
    marginTop: "7px",
    marginRight: "16px",
    borderRadius: "8px",
  },
  placeImage: {
    width: "100%",
    height: "100%",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  placeInfo: {
    flex: "1",
    marginTop: "6px",
    paddingRight: "20px",
  },
  placeTag: {
    height: "16px",
    display: "flex",
    overflow: "hidden",
    flexWrap: "wrap",
    alignItems: "center",
    color: " #b0b0b0",
  },
}));

const searchPlace = [
  {
    name: "Смузи бар Te Gusto",
    tags: ["Вегетарианская", "Здоровая еда", "Веганская"],
    image:
      "/static/images/restaurants/34185a36ace211be649797390d18db99-100x100.jpg",
  },
  {
    name: "Смузи бар Te Gusto",
    tags: ["Вегетарианская", "Здоровая еда", "Веганская"],
    image:
      "/static/images/restaurants/34185a36ace211be649797390d18db99-100x100.jpg",
  },
  {
    name: "Смузи бар Te Gusto",
    tags: ["Вегетарианская", "Здоровая еда", "Веганская"],
    image:
      "/static/images/restaurants/34185a36ace211be649797390d18db99-100x100.jpg",
  },
  {
    name: "Смузи бар Te Gusto",
    tags: ["Вегетарианская", "Здоровая еда", "Веганская"],
    image:
      "/static/images/restaurants/34185a36ace211be649797390d18db99-100x100.jpg",
  },
  {
    name: "Смузи бар Te Gusto",
    tags: ["Вегетарианская", "Здоровая еда", "Веганская"],
    image:
      "/static/images/restaurants/34185a36ace211be649797390d18db99-100x100.jpg",
  },
  {
    name: "Смузи бар Te Gusto",
    tags: ["Вегетарианская", "Здоровая еда", "Веганская"],
    image:
      "/static/images/restaurants/34185a36ace211be649797390d18db99-100x100.jpg",
  },
];

const SearchRestaurants = connect(
  null,
  mapDispatchToProps
)(injectIntl(({ closeDialog ,intl}) => {
  const classes = useStyles();
  const findFood = {
    input: intl.formatMessage({
      id: "home.mobileSearchInput.FindFood",
      defaultMessage: "Find in Food",
    }),
  };
  
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState("");
  const inputChange = (event) => setInput(event.target.value);

  useEffect(() => {
    if (input === "") {
      setOptions([]);
      return undefined;
    }
    const result = searchPlace.filter(
      (item) => item.name.toLocaleLowerCase().indexOf(input) > -1
    );

    setOptions(result);
  }, [input]);

  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    getOptionLabel: (option) => option.name,
    options: options,
    clearOnEscape: true,
    onInputChange: inputChange,
  });

  return (
    <div>
      <div
        className={classNames(
          classes.borderBottom,
          "flex flex-row flex-no-wrap"
        )}
      >
        <div {...getRootProps()} className="w-11/12">
          <input
            {...getInputProps()}
            placeholder={findFood.input}
            type="text"
            className={classNames(classes.addressInput, "pr-0 pl-5 py-5")}
          />
        </div>
        <div className={classes.divider}></div>
        <button onClick={closeDialog} className={classes.cancelBtn}>
          <FormattedMessage
            id="home.mobileSearchInput.Cancel"
            defaultMessage="Cancel"
          />
        </button>
      </div>
      <ul className={classes.listbox} {...getListboxProps()}>
        {groupedOptions.map((option, index) => (
          <li
            {...getOptionProps({ option, index })}
            className={classes.searchPlaceRoot}
            key={index}
          >
            <div className={classes.bgLoading}>
              <img
                src={option.image}
                className={classes.placeImage}
                alt={option.name}
              />
            </div>
            <div className={classes.placeInfo}>
              <div className="font-bold text-xl leading-tight">
                {option.name}
              </div>
              <ul className={classes.placeTag}>
                {option.tags.map((tag) => (
                  <li className="text-sm mr-3" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}));

const MobileSearchInput = ({ handleDrawerOpen, openDialog }) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.searchBox, "flex")}>
      <div
        className={classes.searchInput}
        onClick={() =>
          openDialog({
            children: <SearchRestaurants />,
            fullScreen: true,
            scroll: "body",
            classes: { paper: classes.dialogPaper },
          })
        }
      >
        <div className={classes.searchIcon}></div>
        <div className={classes.searchIconLabel}>
          <FormattedMessage
            id="home.mobileSearchInput.FindFood"
            defaultMessage="Find in Food"
          />
        </div>
      </div>
      <div className={classes.sortIcon} onClick={handleDrawerOpen}></div>
    </div>
  );
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      closeDialog: Actions.closeDialog,
      openDialog,
    },
    dispatch
  );
}
export default connect(null, mapDispatchToProps)(MobileSearchInput);
