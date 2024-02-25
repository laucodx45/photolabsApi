import React from 'react';
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {

  const {topics , favouritePhotos} = props;

  const isFavPhotoExist = favouritePhotos.length !== 0 ? favouritePhotos : false;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigation;