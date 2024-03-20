import React, { useContext } from "react";

import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";
import { applicationContext } from "hooks/applicationContext";


const PhotoListItem = (props) => {
  const {imageSource, profile, username, location, photoId, similarPhotos} = props;
  const {state, dispatch} = useContext(applicationContext);

  const selectPhotoAction = () => {
    window.scrollTo({
      top: 150,
      left: 0,
      behavior: "smooth"
    })
    
    dispatch({type: 'SELECT_PHOTO', payload: {imageSource, profile, location, username, photoId, similarPhotos}}) 

    if (state.modalState) {
      const modalElement = document.querySelector('.photo-details-modal')
      modalElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }
  
  return (
      <div className="photo-list__item">
        <PhotoFavButton photoId={photoId} />
        <img src={imageSource} alt="picture" className="photo-list__image" onClick={selectPhotoAction}/>
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
