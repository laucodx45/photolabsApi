import React, { useCallback, useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const {isFavorited, toggleFavorited, photoId} = props;

  const isSelected = isFavorited.includes(photoId) ? true : false;
  return (
    <div className="photo-list__fav-icon" onClick={() => { toggleFavorited(photoId)}}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isSelected}/>
      </div>
    </div>
  );
}

export default PhotoFavButton;