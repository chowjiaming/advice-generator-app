import {useReducer, useEffect} from 'react';
import {type FetchAction, type AppState} from './types';
import {API_URL} from './constants';

const ACTIONS = {
  MAKE_REQUEST: 'make-request',
  GET_DATA: 'get-data',
  ERROR: 'error',
};

function reducer(state: AppState, action: FetchAction): AppState {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return {isLoading: true, advice: null};
    case ACTIONS.GET_DATA:
      return {isLoading: false, advice: action.payload?.data || null};
    case ACTIONS.ERROR:
      return {
        isLoading: false,
        error: action.payload?.error,
        advice: null,
      };
    default:
      return state;
  }
}

export function useFetchAdvice(): AppState & {
  fetchNewAdvice: () => void;
} {
  const [state, dispatch] = useReducer(reducer, {
    advice: null,
    isLoading: true,
  });

  function fetchNewAdvice() {
    const abortController = new AbortController();
    const signal = abortController.signal;

    dispatch({type: ACTIONS.MAKE_REQUEST});
    fetch(API_URL, {signal})
      .then((res) => res.json())
      .then((data) => {
        dispatch({type: ACTIONS.GET_DATA, payload: {data}});
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          dispatch({type: ACTIONS.ERROR, payload: {error}});
        }
      });

    return () => abortController.abort();
  }

  useEffect(() => {
    const cleanup = fetchNewAdvice();
    return () => cleanup();
  }, []);

  return {...state, fetchNewAdvice};
}
