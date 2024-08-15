import React from 'react';
import { Link} from 'react-router-dom';

import s4 from '/images/s4.jpg'
import s5 from '/images/s5.jpg'
import s3 from '/images/s3.jpg'

export const About = () =>{
  return (
    <> 
      <div className='ml-32 mr-32'>
        <div className='mt-8'>
          <h1 className='text-center text-4xl'>About-Us</h1>
          <div className='text-center mt-2 '>
            <h3><Link to='/'>Home</Link> / <span className='text-red-500'>About-us</span></h3>
          </div>

          <div className='text-center mt-32'>
            <h2 className='text-2xl'>About-us</h2>
            <p className='ml-48 mr-48'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia natus voluptatum maiores, praesentium adipisci cumque, distinctio qui quam nihil quisquam laudantium ducimus aperiam a asperiores quia ullam, nulla saepe. Consectetur iusto quis rem molestiae delectus quo atque quia, velit similique!</p>
          </div>
        </div>
        
        {/* ------------------------------------------------------------ */}
        <div className='grid grid-cols-2 mt-32'>
          <div>
            <h4 className='text-4xl'>Our Mission Is To  <span className='text-red-500'>Empower <br /> Businesses With Tools</span></h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi consectetur eius corrupti, animi amet molestiae sed. Adipisci quo voluptates tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, hic.</p>
            <br />
            <hr />
            <br />
            <ul>
              <li><pre>Habit building in essential steps choose habit Good Things</pre></li>
              <li><pre>Get an overview of Habit Calendars admiral general.</pre></li>
              <li><pre>Start building habit with Habitify on platform to new</pre></li>
            </ul>
          </div>

          <div>
            <img className='w-4xl rounded ml-48 ' src={s4} alt="" />
          </div>

          <div>
            <img className='w-4xl rounded' src={s3} alt="" />
          </div>

          <div>
            <h4 className='text-4xl'>Our Mission Is To  <span className='text-red-500'>Empower <br /> Businesses With Tools</span></h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi consectetur eius corrupti, animi amet molestiae sed. Adipisci quo voluptates tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, hic.</p>
            <br />
            <hr />
            <br />
            <ul>
              <li><pre>Habit building in essential steps choose habit Good Things</pre></li>
              <li><pre>Get an overview of Habit Calendars admiral general.</pre></li>
              <li><pre>Start building habit with Habitify on platform to new</pre></li>
            </ul>
          </div>
          
          <div className='mt-16'>
            <img className='w-4xl rounded ' src={s5} alt="" />
          </div>

          <div className='mt-16'> 
            <h4 className='text-4xl'>Our Mission Is To  <span className='text-red-500'>Empower <br /> Businesses With Tools</span></h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi consectetur eius corrupti, animi amet molestiae sed. Adipisci quo voluptates tenetur. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, hic.</p>
            <br />
            <hr />
            <br />
            <ul>
              <li><pre>Habit building in essential steps choose habit Good Things</pre></li>
              <li><pre>Get an overview of Habit Calendars admiral general.</pre></li>
              <li><pre>Start building habit with Habitify on platform to new</pre></li>
            </ul>
          </div>
        </div>
      
        {/* --------------------------------------------------------------------------------------------------------*/}

        <div className='text-center mt-32'>
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
