const graphql = require('graphql');
// const _ = require('loadash');

const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLInt,
    GraphQLList
} = graphql;

// dummy data
const books = [
    {name: 'Wind', genre: 'nature', id: '1', authorId: "1"},
    {name: 'Water', genre: 'magic', id: '2'},
    {name: 'Fire', genre: 'attack', id: '3'},
]

const authors = [
    {name: 'LLF', age: 10, id: '1'},
    {name: 'ZWK', age: 20, id: '2'},
    {name: 'WZ', age: 30, id: '3'},
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args) {
                console.log(parent);
                for (let a of authors) {
                    console.log(a.id);
                    if (a.id === parent.authorId) return a;
                }
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        books: {
            tyep: GraphQLList,
            resolve(parent, args) {
                
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: {
                id: { type: GraphQLID },
            },
            resolve(parent, args) {
                // code to get data from db /other source
                for ( let book of books) {
                    if (book.id === args.id) return book
                }
            }
        },
        author: {
            type: AuthorType,
            args: {
                id: { type: GraphQLID },
            },
            resolve(parent, args) {
                for ( let a of authors) {
                    if (a.id === args.id) return a
                }
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
