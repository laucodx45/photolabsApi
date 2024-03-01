import React from 'react';
import { useReducer, useState } from 'react';
import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';
// Note: Rendering a single component to build components in isolation


const App = () => {
  const {
    state,
    dispatch
  } = useApplicationData();

  // const { favouritePhotos, modalState } = state;

  return (
    <div className="App">
      <HomeRoute photos={state.photoData} topics={state.topicData} dispatch={dispatch} state={state} />
    </div>
  );
};

export default App;
