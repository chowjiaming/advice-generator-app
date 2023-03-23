import { useReducer, useEffect } from "react";
const URL = "https://api.adviceslip.com/advice"

const ACTIONS = {
    MAKE_REQUEST: "make-request",
    GET_DATA: "get-data",
    ERROR: "error",
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.MAKE_REQUEST:
            return { isLoading: true, advice: {} };
        case ACTIONS.GET_DATA:
            return { isLoading: false, advice: action.payload };
        case ACTIONS.ERROR:
            return {
                isLoading: false,
                error: action.payload.error,
                advice: {},
            };
        default:
            return state;
    }
}

export default function useFetchWeather(counter) {
    const [state, dispatch] = useReducer(reducer, {
        advice: {},
        isLoading: true,
    });

    useEffect(() => {
        const fetchNewAdvice = () => {
            dispatch({ type: ACTIONS.MAKE_REQUEST });
            fetch(URL)
                .then((res) => res.json())
                .then((data) => {
                    dispatch({
                        type: ACTIONS.GET_DATA,
                        payload: data,
                    });
                })
                .catch((error) => {
                    dispatch({ type: ACTIONS.ERROR, payload: { error } });
                });
        };
        fetchNewAdvice();

    }, [counter]);
    return state;
}
