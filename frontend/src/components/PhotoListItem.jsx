import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const {imageSource, profile, username, location} = props.data;

  return (
    <div>
      <img src={imageSource} alt="picture" />
      <img src={profile} alt="profile picture" />
      <p>{username}</p>
      <p>{location.city}, {location.country}</p>
    </div>
  );
};

export default PhotoListItem;
