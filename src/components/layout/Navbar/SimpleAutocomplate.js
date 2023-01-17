import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { getAllProducts } from "store/search/search.action";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ".huklGi > .wrapper": {
      borderRadius: 0,
      height: "40px",
      border: "none",
    },
    ".huklGi": {
      [theme.breakpoints.down(900)]: {
        height: 40,
      },
    },
    ".App": {
      width: "100% !important",
      zIndex: 999999,
    },
    ".evwHCa": {
      backgroundColor: "white !important",
      zIndex: 999999,
    },
  },
}));

function SimpleAutocomplate() {
  const classes = useStyles();
  const match = useRouteMatch({ path: "/:language/:city" });
  const Searchdata = useSelector((state) => state.Searchdata);
  const dispatch = useDispatch();
  const [SearchData, setSearchData] = useState("");
  useEffect(() => {
    dispatch(getAllProducts(match.params.language,match.params.city, ""));
  }, []);
  const handleOnSelect = (item) => {
    if (
      window.location.pathname ===
      `/${match.params.language}/${match.params.city}/Search`
    ) {
      window.scroll(0, 550);
    } else {
      window.location = `/${match.params.language}/${match.params.city}/Product/${item.slug}/${item.id}`;
    }
    setSearchData(() => {
      const newstate = item.name;
      dispatch(
        getAllProducts(match.params.language,match.params.city, newstate)
      );
      return newstate;
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: "100%" }}>
          <ReactSearchAutocomplete
            items={Searchdata?.data?.products}
            onSelect={handleOnSelect}
            placeholder="What are you looking for?"
            styling={{}}
          />
        </div>
      </header>
    </div>
  );
}

export default SimpleAutocomplate;
