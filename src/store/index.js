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
    return action.payload;
}

export function fetchData(store) {
    console.log("fetchData");
    return async (dispatch) => {

        await fetch('https://api.github.com/users/nithinpeter')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                dispatch({ type: 'FETCH_SUCCESS', payload: data })
            })
    }
}

export default store;