import { gql } from '@apollo/client';
// query_me for a profile page?
export const QUERY_PRODUCTS = gql`
Query products($username: String) {
    products(username: $$username){
        _id
        name
        description
        image
        price
        username
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
export const QUERY_PRODUCT = gql`
query product($id: ID!) {
    product(_id: $id) {
        _id
        name
        description
        image
        price
        username
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
 
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      products {
        _id
        name
        description
        image
        price
        username
        commentCount
        comments {
            _id
            commentBody
            createdAt
            username
        }
      }
    }
  }
`;
export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      products {
        _id
        name
        description
        image
        price
        username
        commentCount
        comments {
            _id
            commentBody
            createdAt
            username
        }
      }
  }
  }
`;
export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;
