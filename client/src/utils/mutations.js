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
  mutation AddProduct($name: String!, $description: String!, $image: String!, $price: Int!, $quantity: Int!, $category: String!) {
  addProduct(name: $name, description: $description, image: $image, price: $price, quantity: $quantity, category: $category {
    _id
    name
    description
    price
    quantity
    createdAt
    username
    commentCount
    comments {
      _id
    }
    }
  }
`;
