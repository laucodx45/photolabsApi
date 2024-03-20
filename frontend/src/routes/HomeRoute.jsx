import React, { useContext } from 'react';

import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import '../styles/HomeRoute.scss';
import { applicationContext } from 'hooks/applicationContext';

const HomeRoute = () => {
  const {state} = useContext(applicationContext);
  const modalState = state.modalState;

  return (
    <div className="home-route">
      <TopNavigation />
      <PhotoList />
      {modalState && <PhotoDetailsModal />}
    </div>
  );
};

export default HomeRoute;
