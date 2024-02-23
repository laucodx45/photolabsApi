import React from 'react';

import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigation from 'components/TopNavigationBar';

const HomeRoute = (props) => {

  const { photos, topics } = props;

  return (
    <div className="home-route">
      <TopNavigation topics={topics}/>
      <PhotoList photos={photos}/>
    </div>
  );
};

export default HomeRoute;
