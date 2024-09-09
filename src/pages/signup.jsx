import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [publicName, setPublicName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [subscribeToMailingList, setSubscribeToMailingList] = useState(false);
  const [agreedToRules, setAgreedToRules] = useState(false);  // New state for Rules and Regulations checkbox
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

    if (role === 'ARTIST' && !agreedToRules) {
      alert('You must agree to the Rules and Regulations to register as an Artist.');
      return;
    }

    if (role === 'ARTIST') {
      navigate('/artist-info');  
    } else if (role === 'RENTER') {
      navigate('/recommendations'); 
    }

    const userData = {
      username: role === 'ARTIST' ? '' : username,  // Username for non-artists
      username: role === 'ARTIST' ? username : '',  // Full name for artists
      publicName: role === 'ARTIST' ? publicName : '',  // Public name for artists
      email: email,
      role: role,
      password: password,
      subscribeToMailingList: subscribeToMailingList,
      agreedToRules: agreedToRules,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/register/', {
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
  };

  return (
    <div className="container mx-auto p-4 pt-2 md:p-6 lg:p-4 h-screen">
      <h1 className="text-4xl font-bold mb-4 text-indigo-700 drop-shadow-lg">
        <div className='text-5xl drop-shadow-sm text-indigo-700 my-12'>𝕽𝖊𝖓𝖙𝖊𝖉 𝕬𝖗𝖙<span className='text-red-600 text-[70px]'>.</span></div>
      </h1>

      {error && (
        <div className='max-w-md mx-auto mb-4 p-2 text-red-700 bg-red-100 border border-red-400 rounded'>
          {error}
        </div>
      )}

      <div className='flex items-center justify-center'>
        <div className="mt-1 flex space-x-4">
          <button
            type="button"
            className={`px-4 py-2 border rounded-md shadow-sm text-sm font-medium ${
              role === "ARTIST"
                ? "bg-indigo-700 text-white border-indigo-700"
                : "bg-white text-gray-700 border-gray-300"
            }`}
            onClick={() => setRole("ARTIST")}
          >
            Artist
          </button>
          <button
            type="button"
            className={`px-4 py-2 border rounded-md shadow-sm text-sm font-medium ${
              role === "RENTER"
                ? "bg-indigo-700 text-white border-indigo-700"
                : "bg-white text-gray-700 border-gray-300"
            }`}
            onClick={() => setRole("RENTER")}
          >
            Client
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4 text-left">
        {/* Conditionally Render Full Name and Public Name for Artist */}
        {role === 'ARTIST' ? (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Public Name</label>
              <input
                type="text"
                value={publicName}
                onChange={(e) => setPublicName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your public name"
                required
              />
            </div>
          </>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter Username"
              required
            />
          </div>
        )}

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

        {/* Mailing List Checkbox */}
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="mailingList"
            checked={subscribeToMailingList}
            onChange={(e) => setSubscribeToMailingList(e.target.checked)}
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <label htmlFor="mailingList" className="ml-2 block text-sm text-gray-700">
            Subscribe to our mailing list for updates
          </label>
        </div>

        {/* Rules and Regulations Checkbox for Artist */}
        {role === 'ARTIST' && (
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="rules"
              checked={agreedToRules}
              onChange={(e) => setAgreedToRules(e.target.checked)}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              required
            />
            <label htmlFor="rules" className="ml-2 block text-sm text-gray-700">
              I agree to the Rules and Regulations
            </label>
          </div>
        )}


        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
        >
          Next
        </button>
      
      </form>
    </div>
  );
}

export default Signup;
