const { buildSchema } = require('graphql');

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

module.exports = schema;