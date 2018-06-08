import React, {Component} from 'react';

class Post extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {username, avatar, caption, image} = this.props;
        return (
            <article className="Post" ref="Post">
                <header>
                    <div className="Post-user">
                        <div className="Post-user-avatar">
                            <img src={avatar} alt={username}/>
                        </div>
                        <div className="Post-user-nickname">
                            <span>{username}</span>
                        </div>
                    </div>
                </header>
                <div className="Post-image">
                    <div className="Post-image-bg">
                        <img alt={caption} src={image}/>
                    </div>
                </div>
                <div className="Post-caption">
                    <strong>{username}</strong> {caption}
                </div>
            </article>
        )
    }
}

export default Post