import React from 'react';
import StarshipList from './StarshipList.jsx';

const App = () =>
  <div className='container row'>
    <h1 className="small-12 column">Starships</h1>
    <input className="small-8 column" type="text" name="search" id="search" placeholder="Find your starship" required />
    <StarshipList />
  </div>;

export default App;
