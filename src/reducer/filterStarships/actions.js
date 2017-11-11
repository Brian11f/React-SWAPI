import { API_URL } from '../../const';
export const FILTER_EVENT = 'FILTER_EVENT';
export const SET_STARSHIPS = 'SET_STARSHIPS';

export function setFilterEventStr(filterStr) {
  return dispatch =>
    fetch(`${API_URL.starships}?search=${filterStr}`)
      .then(res => res.json())
      .then(res => res.results)
      .then(starships =>
        dispatch(setStarShips(starships))
      );
}

export function setStarShips(starships) {
  return {
    type: SET_STARSHIPS,
    starships,
  };
}
