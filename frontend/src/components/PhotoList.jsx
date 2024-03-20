import React, {useContext} from "react";

import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";
import { applicationContext } from "hooks/applicationContext";

const PhotoList = (props) => {
  const {similarPhotosId} = props;
  const {state} = useContext(applicationContext);
  const {photoData} = state;

  let photos = [];

  const photoMap = new Map();

  // create a hashmap with key of id and value of the whole photo object
  photoData.forEach(photo => {
    photoMap.set(photo.id, photo);
  })

  // if similarPhotosId exist it means the application is in modal mode
      // iterate similarPhotosId to and check if the id matches the id in photoMap, if it matches pushes the photoMap data
      // to photos array
  // if similarPhotosId does not exist, app is in non modal mode, just render photoData from state normally

  similarPhotosId ? similarPhotosId.forEach(id => {
    if (photoMap.has(id)) photos.push(photoMap.get(id))
  }) : photos = [...photoData]

  const photoItems = photos.map((photo) => {
    return (
      <PhotoListItem 
        similarPhotos={photo.similar_photos} 
        key={photo.id} 
        photoId={photo.id} 
        imageSource={photo.urls.regular} 
        profile={photo.user.profile} 
        username={photo.user.username} 
        location={photo.location}
      />
    )
  })

  return (
    <ul className="photo-list">
      {photoItems}
    </ul>
  );
};

export default PhotoList;
