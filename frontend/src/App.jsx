import React from 'react';
import { useReducer, useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
// Note: Rendering a single component to build components in isolation


const App = () => {

  const modalOnClick = (modalState, action) => {
    switch(action.type) {
      case 'updateStateAndImg' : 
        return { 
          state : !modalState.state,
          photoInfo : action.payload
        }
      case 'updateState' :
        return { 
          state : !modalState.state,
          photoInfo : null
        }
    }
  }

  const [modalState, toggleModal] = useReducer(modalOnClick, {
    state: false,
    photoInfo: null
  })

  

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

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} modalState={modalState} toggleModal={toggleModal} isFavourite={isFavourite} toggleFavourite={toggleFavourite} />
    </div>
  );
};

export default App;
