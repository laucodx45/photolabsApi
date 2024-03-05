import React from "react";

import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {imageSource, profile, username, location, favouritePhotos, photoId, dispatch, similarPhotos, state} = props;

  const selectPhotoAction = () => {
    // if modal is not open
    if (!state.modalState) {
      dispatch({type: 'SELECT_PHOTO', payload: {imageSource, profile, location, username, photoId, similarPhotos}}) 
    }
    // if modal is already open, we don't want to allow user to select photodetails
  }
  
  return (
      <div className="photo-list__item">
        <PhotoFavButton  dispatch={dispatch} favouritePhotos={favouritePhotos} photoId={photoId} />
        <img src={imageSource} alt="picture" className="photo-list__image" onClick={() => {selectPhotoAction()}}/>
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
