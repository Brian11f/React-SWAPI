import { API_URL } from '../../const';

export const SET_STARSHIPS = 'SET_STARSHIPS';

export function getStarShips() {
  return dispatch =>
    fetch(`${API_URL.starships}`)
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
