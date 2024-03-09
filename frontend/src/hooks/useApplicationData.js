import { useReducer, useEffect } from "react";
import axios from "axios";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  SELECT_TOPIC: 'SELECT_TOPIC',
  CLOSE_MODAL: 'CLOSE_MODAL',
  SET_DARKMODE: 'SET_DARKMODE'
}

const API_URL = 'http://localhost:8001/api';

const initialState = {
  favouritePhotos : [],
  photoInfo : null,
  modalState : false,
  photoData: [],
  topicData: [],
  topicId: null,
  darkMode: false
}

const useApplicationData = () => {

  const reducer = (state, action) => {
    switch(action.type) {
      // FAV_PHOTO_ADDED is used when user click fav/like button, it adds the clicked photo's Id into favouritePhotos array
      case ACTIONS.FAV_PHOTO_ADDED: 
        return {
          ...state, 
          favouritePhotos: [...state.favouritePhotos, action.payload]
        }
      // Removes photoId from favouritePhotos when user unlike the photo
      case ACTIONS.FAV_PHOTO_REMOVED:
        return {
          ...state, 
          // filters out the photoId that user unliked
          favouritePhotos: [...state.favouritePhotos.filter(photo => photo !== action.payload)]
        }
      /* 
      SELECT_PHOTO set modalState to true
      The payload contains photodata that PhotoDetailsModal component needs
      photoInfo state contains data that the modal requires
      */
      case ACTIONS.SELECT_PHOTO: 
        return {
          ...state, 
          modalState : true,
          photoInfo : action.payload
        }
      case ACTIONS.CLOSE_MODAL:
        return {
          ...state,
          modalState : false,
          photoInfo : null
        }
      case ACTIONS.SET_PHOTO_DATA:
        return {
          ...state,
          photoData: action.payload
        }
      case ACTIONS.SET_TOPIC_DATA:
        return {
          ...state,
          topicData: action.payload
        }
      // SELECT TOPIC is used when user click on a topic in nav bar. It sets the current topicId
      case ACTIONS.SELECT_TOPIC:
        return {
          ...state,
          topicId: action.payload
        }
      case ACTIONS.SET_DARKMODE:
        return {
          ...state,
          darkMode: !state.darkMode
        }
      
      default:
        throw new Error (`Tried to reduce with unsupported action type: ${action.type}`);
    }

  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getPhotos = axios.get(`${API_URL}/photos`);
    const getTopics = axios.get(`${API_URL}/topics`);

    Promise.all([getTopics, getPhotos])
      .then(([topics, photos]) => {
        dispatch({ type: 'SET_TOPIC_DATA', payload: topics.data });
        dispatch({ type: 'SET_PHOTO_DATA', payload: photos.data });
      })
      .catch(err => console.log(`Error: ${err}`));
  }, []);

  useEffect(() => {
    // if topicId state is null, user is on homepage, no photofiltering required
    if (state.topicId !== null) {
      axios.get(`${API_URL}/topics/photos/${state.topicId}`)
        .then(res => dispatch( {type: 'SET_PHOTO_DATA', payload: res.data}))
        .catch(err => console.log(`Error: ${err}`))
    } else {
      // A topic has been selected, payload contains filterPhotos that contain the selected topic
      axios.get(`${API_URL}/photos`)
      .then(res => dispatch({ type: 'SET_PHOTO_DATA', payload: res.data }))
      .catch(err => console.log(`Error: ${err}`))
    }
  }, [state.topicId])

  return {state, dispatch};
}

export default useApplicationData