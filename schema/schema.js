const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLID, GraphQLInt } = graphql;

const movies = [
    { id: '1', name: 'Pulp Fiction', genre: 'Crime' },
    { id: '2', name: '1984', genre: 'Sci-Fi' },
    { id: '3', name: 'Harry Potter', genre: 'Fantastic' },
    { id: '4', name: 'Sonic', genre: 'Adverture' },
];

const directors = [
    { id: '1', name: '1 Director', age: 25 },
    { id: '2', name: '2 Director', age: 30 },
    { id: '3', name: '3 Director', age: 40 },
    { id: '4', name: '4 Director', age: 50 },
];

const MovieType = new GraphQLObjectType({
    name: 'Movie',
    fields: () => ({
       id: { type: GraphQLID },
       name: { type: GraphQLString },
       genre: { type: GraphQLString },
    }),
});

const DirectorType = new GraphQLObjectType({
    name: 'Director',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
    }),
});

const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        movie: {
            type: MovieType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return movies.find(movie => movie.id == args.id);
            }
        },
        director: {
            type: DirectorType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return directors.find(director => director.id == args.id);
            }
        },
    }

});

module.exports = new GraphQLSchema({
   query: Query,
});