import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFilterEventStr } from '../reducer/filterStarships/actions';
import { IMG_URL } from '../const';

const headerStyle = {
  backgroundImage: `url(${IMG_URL.backgroundImage})`,
  backgroundSize: 'cover'
};

const inputContainer = {
  margin: 'auto'
}

const inputStyle = {
  marginBottom: '-1.250em'
}

const FilterStarshipsList = ({ setFilterStr }) =>
  <header style={headerStyle}>
    <h1 className="small-10 columns row">Starships</h1>
    <p className="small-10 columns row">Find your favorite starships!<br/>
      Roger rogue leader!
    </p>
    <div id="filter-starships" className="small-10 columns row" style={inputContainer}>
      <input
        type="text"
        name="search"
        placeholder="Find your starship"
        onChange={e => setFilterStr(e.target.value)}
        style={inputStyle}
      />
    </div>
  </header>;

const mapStateToProps = ({ setFilterStr }) => ({
  setFilterStr
});

// typechecking
FilterStarshipsList.propTypes = {
  setFilterStr: PropTypes.string,
}

// shorthand mapDispatchToProps
export default connect(mapStateToProps, { setFilterStr: setFilterEventStr })(FilterStarshipsList);
