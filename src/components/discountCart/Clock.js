import { Box, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    padding: "6px",
    margin: 2,
    color: "black",
    borderRadius: 5,
    fontSize: 13,
    fontWeight: 700,
  },
}));

const Clock = (props) => {
  const [days, setdays] = useState(0);
  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(0);
  const classes = useStyles();
  const getTimeUntil = (deadline) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) {
      setdays(0);
      sethours(0);
      setminutes(0);
      setseconds(0);
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      setdays(days);
      sethours(hours);
      setminutes(minutes);
      setseconds(seconds);
    }
  };
  const leading0 = (num) => {
    return num < 10 ? "0" + num : num;
  };
  useEffect(() => {
    setInterval(() => getTimeUntil(props.deadline), 1000);
    return () => {
      getTimeUntil(props.deadline);
    };
  }, []);
  return (
    <Box display="flex">
      <Box display="flex" alignItems="center">
        <div className={classes.root}>{leading0(days)}</div>
        <span>:</span>
      </Box>
      <Box display="flex" alignItems="center">
        <div className={classes.root}>{leading0(hours)}</div>
        <span>:</span>
      </Box>
      <Box display="flex" alignItems="center">
        <div className={classes.root}>{leading0(minutes)}</div>
        <span>:</span>
      </Box>
      <Box display="flex" alignItems="center">
        <div className={classes.root}>{leading0(seconds)}</div>
      </Box>
    </Box>
  );
};

export default Clock;
