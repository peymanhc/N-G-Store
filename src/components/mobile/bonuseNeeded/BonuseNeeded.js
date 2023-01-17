import {
  ListItem,
  ListItemIcon,
  Typography,
} from "@material-ui/core";
import React from "react";

const BonuseNeeded = ({ icon, text,key }) => {
  return (
    <ListItem key={key} style={{ padding: "6px 0" }}>
      <ListItemIcon style={{ minWidth: 40 }}>{icon}</ListItemIcon>
      <Typography
        style={{ fontWeight: "300 !important", lineHeight: 1.5 }}
        variant="inherit"
      >
        {text}
      </Typography>
    </ListItem>
  );
};

export default BonuseNeeded;
