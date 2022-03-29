import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation AddProduct($name: String!, $description: String!, $price: String!, ) {
  addProduct(name: $name, description: $description, price: $price, ) {
    _id
    name
    description
    
    price
    createdAt
    username
    commentCount
    comments {
      _id
    }
    }
  }
`;

  export const ADD_COMMENT = gql`
    mutation addComment($productId: ID!, $commentBody: String!) {
    addcomment(productId: $productId, commentBody: $commentBody) {
      _id
      commentCount
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;
