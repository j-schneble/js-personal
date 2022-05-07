import {FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { VscLocation } from 'react-icons/vsc';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { GiClick } from 'react-icons/gi'




const Sidebar = () => {
 


  return (
    <div>
        <div className='py-3 my-4 ' style={{marginLeft:'-1rem', marginRight: '-1rem'}}>
        <h3 className='my-3 text-4xl font-normal tracking-wider font-encode'>
            <span className='font-light text-white'>Jack Schneble </span>
           
        </h3>
        </div>
        <p className='px-2 py-1 my-3 font-thin text-white bg-opacity-50 border-l-2 border-r-2 rounded-lg border-green bg-zincc' >Developer</p>
        <p 
            className='flex justify-center px-2 py-1 my-3 font-thin tracking-wider text-white bg-opacity-50 border-l-2 border-r-2 rounded-md border-green bg-zincc '  >
            <VscLocation className='w-6 h-6 text-green'/> St.Petersburg, Florida
        </p>
        {/* //social icons */}
        <div className='py-4 my-5 bg-opacity-50 border-t-2 border-b-2 border-green bg-zinclight ' style={{marginLeft:'-1rem', marginRight: '-1rem'}}>
        <div className='flex justify-around w-9/12 mx-auto my-5 md:w-full'>
            <a href="">
                <BsLinkedin className='border-2 border-black rounded-md cursor-pointer w-9 h-9' style={{color:"white"}} />
            </a>
            <a href="">
                <BsFillPersonLinesFill className='border-2 border-black border-opacity-75 rounded-md cursor-pointer w-9 h-9' style={{color: "white"}} />
            </a>
            <a href="">
                <BsGithub className='border-2 border-black rounded-full cursor-pointer w-9 h-9' style={{color: "white"}} />
            </a>
            
        </div>
        </div>

     
      
    
    {/* Email Button */}
    <div className='flex items-center justify-center'>
    <button className='w-full px-5 py-2 my-3 text-white border-4 border-white border-opacity-50 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-red-600 hover:to-red-700 focus:outline-none '
    onClick={()=>window.open('mailto:jack@jackschneble.com')}>  Contact Me  </button></div>
  
     <button className='px-6 py-1 my-8 text-white bg-opacity-50 border-2 rounded-full border-green w-5/11 bg-zincc hover:from-blue-500 hover:to-green-500 hover:scale-105'>UI</button>
    </div>
   
 
  )
}

export default Sidebar