import { useReducer } from "react";
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
  modalState : null
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
      default:
        throw new Error (`Tried to reduce with unsupported action type: ${action.type}`);
    }

  }

  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
}

export default useApplicationData