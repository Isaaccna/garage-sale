import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
// import CommentList from '../components/CommentList';
// import CommentForm from '../components/CommentForm';
import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';

const ProductList = (props) => {
  const { id: productId } = useParams();
  const { loading, data } = useQuery(QUERY_PRODUCTS, {
    variables: { id: productId },
  });
  const product = data?.product || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  else{
  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {product.username}
          </span>{' '}
          Posted on {product.createdAt}
        </p>
        <div className="card-body">
          <p>{product.description}</p>
        </div>
      </div>
      </div>
  );
  }
};
export default ProductList;