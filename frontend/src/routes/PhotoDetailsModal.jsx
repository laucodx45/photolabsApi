import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { state, dispatch } = props;
  const { photoInfo, favouritePhotos } = state;
  const { imageSource, profile, location, username, photoId, similarPhotos } = photoInfo;

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => {dispatch({ type: 'CLOSE_MODAL'})}}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton dispatch={dispatch} favouritePhotos={favouritePhotos} photoId={photoId}/>
        <img className="photo-details-modal__image" src={imageSource} alt='selected image' />
        <div className="photo-details-modal__photographer-details">
          <img className="photo-details-modal__photographer-profile" src={profile} alt="profile picture" />
          <div className='photo-details-modal__photographer-info'>
            <p>{username}</p>
            <p className="photo-details-modal__photographer-location">
              {location.city}, {location.country}
            </p>
          </div>
        </div>
        <p className='photo-details-modal__header'>Similar Photos</p>
        <div className="photo-details-modal__images">
          <PhotoList photos={similarPhotos} dispatch={dispatch} state={state} favouritePhotos={favouritePhotos} />
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
