import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import fetch from 'isomorphic-fetch';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

let initialState = {
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return Object.assign({}, {data: action.payload}, state);
        case 'FETCH_SIMLE_SUCCESS':
            return Object.assign({}, {simpleData: action.payload}, state);
        default:
            return state;
    }
}

export function fetchData(user) {

    return (dispatch) => {

        return fetch(`https://api.github.com/users/${user}`)
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'FETCH_SUCCESS', payload: data })
            })
    }
}


export function fetchSimpleData(data) {
    return { type: 'FETCH_SIMLE_SUCCESS', payload: data };
}

export default store;