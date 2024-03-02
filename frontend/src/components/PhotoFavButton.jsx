import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {favouritePhotos, dispatch, photoId} = props;

  const isSelected = favouritePhotos.includes(photoId) ? true : false;

  return (
    <div className="photo-list__fav-icon" onClick={() => {handleFavToggle(isSelected, dispatch, photoId)}} >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isSelected}/>
      </div>
    </div>
  );
}

function handleFavToggle (isSelected, dispatch, photoId) {
  return !isSelected 
    ? dispatch({type: 'FAV_PHOTO_ADDED', payload: photoId}) 
    : dispatch({type: 'FAV_PHOTO_REMOVED', payload: photoId})
}

export default PhotoFavButton;