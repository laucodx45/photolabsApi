import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const sampleDataForPhotoListItem = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const photos = Array(3).fill(undefined)

const photoListItems = photos.map((photo, i) => {
  return <PhotoListItem key={i} data={sampleDataForPhotoListItem}/>
})

const App = () => {
  return (
    <div className="App">
      {photoListItems}
    </div>
  );
};

export default App;
