import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const {imageSource, profile, username, location} = props.data;

  return (
    <div className="photo-list__item">
      <img src={imageSource} alt="picture" className="photo-list__image"/>

      <div className="photo-list__user-details">
        <img src={profile} alt="profile picture" className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <p>{username}</p>
          <p>{location.city}, <span className="photo-list__user-location">{location.country}</span></p>
        </div>
      </div>

    </div>
  );
};

export default PhotoListItem;
