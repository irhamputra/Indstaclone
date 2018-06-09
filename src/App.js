import React, {Component} from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import Pusher from 'pusher-js';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';

require('dotenv').config();

const client = new ApolloClient({
    uri: 'http://localhost:4001/graphql'
});

class App extends Component {
    constructor(props) {
        super(props);

        this.pusher = new Pusher(process.env.APP_KEY, {
            cluster: 'eu',
            encrypted: true
        })
    }

    render() {
        return (
            <ApolloProvider client={client}>
                <Header/>
                <Posts pusher={this.pusher} apollo_client={client}/>
            </ApolloProvider>
        )
    }
}

export default App;