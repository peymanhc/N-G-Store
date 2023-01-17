import { Box, makeStyles } from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  figure: {
    width: "65%",
    backgroundSize: "180%",
    cursor: "zoom-in",
  },
  img: {
    display: "block",
    width: "100%",
    height: 500,
    objectFit: "cover",
  },
}));

const MagenifyImg = (props) => {
  const classes = useStyles();
  const src = props.image;
  const [backgroundPosition, setbackgroundPosition] = useState("0% 0%");

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setbackgroundPosition(`${x}% ${y}%`);
  };

  return (
    <figure
      className={classes.figure}
      onMouseMove={(e) => handleMouseMove(e)}
      style={{
        backgroundImage: `url(${src})`,
        backgroundPosition: backgroundPosition,
      }}
    >
      <img className={classes.img} src={src} />
    </figure>
  );
};

export default MagenifyImg;
