import React from 'react'

export const Signup = () => {
  return (
    <>
    
    

      <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 class="text-2xl font-bold mb-6 text-gray-800">Contact Us</h2>
        <form action="#" method="POST">
            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="name">First Name</label>
              <input class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" name="name" placeholder="Your Name" required />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="name">Last Name</label>
              <input class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" name="name" placeholder="Last Name" required />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="email">Email</label>
              <input class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" name="email" placeholder="Your Email" required />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="name">Mobile No</label>
              <input class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="number" id="number" name="number" placeholder="456669932" required />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="name">Password</label>
              <input class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" id="password" name="password" placeholder="password" required />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 font-bold mb-2" for="name">Conform Password</label>
              <input class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" id="conformpassword" name="password" placeholder="password" required />
            </div>

            <div class="flex justify-end">
              <button class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">Send Message</button>
            </div>
        </form>
      </div>
    </>
  )
}
