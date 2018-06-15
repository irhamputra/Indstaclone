const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const Pusher = require('pusher');
const bodyParser = require('body-parser');
const Multipart = require('connect-multiparty');
const schema  = require('./schemas/schema');
const rootValue = require('./resolvers/resolvers');

require('dotenv').config();

const pusher = new Pusher({
    appId: process.env.APP_ID,
    key: process.env.KEY_APP,
    secret: process.env.SECRET_APP,
    cluster: process.env.CLUSTER,
    encrypted: true
});

let multipartMiddleware = new Multipart();

const app = express();
const PORT = 4001;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post('/upload', multipartMiddleware, (req, res) => {
    let post = {
        user: {
            username: req.body.name,
            avatar: req.body.avatar
        },
        image: req.body.image,
        caption: req.body.caption
    };

    pusher.trigger("posts-channel", "new-post", {
        post
    });

    return res.json({status: "Post created"})
});

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}));

app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`));