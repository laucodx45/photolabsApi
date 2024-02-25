import React from 'react';

import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = (props) => {
  const { toggleModal, modalState } = props;
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => {
        toggleModal({type: 'updateState'})
      }}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img className="photo-details-modal__image" src={modalState.imageSoruce} />
    </div>
  )
};

export default PhotoDetailsModal;
