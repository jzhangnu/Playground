const graphql = require('graphql');
// const _ = require('loadash');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// dummy data

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLString },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {
                id: { type: GraphQLString },
            },
            resolve(parent, args) {
                // args.id
                // code to get data from db /other source
                return "get it!"
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})