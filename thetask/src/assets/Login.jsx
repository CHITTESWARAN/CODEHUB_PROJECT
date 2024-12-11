import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-orange-100">
  <div className="bg-white shadow-lg rounded-lg p-8 w-96">
    <h2 className="text-2xl font-bold text-black text-center mb-6">Login</h2>
    <form>
      <div className="mb-4">
        <label
          htmlFor="username"
          className="block text-black text-sm font-medium mb-2"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Enter your username"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-black text-sm font-medium mb-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Enter your password"
        />
      </div>
      <div className='text-end p-4 m-2 text-sm text-orange-400 underline'>
       <Link to="/register"><h4>Register for the free</h4></Link> 
      </div>
      <button
        type="submit"
        className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
      >
        Login
      </button>
    </form>
  </div>
</div>

    </div>
  )
}

export default Login