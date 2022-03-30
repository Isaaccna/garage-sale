import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCT } from '../utils/queries';


const SingleProduct = (props) => {
  const { id: productId } = useParams();
  const { loading, data } = useQuery(QUERY_PRODUCT, {
    variables: { id: productId },
  });
  const product = data?.product || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {product.name} - ${product.price}
          </span>{' '}
          <Link to={`/profile/${product.username}`} style={{ fontWeight: 700 }}>Posted by {product.username} on {product.createdAt}</Link>
        </p>
        <div className="card-body">
          <p>{product.description}</p>
        </div>
      </div>

      {product.commentCount > 0 && (
        <CommentList comments={product.comments} />
      )};

      {Auth.loggedIn() && <CommentForm productId={product._id} />};

    </div >
  );

};
export default SingleProduct;
