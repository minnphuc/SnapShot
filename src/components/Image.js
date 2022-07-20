import React from "react";

import classes from "./Image.module.css";

function Image(props) {
  return (
    <div className={classes.img}>
      <img src={props.src} alt="img" />
    </div>
  );
}
export default Image;
