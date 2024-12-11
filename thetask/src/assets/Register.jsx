import React from 'react'

const Register = () => {
  return (
    <div>
        <div className="min-h-screen flex items-center justify-center bg-orange-100">
  <div className="bg-white shadow-lg rounded-lg p-8 w-96">
    <h2 className="text-2xl font-bold text-black text-center mb-6">Register</h2>
    <form>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block text-black text-sm font-medium mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-black text-sm font-medium mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
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
      <div className="mb-6">
        <label
          htmlFor="confirmPassword"
          className="block text-black text-sm font-medium mb-2"
        >
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="Confirm your password"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
      >
        Register
      </button>
    </form>
  </div>
</div>

    </div>
  )
}

export default Register