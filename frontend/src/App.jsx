import React from 'react';

import './App.scss';
import HomeRoute from 'routes/HomeRoute';
import useApplicationData from 'hooks/useApplicationData';
import { applicationContext } from 'hooks/applicationContext';

const App = () => {
  const {state, dispatch} = useApplicationData();
  const contextValue = {state, dispatch}

  return (
    <div className='App' data-theme={!state.darkMode ? '': 'dark'} >
      <applicationContext.Provider value={contextValue}>
        <HomeRoute />
      </applicationContext.Provider>
    </div>
  );
};

export default App;
