import React from 'react';
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {

  const {topics , favouritePhotos, dispatch} = props;

  const isFavPhotoExist = favouritePhotos.length !== 0 ? favouritePhotos : false;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={ () => dispatch({ type: 'SELECT_TOPIC', payload: null})}>PhotoLabs</span>
      <TopicList topics={topics} dispatch={dispatch} />
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigation;