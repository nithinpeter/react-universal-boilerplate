import React, { Component } from 'react';
import store, { fetchData } from './store'; 

export default class App extends Component {
    
    
    componentWillMount() {
        store.dispatch(fetchData());
    }
    
    
    render() {
        const { name } = store.getState();

        return (<div>
            <h1>App</h1>
            { name }
        </div>)
    }
}