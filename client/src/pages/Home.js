import React from "react";
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS, QUERY_ME_BASIC } from '../utils/queries';
import ProductList from "../components/ProductList";
import Auth from '../utils/auth';

const Home = () => {

  const loggedIn = Auth.loggedIn();
  const { loading, data } = useQuery(QUERY_PRODUCTS);
  const products = data?.products || [];
  console.log(products);

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
      </div>
      </main>
    );
  };
  
  export default Home;