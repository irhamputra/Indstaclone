import React, {Component} from 'react';
import gql from 'graphql-tag';
import Post from '../Post/Post';
import './Posts.css';

class Posts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        // querying data via props and set it to posts state
        this.props.apollo_client.query({
            query: gql`{
                    posts(user_id: "a") {
                        id
                        image
                        caption
                        user {
                            username
                            avatar
                         }
                        }
                      }`
        }).then(res => this.setState({posts: res.data.posts}));

        this.posts_channel = this.props.pusher.subscribe('posts-channel');

        // listening to the new post
        this.posts_channel.bind('new-post', data => {
            this.setState({posts: this.state.posts.concat(data.post)})
            console.log(this.state.posts);
        }, this)
    }

    render() {
        return (
            <div className="Posts">
                {this.state.posts.map(post =>
                    <Post
                        username={post.user.username}
                        avatar={post.user.avatar}
                        image={post.image}
                        caption={post.caption}
                        key={post.id}
                    />)}
            </div>
        )
    }
}

export default Posts;