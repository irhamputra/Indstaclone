import React, {Component} from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import Pusher from 'pusher-js';

import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';

// Apollo Client
const client = new ApolloClient({
    uri: 'http://localhost:4001/graphql'
});

class App extends Component {
    constructor(props) {
        super(props);

        this.pusher = new Pusher("818caa8e5e8d93bd3008", {
            cluster: 'eu',
            encrypted: true
        })
    }

    componentDidMount() {
        if ('actions' in Notification.prototype) {
            alert('You can enjoy the notification feature');
        } else {
            alert('Sorry notifications are NOT supported on your browser');
        }
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