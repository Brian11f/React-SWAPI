import React from 'react';
import { connect } from 'react-redux';

const StarshipList = ({ starships }) =>
  <div id="starship-list" className="row">
    <ul>
      {starships.map(c =>
        <li
          key={c.name}
        >
          {c.name}
        </li>
      )}
    </ul>
  </div>;

const mapStateToProps = ({ starships }) => ({
  starships
});

export default connect(mapStateToProps)(StarshipList);
