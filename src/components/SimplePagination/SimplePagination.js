import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ".MuiPaginationItem-page.Mui-selected": {
      backgroundColor: "#d90552",
      color: "white",
      "&:hover": {
        backgroundColor: "#d90552",
      },
    },
  },
}));

function SimplePagination(props) {
   // eslint-disable-next-line
  const classes = useStyles();
  return (
    <Pagination
      count={props.count}
      page={props.page}
      onChange={props.handleChange}
      variant="outlined"
      shape="rounded"
    />
  );
}
export default SimplePagination;
