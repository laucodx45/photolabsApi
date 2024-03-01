import React from 'react';
import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';
import '../styles/TopNavigationBar.scss'

const TopNavigation = (props) => {
  const { topics , favouritePhotos, dispatch, state } = props;
  const isFavPhotoExist = favouritePhotos.length !== 0 ? favouritePhotos : false;

  return (
    <div className="top-nav-bar">
      {/* onClick nav-bar_logo, it brings user back to home page that shows all the photos */}
      <span className="top-nav-bar__logo" onClick={ () => dispatch({ type: 'SELECT_TOPIC', payload: null})}>PhotoLabs</span>
      <TopicList topics={topics} dispatch={dispatch} state={state} />
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigation;