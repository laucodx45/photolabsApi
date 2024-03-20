import React, { useContext } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
import { applicationContext } from 'hooks/applicationContext';

function PhotoFavButton(props) {
  const {photoId} = props;
  const {dispatch, state} = useContext(applicationContext);
  const favouritePhotos = state.favouritePhotos;

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