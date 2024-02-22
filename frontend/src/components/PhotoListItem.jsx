import React from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {

  const {imageSource, profile, username, location} = props.data;
  const photos = new Array(3).fill({imageSource, profile, username, location});

  const photoLists = photos.map((photo, index) => {
    return (
      <div key={index} className="photo-list__item">
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
    );
  })
  
  return (
    <div className="photo-list">
      {photoLists}
    </div>
  )
  
};

export default PhotoListItem;
