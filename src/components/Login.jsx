import React from 'react'
import { Link } from 'react-router-dom'
 
export const Login = () => {
  return (
    <>
        <div class="w-full max-w-md max-auto p-8 bg-white rounded-lg shadow-md ml-auto mr-auto">
          <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Login</h2>
          <form action="#" method="POST">
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="email">Email Address</label>
                <input class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>

              <div class="mb-6">
                <label class="block text-gray-700 font-bold mb-2" for="password">Password</label>
                <input class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" id="password" name="password" placeholder="Enter your password" required />
              </div>

              <div class="flex items-center justify-between mb-6">
                  <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox text-blue-600" />
                    <span class="ml-2 text-gray-700">Remember Me</span>
                  </label>
                  <Link to="#" class="text-sm text-blue-600 hover:underline">Forgot Password?</Link>
              </div>

              <div class="flex justify-center">
                <button class="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">Login</button>
              </div>
          </form>

          <p class="text-center text-gray-600 mt-6">
            Don't have an account? <Link to="/signup" class="text-blue-600 hover:underline">Sign up</Link>
          </p>
      </div>
    </>
  )
}
