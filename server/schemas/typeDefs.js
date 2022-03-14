// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    products: [Product]

  }

  type Category {
    _id: ID
    name: String
  }
  type Product {
    _id: ID
    name: String
    description: String
    price: Float
    quantity: Int
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
    category: Int
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
    reactions: [Reaction]
  }
  type Reaction{
   _id: ID
   reactionBody: String
   createdAt: String
   username: String
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    categories: [Category]
    users: [User]
    user(username: String!): User
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addProduct(username: String!, name: String!, description: String!, image: String!, price: Int!, quantity: Int!, category: String!): Product
    addComment(productId: ID!, commentBody: String!): Product
    addReaction(commentId: ID!, reactionBody: String!): Product
  }
`;


// export the typeDefs
module.exports = typeDefs;
