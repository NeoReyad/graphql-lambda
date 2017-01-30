const graphql = require('graphql').graphql,
    graphqlTools = require("graphql-tools");

const schema = `
type Query {
    hello: String
}
`;

const myGraphQLSchema = graphqlTools.makeExecutableSchema({
    typeDefs: schema
});

var query = '{ hello }';

graphql(myGraphQLSchema, query).then((result) => {
    console.log('GOT RESPONSE');
    console.log(result);
});
