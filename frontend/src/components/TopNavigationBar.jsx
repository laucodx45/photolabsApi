import React from 'react';

import TopicList from 'components/TopicList';
import FavBadge from 'components/FavBadge';
import '../styles/TopNavigationBar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const TopNavigation = (props) => {
  const {dispatch, state} = props;
  const {favouritePhotos} = state;
  const isFavPhotoExist = favouritePhotos.length !== 0 ? favouritePhotos : false;

  const toogleDarkMode = () => {
    dispatch({type:'SET_DARKMODE'})
  }
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={ () => dispatch({type: 'SELECT_TOPIC', payload: null})}>PhotoLabs</span>
      <TopicList dispatch={dispatch} state={state} />
      <FontAwesomeIcon className="moon" icon={faMoon} onClick={() => {toogleDarkMode()}}/>
      <FavBadge isFavPhotoExist={isFavPhotoExist}/>
    </div>
  )
}

export default TopNavigation;