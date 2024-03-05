import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {photos, favouritePhotos, dispatch, state, similarPhotosId} = props;
  
  let photosData = [];
  
  similarPhotosId ? similarPhotosId.forEach(id => {
    photos.forEach((photo) => {
      if (photo.id === id) photosData.push(photo)
    })
  }) : photosData = [...photos]

  
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
