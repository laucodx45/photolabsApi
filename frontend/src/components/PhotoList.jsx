import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {photos, favouritePhotos, dispatch, state} = props;

  // if photoData is not an array
  // user is in modal view, render similar photos
  let photosData = []
  if (Array.isArray(photos)) {
    photosData = [...photos]
  } else {
    photosData = Object.values(photos)
  }

  const photoItems = photosData.map((photo) => {
    return <PhotoListItem similarPhotos ={photo.similar_photos} state={state} dispatch={dispatch} favouritePhotos={favouritePhotos} key={photo.id} photoId={photo.id} imageSource={photo.urls.regular} profile={photo.user.profile} username={photo.user.username} location={photo.location}/>
  })

  return (
    <ul className="photo-list">
      {photoItems}
    </ul>
  );
};

export default PhotoList;
