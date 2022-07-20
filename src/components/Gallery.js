import React from "react";

import Image from "./Image";
import Spinner from "./UI/Spinner";
import classes from "./Gallery.module.css";

function Gallery(props) {
  const imageList =
    props.photos.length !== 0 ? (
      props.photos.map(photo => (
        <Image
          key={photo.id}
          src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`}
        />
      ))
    ) : (
      <p className={classes["error-msg"]}>No Images Found</p>
    );

  const gallery = (
    <React.Fragment>
      {props.photos.length !== 0 && (
        <h2>
          {`${props.title[0].toUpperCase()}${props.title.slice(1)}`} Pictures
        </h2>
      )}

      <div className={classes["img-container"]}> {imageList}</div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {props.loading && !props.error && <Spinner />}
      {props.error && <p>Cannot Fetch Images</p>}
      {!props.loading && !props.error && gallery}
    </React.Fragment>
  );
}

export default Gallery;
