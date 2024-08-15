import React from 'react'
import { Link } from 'react-router-dom'
import p1 from '/images/p1.jpg'
import p2 from '/images/p2.jpg'
import p3 from '/images/p3.jpg'
import ab1 from '/images/ab1.jpg'
import ab2 from '/images/ab2.jpg'
import ab3 from '/images/ab3.jpg'
export const Blog = () => {
  return (
    <>
      <div className='ml-24 mr-24'>
        <div className='mt-8'>
          <h1 className='text-center text-4xl'>Blog</h1>
          <div className='text-center mt-2 '>
            <h3><Link to='/'>Home</Link> / <span className='text-red-500'>Blog</span></h3>
          </div>

          <div className='text-center mt-32'>
            <h2 className='text-2xl'>Blog</h2>
            <p className='ml-48 mr-48'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia natus voluptatum maiores, praesentium adipisci cumque, distinctio qui quam nihil quisquam laudantium ducimus aperiam a asperiores quia ullam, nulla saepe. Consectetur iusto quis rem molestiae delectus quo atque quia, velit similique!</p>
          </div>
        </div>
        {/* ---------------------------------------------------------- */}
        <div className='text-center mt-24'>
          <h1 className='text-3xl text-blue-500'>Find a source of knowladge</h1>
          <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nam sed dolores? Quidem ut veniam sed ducimus autem dignissimos nulla, iste, dolorum illum debitis eaque excepturi? Eaque ad incidunt aut quibusdam porro dolore error mollitia blanditiis, corrupti magni ipsam aliquam quos! Tempora</p>
        </div>
        {/* ---------------------------------------------------------------------- */}
        <div className='grid grid-cols-3 mt-16 '>
          <div className='ml-4'>
            <img className='ml-2 mr-2 rounded' src={p1} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A corrupti, temporibus, reprehenderit fuga cupiditate inventore rem nisi ea architecto vitae sapiente consequatur doloribus officiis at. Vitae </p>
          </div>

          <div className='ml-4'> 
            <img className='rounded' src={p2} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A corrupti, temporibus, reprehenderit fuga cupiditate inventore rem nisi ea architecto vitae sapiente consequatur doloribus officiis at. Vitae </p>
          </div>

          <div className='ml-4'>
            <img className='rounded' src={p3} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A corrupti, temporibus, reprehenderit fuga cupiditate inventore rem nisi ea architecto vitae sapiente consequatur doloribus officiis at. Vitae </p>
          </div>

          {/*   --- */}
          <div className='mt-16 ml-4'>
            <img className='ml-2 mr-2 rounded' src={ab1} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A corrupti, temporibus, reprehenderit fuga cupiditate inventore rem nisi ea architecto vitae sapiente consequatur doloribus officiis at. Vitae </p>
          </div>

          <div className='mt-16 ml-4 rounded'>
            <img  src={ab2} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A corrupti, temporibus, reprehenderit fuga cupiditate inventore rem nisi ea architecto vitae sapiente consequatur doloribus officiis at. Vitae </p>
          </div>

          <div className='mt-16 ml-4 roundeds'>
            <img src={ab3} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A corrupti, temporibus, reprehenderit fuga cupiditate inventore rem nisi ea architecto vitae sapiente consequatur doloribus officiis at. Vitae </p>
          </div>
        </div>
        {/* ------------------------------------------------------------ */}
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
            <a className="hover:underline" href="">Term&condition</a><br />
            <a className="hover:underline" href="">Privacy policy</a><br />
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
