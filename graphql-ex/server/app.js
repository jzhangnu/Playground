const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema')

const app = express();

app.use('/graphql', graphqlHTTP({
    schema
}))

app.listen(7777, () => console.log("now listening for requests on port 7777!"))