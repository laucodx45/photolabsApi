import React from 'react';
import { useReducer, useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import photos from 'mocks/photos';
import topics from 'mocks/topics';
// Note: Rendering a single component to build components in isolation


const App = () => {

  const modalOnClick = (modalState, action) => {
    return !modalState;
  }

  const [modalState, toggleModal] = useReducer(modalOnClick, false)

  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} modalState={modalState} toggleModal={toggleModal} />
    </div>
  );
};

export default App;
