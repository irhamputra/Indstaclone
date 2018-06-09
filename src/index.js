import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import Pusher from 'pusher-js';

const client = new ApolloClient({
    uri: 'http://localhost:4001/graphql'
});

class ApolloApp extends Component {
    constructor() {
        super();

        this.pusher = new Pusher('PUSHER_APP_KEY', {
            cluster: 'eu',
            encrypted: true
        })
    }

    render() {
        return (
            <ApolloProvider client={client}>
                <App/>
            </ApolloProvider>
        )
    }
}


ReactDOM.render(<ApolloApp/>, document.getElementById('root'));
registerServiceWorker();