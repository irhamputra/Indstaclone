const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const { buildSchema } = require('graphql');

const app = express();
const PORT = 4001;

app.use(cors());

const schema = buildSchema(`
    type User {
        id: String!
        username: String!
        avatar: String!
    }
    
    type Post {
        id: String!
        user: User!
        caption: String!
        image: String!
    }
    
    type Query {
        user(id: String): User!
        post(user_id: String): Post!
        posts(user_id: String): [Post]
    }
`);

const userList = {
    a: {
        id: 'a',
        username: 'irhamputra',
        avatar: 'https://scontent-frt3-1.cdninstagram.com/vp/627949e7665e70c73a9c51c47fdd6bf7/5BB9418D/t51.2885-19/s150x150/34124457_220895758506864_6725624653290668032_n.jpg'
    }
};

const postsList = {

};

const rootValue = {

};

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue
}));

app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`));