import React from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const {dispatch, state, similarPhotosId} = props;
  const {photoData} = state;

  let photos = [];

  const photoMap = new Map();

  photoData.forEach(photo => {
    photoMap.set(photo.id, photo);
  })

  similarPhotosId ? similarPhotosId.forEach(id => {
    if (photoMap.has(id)) photos.push(photoMap.get(id))
  }) : photos = [...photoData]

  
  const photoItems = photos.map((photo) => {
    return <PhotoListItem similarPhotos ={photo.similar_photos} state={state} dispatch={dispatch} key={photo.id} photoId={photo.id} imageSource={photo.urls.regular} profile={photo.user.profile} username={photo.user.username} location={photo.location}/>
  })

  return (
    <ul className="photo-list">
      {photoItems}
    </ul>
  );
};

export default PhotoList;
