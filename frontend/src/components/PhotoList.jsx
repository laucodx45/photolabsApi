import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {photos, favouritePhotos, dispatch, state, similarPhotosId} = props;

  let photosData = [];

  const photoMap = new Map();

  photos.forEach(photo => {
    photoMap.set(photo.id, photo);
  })

  similarPhotosId ? similarPhotosId.forEach(id => {
    if (photoMap.has(id)) photosData.push(photoMap.get(id))
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
