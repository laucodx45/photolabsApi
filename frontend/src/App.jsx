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
    <div className="App">
      <HomeRoute photos={state.photoData} topics={state.topicData} dispatch={dispatch} state={state} />
    </div>
  );
};

export default App;
