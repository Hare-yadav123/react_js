import React from 'react'
import { Link } from 'react-router-dom'

import banner from '/images/banner.jpg'
import banner1 from '/images/banner1.jpg'
import ab1 from '/images/ab1.jpg'
import ab2 from '/images/ab2.jpg'
import team6 from '/images/team6.jpg'
import team5 from '/images/team5.jpg'
export const Team = () => {
  return (
   <>
    <div className='ml-24 mr-24'>
      <div className='mt-8'>
        <h1 className='text-center text-4xl'>Team</h1>
        <div className='text-center mt-2 '>
          <h3><Link to='/'>Home</Link> / <span className='text-red-500'>Team</span></h3>
        </div>

        <div className='text-center mt-32'>
          <h2 className='text-2xl'>Team</h2>
          <p className='ml-48 mr-48'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia natus voluptatum maiores, praesentium adipisci cumque, distinctio qui quam nihil quisquam laudantium ducimus aperiam a asperiores quia ullam, nulla saepe. Consectetur iusto quis rem molestiae delectus quo atque</p>
        </div>
      </div>
      {/* ------------------------------------------------------------------ */}
      <div>
        <div className='text-center mt-24'>
          <h1 className='text-3xl text-blue-500'>Our Team Member's</h1>
          <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nam sed dolores? Quidem ut veniam sed ducimus autem dignissimos nulla, iste, dolorum illum debitis eaque excepturi? Eaque ad incidunt aut quibusdam porro dolore error mollitia blanditiis, corrupti magni ipsam aliquam quos! Tempora</p>
        </div>

        <div className='grid grid-cols-4 m-2 mt-16'>
          <button className='bg-red-500 font-bold hover:bg-red-700 py-2 px-2 rounded ml-4'>All Together</button>
          <button className='bg-red-500 font-bold hover:bg-red-700 py-2 px-2 rounded ml-4'>Developers</button>
          <button className='bg-red-500 font-bold hover:bg-red-700 py-2 px-2 rounded ml-4'>Designers</button>
          <button className='bg-red-500 font-bold hover:bg-red-700 py-2 px-2 rounded ml-4'>Marketer</button>
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------- */}

      <div className='grid grid-cols-4 ml-24 mt-32'>
        <div>
          <div>
            <img className='w-24 h-24 rounded-full' src={banner1} alt="" />
          </div>

          <div>
            <h4>Harman Ray </h4>
            <p>Data analysist</p>
            <a href=""><i class="fa fa-linkedin"></i></a>
            <a href=""><i class="fa fa-instagram"></i></a>
            <a href=""><i class="fa fa-github" ></i></a>
            <a href=""><i class="fa fa-whatsapp" ></i></a>
          </div>
        </div>

        <div>
          <div>
            <img className='w-24 h-24 rounded-full' src={banner} alt="" />
          </div>

          <div>
            <h4>Raju Kumar</h4>
            <p>Software Engineer</p>
            <a href=""><i class="fa fa-linkedin"></i></a>
            <a href=""><i class="fa fa-instagram"></i></a>
            <a href=""><i class="fa fa-github" ></i></a>
            <a href=""><i class="fa fa-whatsapp" ></i></a>
          </div>
        </div>

        <div>
          <div>
            <img className='w-24 h-24 rounded-full' src={team6} alt="" />
          </div>

          <div>
            <h4>Sandhya</h4>
            <p>Full-stack Developer</p>
            <a href=""><i class="fa fa-linkedin"></i></a>
            <a href=""><i class="fa fa-instagram"></i></a>
            <a href=""><i class="fa fa-github" ></i></a>
            <a href=""><i class="fa fa-whatsapp" ></i></a>
          </div>
        </div>

        <div>
          <div>
            <img className='w-24 h-24 rounded-full' src={team5} alt="" />
          </div>

          <div>
            <h4>Hony</h4>
            <p>Data Scintist</p>
            <a href=""><i class="fa fa-linkedin"></i></a>
            <a href=""><i class="fa fa-instagram"></i></a>
            <a href=""><i class="fa fa-github" ></i></a>
            <a href=""><i class="fa fa-whatsapp" ></i></a>
          </div>
        </div>
      </div>
      {/* --------------------------------------------------------------------------------------------- */}

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
   </div>
   
   </>
  )
}
