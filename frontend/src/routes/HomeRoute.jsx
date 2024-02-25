import React from 'react';
import { useState, useReducer } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const HomeRoute = (props) => {
  const { photos, topics, modalState, toggleModal, isFavourite, toggleFavourite } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavourite={isFavourite} />
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} toggleModal={toggleModal} isFavourite={isFavourite} />
      {modalState.state && <PhotoDetailsModal modalState={modalState} toggleFavourite={toggleFavourite} isFavourite={isFavourite} toggleModal={toggleModal} />}
    </div>
  );
};

export default HomeRoute;
