import React from 'react';
import StarshipList from './StarshipList.jsx';
import FilterStarshipsList from './FilterStarshipsList.jsx';

const App = () =>
  <div className='container'>
    <FilterStarshipsList />
    <StarshipList />
    <footer>
      <p className="text-center small-12 column row">May the force be with you...</p>
    </footer>
  </div>;

export default App;
