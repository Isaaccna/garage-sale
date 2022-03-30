import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS, QUERY_ME_BASIC } from '../utils/queries';
import { useParams } from 'react-router-dom';
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import Auth from '../utils/auth';
import "../styles/home.css"

const Home = () => {

  const loggedIn = Auth.loggedIn();
<<<<<<< HEAD
=======
  // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  console.log(userData);
  // use useQuery hook to make query request
>>>>>>> 7b5a491d935681dd865feeb3a296c78472ede328
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];
  console.log(products);

<<<<<<< HEAD
    return (
      <main>
        <div className='flex-row justify-space-between'>
        <div className="col-12 mb-3 ">
        {loading ? (
        <div>Loading...</div>
      ) : (
      <ProductList products={products} title="Welcome to the Garage Sale" />
      )}
      </div>
=======
  return (
    <main>
      <div className='flex-row justify-space-between'>
        {loggedIn && (
          <div className='col-12 mb-3'>
            <ProductForm />
          </div>
        )}

        <div className='col-12 mb-3'>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <ProductList products={products} />
          )}
        </div>
>>>>>>> 7b5a491d935681dd865feeb3a296c78472ede328
      </div>
    </main>
  );
};

export default Home;