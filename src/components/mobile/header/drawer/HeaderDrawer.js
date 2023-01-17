import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";

import SideBarHeader from "./SideBarHeader";
import SideBarBody from "./SideBarBody";
import SideBarFooter from "./SideBarFooter";

const useStyles = makeStyles({
  list: {
    width: 312,
    backgroundColor: " #f5f5f5",
  },
  fullList: {
    width: "auto",
  },
});

const HeaderDrawer = ({toggleDrawer}) => {
  const classes = useStyles();
  
  return (
    <div
      className={classNames(classes.list,"md:hidden")}
      role="presentation"
      onKeyDown={toggleDrawer}
    >
      <SideBarHeader close={toggleDrawer} />
      <SideBarBody />
      <SideBarFooter />
    </div>
  );
};
export default HeaderDrawer;
