import React from 'react'
import { Link } from 'react-router-dom'
export const Contact = () => {
  return (
    <>
      <div className='mt-8'>
        <h1 className='text-center text-4xl'>Contact-Us</h1>
        <div className='text-center mt-2 '>
          <h3><Link to='/'>Home</Link> / <span className='text-red-500'>contact-us</span></h3>
        </div>

        <div className='text-center mt-32'>
          <h2 className='text-2xl'>contact-us</h2>
          <p className='ml-48 mr-48'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia natus voluptatum maiores, praesentium adipisci cumque, distinctio qui quam nihil quisquam laudantium ducimus aperiam a asperiores quia ullam, nulla saepe. Consectetur iusto quis rem molestiae delectus quo atque quia, velit similique!</p>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------- */}
      <div className='grid grid-cols-2 ml-32 mr-32 mt-32'>
          <div>
            <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Conact-Us</h2>
            <form action="#" method="POST">
                <div class="mb-4">
                  <label class="block text-gray-700 font-bold mb-2" for="name">Full Name</label>
                  <input class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div class="mb-4">
                  <label class="block text-gray-700 font-bold mb-2" for="email">Email Address</label>
                  <input class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" id="email" name="email" placeholder="Enter your email" required />
                </div>

                <div class="mb-6">
                  <label class="block text-gray-700 font-bold mb-2" for="password">Feed-Back</label>
                  <input class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="password" name="password" placeholder="write your feedback" required />
                </div>


                <div class="flex justify-center">
                  <button class="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" type="submit">Login</button>
                </div>
              </form>

            </div>

        <div>
        <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Conact Information</h2>
        <div class="info">
            <ul class="mt-32 text-center">
              <li>hareyadav2546@gmail.com</li>
              <li>6588992103</li>
              <li>Gt-No:45 Wagholi Pune Maharastra </li>
            </ul>
        </div>
        </div>
      </div>


      {/* -------------------------------------------------------------------------------------------------- */}
      <div className='text-center mt-16'>
        <p className='text-3xl'>Join 75,000+ Growing Business That <br /> <span className='text-red-500'> Use Copper To Their Brand</span></p> <br />
        <a href=""><button className='btn border border-2 red p-3 w-1/6 hover:bg-red-700' >Get start with us</button></a>
      </div> <br />
      <hr className='mt-10' />


        <div className='grid grid-cols-4 bg-gray-100'>
            <div className="bg-gray-100" >
              <h3 className="text-lg">cupper</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, vero!</p>
            </div>

            <div className='bg-gray-100'>
              <h3 className="text-lg">sociallink</h3>
              <a href=""><i class="fa fa-facebook-square hover:underline">facebook</i></a><br /> 
              <a className="hover:underline" href=""><i className="fa fa-instagram hover:underline" ></i></a>instagram<br /> 
              <a className="hover:underline" href=""><i className="fa fa-youtube-play hover:underline"></i>Youtube</a><br />
              <a href=""><i className="fa fa-whatsapp hover:underline"></i> whatsapp</a><br />
            </div>

            <div className='bg-gray-100'>
              <h3 className="text-lg">Quick-link</h3>
              <a className="hover:underline" href="">fpq</a><br />
              <a  className="hover:underline" href="">Term&condition</a><br />
              <a  className="hover:underline" href="">Privacy policy</a><br />
            </div>

            <div className="bg-gray-100">
              <h3 className="text-lg">Let's Subscribe your mail</h3>
              <input className="rounded-l p-2 w-32" type="email" name="" id="" placeholder="write your mail" />
              <a className="border-2 border-gray-200 py-3 px-6 bg-red-500 rounded" href="/signup/"><i class="fa fa-long-arrow-right"></i></a>
            </div>
        </div>

    </>
  )
}
