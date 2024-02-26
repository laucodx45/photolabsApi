import { useReducer } from "react";

const useApplicationData = () => {
  const modalOnClick = (modalState, action) => {
    switch(action.type) {
      case 'updateStateAndImg' : 
        return { 
          ...modalState,
          state : !modalState.state,
          photoInfo : action.payload
        }
      case 'updateState' :
        return { 
          ...modalState,
          state : !modalState.state,
          photoInfo : null
        }
      default :
        return modalState;
    }
  }
  
  const [modalState, setPhotoSelected] = useReducer(modalOnClick, {
    state: false,
    photoInfo: null
  })
  
  const onClosePhotoDetailsModal = () => {
    setPhotoSelected({type: 'updateState'})
  }

  const favoritePhotosReducer = (favouritePhotos, action) => {
    const photoId = action.payload;
    const hasPhotoId = favouritePhotos.includes(photoId)
    
    return !hasPhotoId
      ? [...favouritePhotos, photoId]
      : [...favouritePhotos].filter(photo => photo !== photoId);
  } 

  const [favouritePhotos, updateToFavPhotoIds] = useReducer(favoritePhotosReducer, []);

  const state = {modalState, favouritePhotos};

  return { state, setPhotoSelected, updateToFavPhotoIds, onClosePhotoDetailsModal };
}

export default useApplicationData