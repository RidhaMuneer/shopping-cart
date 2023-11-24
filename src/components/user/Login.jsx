import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../nav-bar/nav-bar.jsx';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', email, password);
  };

  return (
    <>
    <NavBar></NavBar>
    <div className='flex flex-col items-center  justify-evenly gap-20 py-24 custom-bg pb-96 bg-gray-200'>
      <div className='flex flex-col gap-10  bg-white p-12 rounded-lg'>
        <div className='flex flex-col gap-2'>
          <h1 className='text-3xl text-center'>Login to Your Account</h1>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='p-2 bg-gray-200 rounded-md'
          />
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='p-2 bg-gray-200 rounded-md'
          />
        </div>
        <div className='flex justify-center items-center gap-4'>
        <Link to='/home'>
          <p className='bg-yellow-600 bg-opacity-75 px-12 py-2 rounded text-white' onClick={handleLogin}>
            Login
          </p>
        </Link>
          <p className='text-yellow-600'> 
            Don't have an account? <Link to='/signup'>Sign up</Link>
          </p>
        </div>
      </div>
    </div>

    </>
  );
}