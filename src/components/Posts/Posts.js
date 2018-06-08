import React, { Component } from 'react';
import './Posts.css';

class Posts extends Component {
    constructor(props) {
        super(props);

    }

    render(){
        const { username, avatar, image, caption } = this.props;

        return(
            <article className="Post" ref="Post">
                <header>
                    <div className="Post-user">
                        <div className="Post-user-avatar">
                            <img src={ avatar } alt={ username } />
                        </div>
                        <div className="Post-user-nickname">
                            <span>{ username }</span>
                        </div>
                    </div>
                </header>
                <div className="Post-image">
                    <div className="Post-image-bg">
                        <img alt="Icon Living" src={ image } />
                    </div>
                </div>
                <div className="Post-caption">
                    <strong>{ username }</strong> { caption }
                </div>
            </article>
        )
    }
}

export default Posts;