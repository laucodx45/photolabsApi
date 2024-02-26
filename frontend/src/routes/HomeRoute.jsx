import React from 'react';
import { useState, useReducer } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const HomeRoute = (props) => {
  const { photos, topics, modalState, setPhotoSelected, favouritePhotos, updateToFavPhotoIds, onClosePhotoDetailsModal } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritePhotos={favouritePhotos} />
      <PhotoList photos={photos} updateToFavPhotoIds={updateToFavPhotoIds} setPhotoSelected={setPhotoSelected} favouritePhotos={favouritePhotos} />
      {modalState.state && <PhotoDetailsModal modalState={modalState} updateToFavPhotoIds={updateToFavPhotoIds} favouritePhotos={favouritePhotos} setPhotoSelected={setPhotoSelected} onClosePhotoDetailsModal={onClosePhotoDetailsModal} />}
    </div>
  );
};

export default HomeRoute;
