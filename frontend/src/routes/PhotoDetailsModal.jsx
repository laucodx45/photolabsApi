import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoFavButton from 'components/PhotoFavButton';
import PhotoList from 'components/PhotoList';

const PhotoDetailsModal = (props) => {
  const { toggleModal, modalState, toggleFavorited, isFavorited } = props;
  const { imageSource, profile, location, username, photoId, similarPhotos } = modalState.photoInfo;

  return (
    <div className="photo-details-modal">

      <button className="photo-details-modal__close-button" onClick={() => {
        toggleModal({type: 'updateState'})
      }}>
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <div className="photo-details-modal__images">
        <PhotoFavButton toggleFavorited={toggleFavorited} isFavorited={isFavorited} photoId={photoId}/>
        <img className="photo-details-modal__image" src={imageSource} />
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
          <PhotoList photos={similarPhotos} toggleFavorited={toggleFavorited} toggleModal={toggleModal} isFavorited={isFavorited}/>
        </div>
      </div>
    </div>
  )
};

export default PhotoDetailsModal;
