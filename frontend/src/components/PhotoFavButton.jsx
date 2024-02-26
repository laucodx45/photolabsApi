import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {favouritePhotos, updateToFavPhotoIds, photoId} = props;

  const isSelected = favouritePhotos.includes(photoId) ? true : false;
  return (
    <div className="photo-list__fav-icon" onClick={() => { updateToFavPhotoIds({ payload: photoId})}}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isSelected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;