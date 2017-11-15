import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const listContainer = {
  margin: '1.500em auto auto auto'
}

const listStyle = {
  listStyle: 'none',
  margin: 'auto'
}

const liStyle = {
  margin: '0',
  padding: '0'
}

const contentStyle = {
  height: '10.000em',
  margin: '5px',
  padding: '0.8em',
  border: '1px solid #000'
}

const StarshipList = ({ starships }) =>
  <div id="starship-list" className="small-10 column row" style={listContainer}>
    <ul className="text-center" style={listStyle}>
      {starships.map(s =>
        <li
          className="small-12 medium-4 large-3 column"
          style={liStyle}
          key={s.name}
        >
          <div style={contentStyle}>
            <h5>{s.name}</h5>
            <p>{s.model}</p>
          </div>
        </li>
      )}
    </ul>
  </div>;

const mapStateToProps = ({ starships }) => ({
  starships
});

// typechecking
StarshipList.propTypes = {
  starships: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(StarshipList);
