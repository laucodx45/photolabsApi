import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {isFavourite, toggleFavourite, photoId} = props;

  const isSelected = isFavourite.includes(photoId) ? true : false;
  return (
    <div className="photo-list__fav-icon" onClick={() => { toggleFavourite(photoId)}}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isSelected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;