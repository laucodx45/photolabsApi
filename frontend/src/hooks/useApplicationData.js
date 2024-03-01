import { useReducer, useEffect } from "react";
import axios from "axios";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_MODAL: 'CLOSE_MODAL'
}

const initialState = {
  favouritePhotos : [],
  photoInfo : null,
  modalState : null,
  photoData: [],
  topicData: []
}

const useApplicationData = () => {

  const reducer = (state, action) => {
    switch(action.type) {
      case ACTIONS.FAV_PHOTO_ADDED: 
        return {
          ...state, favouritePhotos: [...state.favouritePhotos, action.payload]
        }
      case ACTIONS.FAV_PHOTO_REMOVED:
        return {
          ...state, favouritePhotos: [...state.favouritePhotos.filter(photo => photo !== action.payload)]
        }
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
      default:
        throw new Error (`Tried to reduce with unsupported action type: ${action.type}`);
    }

  }

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get('http://localhost:8001/api/photos')
      .then(res => dispatch({ type: 'SET_PHOTO_DATA', payload: res.data }))
      .catch(err => console.log(`Error: ${err}`))

    axios.get('http://localhost:8001/api/topics')
      .then(res => dispatch({ type: 'SET_TOPIC_DATA', payload: res.data }))
  }, []);

  /**
   * 
   * @param {string} type includes FAV_PHOTO_ADDED, FAV_PHOTO_REMOVED, SELECT_PHOTO, CLOSE_MODAL
   * @param {*} payload photoId, photoInfo {imageSource, profile, location, username, photoId, similarPhotos}
   * @returns 
   */
  // const dispatch = (type, payload) => {
  //   return dispatchTest({ type: type, payload: payload });
  // }

  return { state, dispatch };
}

export default useApplicationData