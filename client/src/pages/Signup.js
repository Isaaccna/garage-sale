import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import Auth from '../utils/auth';
import "../styles/signup.css"

const Signup = () => {
  const [formState, setFormState] = useState({ username: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);


  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // use try/catch instead of promises to handle errors
  try {
    // execute addUser mutation and pass in variable data from form
    const { data } = await addUser({
      variables: { ...formState }
    });
    Auth.login(data.addUser.token);
  } catch (e) {
    console.error(e);
  }
  };

  return (
    <main>
      <div className='signup-jumbo'>
        <div className='card-bg'>
            <h4 className='mx-1'>Sign-Up</h4>
            <form onSubmit={handleFormSubmit}>
                <input
                  className='form-input'
                  placeholder='Choose Username'
                  name='username'
                  type='username'
                  id='username'
                  value={formState.username}
                  onChange={handleChange}
                />
                <input
                  className='form-input'
                  placeholder='Enter Your Email'
                  name='email'
                  type='email'
                  id='email'
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className='form-input'
                  placeholder='******'
                  name='password'
                  type='password'
                  id='password'
                  value={formState.password}
                  onChange={handleChange}
                />
                <button className='my-1 mx-1 btn d-block w-100' type='submit'>
                  Submit
                </button>
              </form>
              {error && <div>Sign up failed</div>}
        </div>
      </div>  
    </main>
  );
};

export default Signup;