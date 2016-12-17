import React, { Component } from 'react';
import store, { fetchData } from './store';
import Match from 'react-router/Match'
import Link from 'react-router/Link' 

export default class App extends Component {
    
    
    componentWillMount() {
        store.dispatch(fetchData());
    }
    
    
    render() {
        const { data, simpleData } = store.getState();

        return (<div>
            <h1>App</h1>
            { data.name }
            <br/>
            { simpleData }
            <br/>  
            <Link to="/about">About</Link>
            <Match pattern="/about" component={About} />
        </div>)
    }
}


class About extends Component {
    
    
    componentWillMount() {
        // store.dispatch(fetchData());
    }
    
    
    render() {
        const { name } = store.getState();

        return (<div>
            <h1>App</h1>
            { name }
            <br/>
        </div>)
    }
}