import React from 'react';
import { useState } from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

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

    



  const { photos, topics } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} isFavorited={isFavorited} />
      <PhotoList photos={photos} toggleFavorited={toggleFavorited} isFavorited={isFavorited} />
    </div>
  );
};

export default HomeRoute;
