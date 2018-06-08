const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const schema  = require('./schemas/schema');
const rootValue = require('./resolvers/resolvers');

const app = express();
const PORT = 4001;

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}));

app.listen(PORT, () => console.log(`Server is running on localhost:${PORT}`));