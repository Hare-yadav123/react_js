import React from 'react'
import { Link } from 'react-router-dom'
import ab1 from '/images/ab1.jpg'
import ab2 from '/images/ab2.jpg'
import ab3 from '/images/ab3.jpg'
import styles from '../css/Service.module.css'

export const Service = () => {
  return (
    <>
      <div className='ml-32 mr-32 mt-16'>
        <div className='mt-8'>
          <h1 className='text-center text-4xl'>Service</h1>
          <div className='text-center mt-2 '>
            <h3><Link to='/'>Home</Link> / <span className='text-red-500'>Service</span></h3>
          </div>

          <div className='text-center mt-32'>
            <h2 className='text-2xl'>Service</h2>
            <p className='ml-48 mr-48'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia natus voluptatum maiores, praesentium adipisci cumque, distinctio qui quam nihil quisquam laudantium ducimus aperiam a asperiores quia ullam, nulla saepe. Consectetur iusto quis rem molestiae delectus quo atque quia, velit similique!</p>
          </div>
        </div>


        <div className='grid grid-cols-3 mt-32'>
          <div className=' place-item-center'>
            <div className='ml-24'>
              <img className='w-32 h-32 rounded-full ' src={ab1} alt="" />
            </div>
            <div>
              <h4 className='text-center'>Attached coache </h4>
              <p class="ml-16 mr-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum illum error enim, quia voluptatibus perspiciatis natus voluptas facere vero.</p>
              <Link className='ml-32' to=""><i class="fa fa-linkedin"></i></Link>
              <Link to=""><i class="fa fa-instagram"></i></Link>
              <Link to=""><i class="fa fa-github" ></i></Link>
              <Link to=""><i class="fa fa-whatsapp" ></i></Link>
            </div>
          </div>

          <div className='place-item-center'>
            <div className='ml-24'>
              <img className='w-32 h-32 rounded-full ' src={ab2} alt="" />
            </div>
            <div>
              <h4 className='text-center'>Live Attached</h4>
              <p class="ml-16 mr-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum illum error enim, quia voluptatibus perspiciatis natus voluptas facere vero.</p>
              <Link className='ml-32' to=""><i class="fa fa-linkedin"></i></Link>
              <Link to=""><i class="fa fa-instagram"></i></Link>
              <Link  to=""><i class="fa fa-github" ></i></Link>
              <Link to=""><i class="fa fa-whatsapp" ></i></Link>
            </div>
          </div>

          <div className='place-item-center'>
            <div className='ml-24'>
              <img className='w-32 h-32 rounded-full ' src={ab3} alt="" />
            </div>
            <div className=''>
              <h4 className='text-center'>Attached Notification</h4>
              <p class="ml-16 mr-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum illum error enim, quia voluptatibus perspiciatis natus voluptas facere vero.</p>
              <Link className='ml-32' to=""><i class="fa fa-linkedin"></i></Link>
              <Link to=""><i class="fa fa-instagram"></i></Link>
              <Link to=""><i class="fa fa-github" ></i></Link>
              <Link to=""><i class="fa fa-whatsapp" ></i></Link>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------- */}
        <div className='grid grid-cols-3 mt-16'>
          <div className=' place-item-center'>
            <div className='ml-24'>
              <img className='w-32 h-32 rounded-full ' src={ab1} alt="" />
            </div>
            <div>
              <h4 className='text-center'>Attached coache </h4>
              <p class="ml-16 mr-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum illum error enim, quia voluptatibus perspiciatis natus voluptas facere vero.</p>
              <Link className='ml-32' to=""><i class="fa fa-linkedin"></i></Link>
              <Link to=""><i class="fa fa-instagram"></i></Link>
              <Link to=""><i class="fa fa-github" ></i></Link>
              <Link to=""><i class="fa fa-whatsapp" ></i></Link>
            </div>
          </div>

          <div className='place-item-center'>
            <div className='ml-24'>
              <img className='w-32 h-32 rounded-full ' src={ab2} alt="" />
            </div>
            <div>
              <h4 className='text-center'>Live Attached</h4>
              <p class="ml-16 mr-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum illum error enim, quia voluptatibus perspiciatis natus voluptas facere vero.</p>
              <Link className='ml-32' to=""><i class="fa fa-linkedin"></i></Link>
              <Link to=""><i class="fa fa-instagram"></i></Link>
              <Link  to=""><i class="fa fa-github" ></i></Link>
              <Link to=""><i class="fa fa-whatsapp" ></i></Link>
            </div>
          </div>

          <div className='place-item-center'>
            <div className='ml-24'>
              <img className='w-32 h-32 rounded-full ' src={ab3} alt="" />
            </div>
            <div className=''>
              <h4 className='text-center'>Attached Notification</h4>
              <p class="ml-16 mr-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea cum illum error enim, quia voluptatibus perspiciatis natus voluptas facere vero.</p>
              <Link className='ml-32' to=""><i class="fa fa-linkedin"></i></Link>
              <Link to=""><i class="fa fa-instagram"></i></Link>
              <Link to=""><i class="fa fa-github" ></i></Link>
              <Link to=""><i class="fa fa-whatsapp" ></i></Link>
            </div>
          </div>
        </div>
        {/* ---------------------------------------------------------------------------------- */}

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
