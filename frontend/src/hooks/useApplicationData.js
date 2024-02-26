import { useState, useReducer } from "react";

/*
The state object will contain the entire state of the application.
The updateToFavPhotoIds action can be used to set the favourite photos
The setPhotoSelected action can be used when the user selects a photo.
The onClosePhotoDetailsModal action can be used to close the modal.
 */

const useApplicationData = () => {
  const modalOnClick = (modalState, action) => {
    switch(action.type) {
      case 'updateStateAndImg' : 
        return { 
          state : !modalState.state,
          photoInfo : action.payload
        }
      case 'updateState' :
        return { 
          state : !modalState.state,
          photoInfo : null
        }
      default :
        return modalState;
    }
  }
  
  // setPhotoSelected, setPhotoSelected
  const [modalState, setPhotoSelected] = useReducer(modalOnClick, {
    state: false,
    photoInfo: null
  })
  
  const onClosePhotoDetailsModal = () => {
    setPhotoSelected({type: 'updateState'})
  }
  
  
  const [favouritePhotos, setFavouritePhotos] = useState([]);
  
  // updateToFavPhotoIds
  const updateToFavPhotoIds = (photoId) => {
    const index = favouritePhotos.indexOf(photoId)
  
    index === -1 && setFavouritePhotos((previousState) => {
      return [...previousState, photoId]
    });
  
    index > -1 && setFavouritePhotos((previousState) => {
        return previousState.filter(photo => photo !== photoId)
      });
  }

  const state = {modalState, favouritePhotos};

  return { state, setPhotoSelected, updateToFavPhotoIds, onClosePhotoDetailsModal };
}

export default useApplicationData