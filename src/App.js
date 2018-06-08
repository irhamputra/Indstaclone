import React, { Component } from 'react';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Posts
              username="irhamputra"
              avatar="https://scontent-frt3-1.cdninstagram.com/vp/627949e7665e70c73a9c51c47fdd6bf7/5BB9418D/t51.2885-19/s150x150/34124457_220895758506864_6725624653290668032_n.jpg"
              caption="Moving the community!"
              image="https://images.unsplash.com/photo-1511851770202-fe0f706003ca?ixlib=rb-0.3.5&s=81273ad45dffeffd8af09ea75e187736&auto=format&fit=crop&w=1284&q=80"
          />
          <Posts
              username="irhamputra"
              avatar="https://scontent-frt3-1.cdninstagram.com/vp/627949e7665e70c73a9c51c47fdd6bf7/5BB9418D/t51.2885-19/s150x150/34124457_220895758506864_6725624653290668032_n.jpg"
              caption="Moving the community!"
              image="https://images.unsplash.com/photo-1512189805855-2fab30ba7c51?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=31857ada25ac94bd5ce5d054cc3008d4&auto=format&fit=crop&w=1295&q=80"
          />
          <Posts
              username="irhamputra"
              avatar="https://scontent-frt3-1.cdninstagram.com/vp/627949e7665e70c73a9c51c47fdd6bf7/5BB9418D/t51.2885-19/s150x150/34124457_220895758506864_6725624653290668032_n.jpg"
              caption="Moving the community!"
              image="https://images.unsplash.com/photo-1512541531308-c03ecd9ed08c?ixlib=rb-0.3.5&s=3c232366ff43fdeac1e9b47678e3f045&auto=format&fit=crop&w=1534&q=80"
          />
      </div>
    )
  }
}

export default App;