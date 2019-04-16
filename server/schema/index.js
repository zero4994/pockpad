const definition = `
    type AuthorizedUser {
        access_token: String
        username: String
    }

    type Query {
        Login: String
        Authorize (code: String!): AuthorizedUser
    }
`;

module.exports = { definition };
