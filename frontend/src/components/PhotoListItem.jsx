import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {

  const {imageSource, profile, username, location, useFavToggle, photoId} = props;
  
  return (

      <div className="photo-list__item">
        <PhotoFavButton  useFavToggle={useFavToggle} photoId={photoId} />
        <img src={imageSource} alt="picture" className="photo-list__image"/>
        <div className="photo-list__user-details">
          <img src={profile} alt="profile picture" className="photo-list__user-profile" />
          <div className="photo-list__user-info">
            <p>{username}</p>
            <div>
              {location.city}, <span className="photo-list__user-location">{location.country}</span>
            </div>
          </div>
        </div>
      </div>

  )
  
};

export default PhotoListItem;
