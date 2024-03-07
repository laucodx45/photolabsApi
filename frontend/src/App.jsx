import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';

const App = () => {
  const {
    state,
    dispatch
  } = useApplicationData();

  return (
    <div className='App' data-theme={!state.darkMode ? '': 'dark'} >
      <HomeRoute dispatch={dispatch} state={state} />
    </div>
  );
};

export default App;
