import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
const PhotoListItem = (props) => {

  const {imageSource, profile, username, location, toggleFavourite, favouritePhotos, photoId, toggleModal, similarPhotos} = props;
  
  return (

      <div className="photo-list__item">
        <PhotoFavButton  toggleFavourite={toggleFavourite} favouritePhotos={favouritePhotos} photoId={photoId} />
        <img src={imageSource} alt="picture" className="photo-list__image" onClick={ 
          () => {
            toggleModal({type: 'updateStateAndImg', payload: {imageSource, profile, location, username, photoId, similarPhotos}})
          }
        }/>
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
