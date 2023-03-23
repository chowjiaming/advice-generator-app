import {useReducer, useEffect, useCallback} from 'react';
import {FetchAction, AppState} from './types';
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

export default function useFetchAdvice(): AppState & {
  fetchNewAdvice: () => void;
} {
  const [state, dispatch] = useReducer(reducer, {
    advice: null,
    isLoading: true,
  });

  const fetchNewAdvice = useCallback(async (signal: AbortSignal) => {
    dispatch({type: ACTIONS.MAKE_REQUEST});
    try {
      const res = await fetch(API_URL, {signal});
      const data = await res.json();
      dispatch({
        type: ACTIONS.GET_DATA,
        payload: {data},
      });
    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') return;
      dispatch({type: ACTIONS.ERROR, payload: {error: error as Error}});
    }
  }, []);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    fetchNewAdvice(signal);

    return () => {
      abortController.abort();
    };
  }, [fetchNewAdvice]);

  return {
    ...state,
    fetchNewAdvice: () => fetchNewAdvice(new AbortController().signal),
  };
}
