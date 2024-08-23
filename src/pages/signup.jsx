import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Signup() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    if (!role) {
      alert('Please select a role');
      return;
    }
  
    const userData = {
      "username": username,
      "email": email,
      "first_name": firstname,
      "last_name": lastname,
      "role": role,
      "password": password,
     
    };
  
    

    try {
      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to register');
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/login');
    } catch (error) {
      setError(error.message);
    }
  
    navigate('/login');
  };
  

  return (
    <div className="container mx-auto p-4 pt-2 md:p-6 lg:p-4 h-screen">


<h1 className="text-4xl font-bold mb-4 text-indigo-700 drop-shadow-lg">
      <div className='text-5xl drop-shadow-sm text-indigo-700'>𝕽𝖊𝖓𝖙𝖊𝖉 𝕬𝖗𝖙<span className='text-red-600 text-[70px]'>.</span></div>
      </h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4 text-left">
      <div>
        <label className="block text-sm font-medium text-gray-700"> First Name</label>
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your name"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700"> Last Name</label>
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your name"
          required
        />
      </div>

      
      <div>
        <label className="block text-sm font-medium text-gray-700"> Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter Username"
          required
        />
      </div>


      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your email"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Select Role?</label>
        <select
    value={role}
    onChange={(e) => setRole(e.target.value)}
    className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md  shadow-sm focus:outline-none focus:ring-indigo-700 focus:border-indigo-700 sm:text-sm"
    required
  >
    <option value="" disabled>Select your role</option>
    <option value="artist">Artist</option>
    <option value="renter">Renter</option>
    <option value="renter">Admin</option>
  </select>
      </div>

      
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter your password"
          required
        />
      </div>

      
      <div>
        <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Confirm your password"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Signup
      </button>
    </form>


    </div>
  );
}

export default Signup;