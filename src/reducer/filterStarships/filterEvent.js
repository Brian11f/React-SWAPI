import { FILTER_EVENT } from './actions';

const initialState = '';

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_EVENT:
      return action.filterStr;
    default:
      return state;
  }
};
