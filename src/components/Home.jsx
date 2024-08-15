import React from 'react'
import an from '/images/an.jpg'
import an2 from '/images/an2.jpg'
import an3 from '/images/an3.jpg'
import an4 from '/images/an4.jpg'
import an5 from '/images/an5.jpg'
import an6 from '/images/an6.jpg'
import web from '/images/web.jpg'
import  download  from '/images/download.jpg'
import th3 from '/images/th3.jpg'
import th4 from '/images/th4.jpg'
import th1 from '/images/th1.jpg'
import th2 from '/images/th2.jpg'
import sb6 from '/images/sb6.jpg'


export const Home = () => {
  return (
    <>
      <div className=" px-4 ml-16 mt-16" > 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-100">
            <div className="text-16">
              <p className='text-6xl'>Give your customer human feeling touch  <span className='text-red-500'>Like Never Befor</span></p>
            </div>
            <br /><br /> <br /> <br /><br /> <br /> <br /><br />
          
            <form className="form">
              <input className='p-3 w-1/2 h-12 ' type="email" placeholder="name@email.com" class="mail" />
              <a href="#"><button className='btn border border-2 h-12 w-1/2 hover:bg-red-500 rounded'>Submit</button></a>
              <br /><br /><span> <hr /> <br /></span> <br /> <br />
              <a href="https://www.google.com/"  className="border-2 rounded   border-gray-500 py-3 px-32 "> <i class="fa fa-google"></i> sign with google</a>
              <p class="mt-3">No credit card required. Available on Mac , Window<br />IOS & Android</p>
            </form>
          </div>
          
          <div className="bg-gray-100">
            <a href=""><img className="w-100 h-full" src={web} alt="" /></a>
          </div>

        </div>
{/* ----------------------------------------------------------- */}
        <div class="container mx-auto mt-32">
          <div class="grid grid-cols-6">
            <div class="bg-gray-100">
              <marquee behavior="" direction=""><img src={an} alt="" /></marquee>
            </div>

            <div class="bg-white-200">
              <marquee behavior="" direction=""><img src={an2} alt="" /></marquee>
            </div>
    
            <div class="bg-gray-100">
              <marquee behavior="" direction=""><img src={an3} alt="" /></marquee>
            </div>
        
            <div class="bg-gray-100">
              <marquee behavior="" direction=""><img src={an4} alt="" /></marquee>
            </div>
    
            <div class="bg-gray-100">
              <marquee behavior="" direction=""><img src={an5} alt="" /></marquee>
            </div>
      
            <div class="bg-gray-100">
              <marquee behavior="" direction=""><img src={an6} alt="" /></marquee>
            </div>

          </div> 
        </div>
{/* ---------------------------------------------------------------- */}
        <div className='mt-32s'>
          <div className="items-center justify-center mt-16 text-center" >
            <h4 className="text-2xl">How<span className='text-3xl'>It Work</span></h4>
            <p className="mt-5 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolorem porro qui et ex maiores,sit praesentium iusto sapiente dolore?</p>
          </div>


          <div className="grid grid-cols-2 mt-16">
            <div>
              <img className="w-full h-full" src={download} alt="" />
            </div>

            <div className="mt-10 ml-10">
              <h4 className="text-4xl"> Task <br /><span class="text-4xl">Management</span> </h4>
              <p className="text-sm font-extralight">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad sapiente aperiam similique debitis animi dolorem, iusto voluptatem accusamus consectetur hic!</p>
              <a href=""><button className='w-1/4 p-3 border border-2 hover:bg-red-700 rounded'> view more <i className="fa fa-long-arrow-right"></i></button></a>
            </div>
          </div>
        </div>
{/* --------------------------------------------------------------------------------- */}
        <div className="grid grid-cols-2  mt-32">
          <div className='text-red'>
            <h4><span>Average Yearly Growth Rate</span> Across Our Clients We Able To Achive</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia totam, voluptatum commodi dolor praesentium sunt, qui hic molestias magni, numquam aspernatur vitae. Perspiciatis suscipit veniam eaque atque expedita? Totam, distinctio?</p>
            <hr />
          </div>

          <div className=" grid grid-cols-4">
            <div className='hover:bg-red-500 border border-2 w-48 h-48  ml-8'>
              <img className='rounded-full w-16 h-16 ml-12 mt-12'  src={th3} alt="" />
              <p className='hover:text-white-500'>Fully Secure And Hacking Free</p>
            </div><br /><br />

            <div className='hover:bg-red-500 border border-2 w-48 h-48  ml-8'>
              <img className='rounded-full w-16 h-16 ml-12 mt-16' src={th4} alt="" />
              <p>Always Having A Great Supports</p>
            </div>
          </div>
        </div>

{/* ------------------------------------------------------------------------ */}

        <div className='grid grid-cols-2 mt-16 p-2'>
          <div className='grid grid-cols-3 '>
            <div>
              <h5 className='text-green-500'>24+</h5>
              <pre>Years Of <br /><br />Experience</pre>
            </div>
            <div>
              <h5 className='text-blue-500'>3000+</h5>
              <pre>Years Of <br /><br />Experience</pre>
            </div>
            <div>
              <h5 className='text-red-500'>24M</h5>
            <pre>Years Of <br /><br />Experience</pre>
              </div>
          </div>

          <div className='grid grid-cols-2'>
              <div className='hover:bg-red-500 border border-2 w-48 h-48  ml-8'> 
                <img className='rounded-full w-16 h-16 ml-12 mt-12' src={th1} alt="" />
                <p>Fully Secure And Hacking Free</p>
              </div>

              <div className='hover:bg-red-500 border border-2 w-48 h-48  ml-8'>
                <img  className='rounded-full w-16 h-16 ml-12 mt-12' src={th2} alt="" />
                <p>Always Having A Great Supports</p>
              </div>
          </div>
        </div>
        
{/* ------------------------------------------------------------------------------------ */}

        <div className='grid grid-cols-2 bg-gray-100 mt-32'>
          <div>
            <img className='w-full ' src={download} alt="" />
          </div>

          <div className="text ml-4">
            <h5 className='text-3xl'>Cretae an<br />Automated<br /><span>By Workflow Setting</span></h5>
            <p className='mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, mollitia! Numquam deleniti ullam, eos similique alias, harum vitae earum impedit corporis maiores molestiae sunt qui cumque dignissimos tenetur quaerat quidem natus iste. Officiis natus dignissimos ipsum quis, voluptate sunt? Enim?</p>
          </div>
        </div>
{/* --------------------------------------------------------------------------------------- */}

        <div className='grid grid-cols-2 bg-gray-100 mt-32'>
          <div className='mt-16'>
            <h5 className='text-3xl'>Who Are We And What Is <br />Our Identity?</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae incidunt totam ratione aliquam perspiciatis illum facere tempora quidem quam, in culpa sequi. Et placeat iste tempore nulla hic iusto ad deleniti nam, sunt inventore explicabo? Hic a et suscipit quo.</p>
            <hr />
            <ul className='mt-4'>
              <li>Habit building in essential steps choose habit Good Thingsm.</li>
              <li>Get an overview of Habit Calendars admiral general.</li>
              <li>Start building habit with Habitify on platform to new .</li>
            </ul>
          </div>

          <div className='ml-1616'>
            <img className='ml-' src={sb6} alt="" />
          </div>
        </div>
{/* ---------------------------------------------------------------------------------------- */}

        <div className='mt-32'>
          <div className='text-center'>
            <h2 className='text-3xl'>What Our Client Says</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae iste magnam pr</p>
          </div>
          <div className='grid grid-cols-4 bg-gray mt-16' >
            <div className='mr-4 rounded'>
              <img className='rounded-full w-1/4 ml-16' src={sb6} alt="" />
              <p className='border border-200 p-2 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere quibusdam fugiat ipsa unde tenetur, aliquam harum nam obcaecati, officiis, minus veniam vero laborum eveniet.</p>
            </div>
            <div className='mr-4 rounded'>
              <img className='rounded-full w-1/4 ml-16' src={sb6} alt="" />
              <p className='border border-200 p-2 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere quibusdam fugiat ipsa unde tenetur, aliquam harum nam obcaecati, officiis, minus veniam vero laborum eveniet.</p>
            </div>
            <div className='mr-4 rounded'>
              <img className='rounded-full w-1/4 ml-16' src={sb6} alt="" />
              <p className='border border-200 p-2 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere quibusdam fugiat ipsa unde tenetur, aliquam harum nam obcaecati, officiis, minus veniam vero laborum eveniet.</p>
            </div>
            <div className='mr-4rounded '>
              <img className='rounded-full w-1/4 ml-16' src={sb6} alt="" />
              <p className='border border-200 p-2 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi facere quibusdam fugiat ipsa unde tenetur, aliquam harum nam obcaecati, officiis, minus veniam vero laborum eveniet.</p>
            </div>

          </div>
        </div>

{/* -------------------------------------------------------------------------------------------------- */}
          <div className='text-center mt-16'>
            <p className='text-3xl'>Join 75,000+ Growing Business That <br /> <span className='text-red-500'> Use Copper To Their Brand</span></p> <br />
            <a href=""><button className='btn border border-2 red p-3 w-1/6 hover:bg-red-500 rounded' >Get start with us</button></a>
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
