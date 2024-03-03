import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const SearchBar = (props) => {
  const {dispatch, state} = props;

  return (
    <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input value={state.searchInput} onChange={(e) => { dispatch({type: 'SET_SEARCH_INPUT' , payload: e.target.value}) }} placeholder='type to search...'></input>
    </div>
  )
}

export default SearchBar;