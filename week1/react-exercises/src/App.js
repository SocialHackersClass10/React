import React from 'react';
import HobbyList from './components/HobbyList'

function App() {

  const hobbies = ["Surfing", "Rock climbing", "Mountain biking", "Breakdancing"]; 

  return (
    <div>
      <HobbyList hobbyList={hobbies}/>
    </div>
  );
}

export default App;
