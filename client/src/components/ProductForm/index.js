import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT } from '../../utils/mutations';
import { QUERY_PRODUCTS, QUERY_ME } from '../../utils/queries';

const ProductForm = () => {
  // use state for product name/ price / image/ or set use state for all 3 variables
  const [productState, setProductState] = useState('');
  const [addProduct, { error }] = useMutation(ADD_PRODUCT, {
    update(cache, { data: { addProduct } }) {
      try {
        // update thought array's cache
        // could potentially not exist yet, so wrap in a try/catch
        const { products } = cache.readQuery({ query: QUERY_PRODUCTS });
        cache.writeQuery({
          query: QUERY_PRODUCTS,
          data: { products: [addProduct, ...products] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const { me } = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...me, products: [...me.products, addProduct] } },
      });
    },
  });

  // update state based on form input changes
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setProductState({
      ...productState,
      [name]: value
    });
  };
  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setProductState('');

    try {
      await addProduct({
        variables: { ...productState },
      });

      // clear form value
      setProductState('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <form
        className="flex-row justify-center justify-space-between-md align-stretch"
        onSubmit={handleFormSubmit}
      >
        <input
          className='form-input'
          placeholder='Product Name'
          name='name'
          type='name'
          id='name'
          value={productState.name}
          onChange={handleChange}
        />
        <textarea
          placeholder="Describe your product"
          value={productState.description}
          name="description"
          id="description"
          className="form-input col-12 col-md-9"
          onChange={handleChange}
        ></textarea>
        <input
          className='form-input'
          placeholder='Price '
          name='price'
          type='price'
          id='price'
          value={productState.price}
          onChange={handleChange}
        />
        <button className="btn col-12 col-md-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;