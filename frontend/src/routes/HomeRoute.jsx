import React from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const { photos, topics, dispatch, state } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics} favouritePhotos={state.favouritePhotos} dispatch={dispatch} state={state} />
      <PhotoList photos={photos} dispatch={dispatch} favouritePhotos={state.favouritePhotos} />
      {state.modalState && <PhotoDetailsModal state={state} dispatch={dispatch} />}
    </div>
  );
};

export default HomeRoute;
