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
        quantity
        username
        commentCount
        comments {
            _id
            commentBody
            createdAt
            username
            reactions {
                _id
                reactionBody
                createdAt
                username
            }
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
        quantity
        username
        commentCount
        comments {
            _id
            commentBody
            createdAt
            username
            reactions {
                _id
                reactionBody
                createdAt
                username
            }
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
        quantity
        username
        commentCount
        comments {
            _id
            commentBody
            createdAt
            username
            reactions {
                _id
                reactionBody
                createdAt
                username
            }
        }
      }
    }
  }
`;
