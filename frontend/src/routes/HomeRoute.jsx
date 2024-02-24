import React from 'react';
import { useState, useReducer } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import PhotoDetailsModal from "routes/PhotoDetailsModal";

const HomeRoute = (props) => {
    const [isFavorited, setFavouritePhotos] = useState([]);
    
    const toggleFavorited = (photoId) => {
      const index = isFavorited.indexOf(photoId)

      index === -1 && setFavouritePhotos((previousState) => {
        return [...previousState, photoId]
      });

      index > -1 && setFavouritePhotos((previousState) => {
          return previousState.filter(photo => photo !== photoId)
        });
    }

    const modalOnClick = (modalState, action) => {
      return !modalState;
    }

    const [modalState, toggleModal] = useReducer(modalOnClick, false)

  const { photos, topics } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavorited={isFavorited} />
      <PhotoList photos={photos} toggleFavorited={toggleFavorited} toggleModal={toggleModal} isFavorited={isFavorited} />
      {modalState && <PhotoDetailsModal toggleModal={toggleModal} />}
    </div>
  );
};

export default HomeRoute;
