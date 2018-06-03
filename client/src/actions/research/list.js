import fetch from '../../utils/fetch';

export function error(error) {
  return {type: 'RESEARCH_LIST_ERROR', error};
}

export function loading(loading) {
  return {type: 'RESEARCH_LIST_LOADING', loading};
}

export function success(data) {
  return {type: 'RESEARCH_LIST_SUCCESS', data};
}

export function list(page = '/researches') {
  return (dispatch) => {
    dispatch(loading(true));
    dispatch(error(''));

    fetch(page)
      .then(response => response.json())
      .then(data => {
        dispatch(loading(false));
        dispatch(success(data));
      })
      .catch(e => {
        dispatch(loading(false));
        dispatch(error(e.message))
      });
  };
}

export function reset() {
  return {type: 'RESEARCH_LIST_RESET'};
}
