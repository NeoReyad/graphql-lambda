
var server = require("graphql-server-lambda"),
    graphqlTools = require("graphql-tools");

const schema = `
type Query {
    hello: String
}
`;

const resolver = {
    Query: {
        hello: () => {
            return 'Hello World';
        }
    }
};

const myGraphQLSchema = graphqlTools.makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolver
});

exports.graphqlHandler = server.graphqlLambda({ schema: myGraphQLSchema });
exports.graphiqlHandler = server.graphiqlLambda({ schema: myGraphQLSchema });
