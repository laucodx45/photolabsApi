import React from 'react';
import { useState, useReducer } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const HomeRoute = (props) => {
  const { photos, topics, modalState, toggleModal, favouritePhotos, toggleFavourite } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritePhotos={favouritePhotos} />
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} toggleModal={toggleModal} favouritePhotos={favouritePhotos} />
      {modalState.state && <PhotoDetailsModal modalState={modalState} toggleFavourite={toggleFavourite} favouritePhotos={favouritePhotos} toggleModal={toggleModal} />}
    </div>
  );
};

export default HomeRoute;
