import React from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import '../styles/HomeRoute.scss';

const HomeRoute = (props) => {
  const {dispatch, state} = props;

  return (
    <div className="home-route">
      <TopNavigation dispatch={dispatch} state={state} />
      <PhotoList dispatch={dispatch}  state={state} />
      {state.modalState && <PhotoDetailsModal state={state} dispatch={dispatch} />}
    </div>
  );
};

export default HomeRoute;
