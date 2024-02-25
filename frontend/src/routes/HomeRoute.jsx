import React from 'react';
import { useState, useReducer } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const HomeRoute = (props) => {

  const { modalState, toggleModal } = props;

  const [isFavourite, setFavouritePhotos] = useState([]);
  
  const toggleFavourite = (photoId) => {
    const index = isFavourite.indexOf(photoId)

    index === -1 && setFavouritePhotos((previousState) => {
      return [...previousState, photoId]
    });

    index > -1 && setFavouritePhotos((previousState) => {
        return previousState.filter(photo => photo !== photoId)
      });
  }

    

  const { photos, topics } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavourite={isFavourite} />
      <PhotoList photos={photos} toggleFavourite={toggleFavourite} toggleModal={toggleModal} isFavourite={isFavourite} />
      {modalState.state && <PhotoDetailsModal modalState={modalState} toggleFavourite={toggleFavourite} isFavourite={isFavourite} toggleModal={toggleModal} />}
    </div>
  );
};

export default HomeRoute;
