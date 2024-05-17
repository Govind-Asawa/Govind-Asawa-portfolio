import { IoIosArrowRoundForward } from 'react-icons/io';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

import heroImg from '../assets/heroImg_grayBG.png';

export default function Home() {
  return (
    <div
      name='home'
      className='h-screen w-full pt-24 flex flex-col gap-4 px-4 py-2 justify-start items-center bg-gradient-to-b from-black via-black to-gray-800 text-white'
    >
      <div className='flex flex-col justify-center items-center w-full gap-2'>
        <img
          src={heroImg}
          alt='my profile'
          className='w-32 h-32 lg:w-48 lg:h-48'
        />
        <h2 className='text-4xl capitalize tracking-tight font-thin lg:text-6xl'>
          Govind Asawa
        </h2>
      </div>
      <div className='flex flex-col w-full gap-2 justify-center items-center'>
        <h3 className='text-xl lg:text-2xl w-fit capitalize bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent'>
          Software engineer
        </h3>
        <p className='text-sm max-w-xl font-light tracking-tight sm:w-full md:w-3/5 md:ml-6 text-gray-400'>
          A Full stack developer & Machine Learning enthusiast with a passion for
          building innovative solutions. I thrive on solving complex problems to create cutting-edge applications.
        </p>
      </div>
      <button className='group flex gap-2 w-fit cursor-pointer px-4 py-2 border-white-500 border rounded-full hover:bg-white hover:text-black hover:font-medium transition-all duration-100 ease-in-out '>
        <span className='uppercase'>Hire me</span>
        <IoIosArrowRoundForward className='w-6 h-6 group-hover:rotate-90 duration-100' />
      </button>
      <div className='flex gap-2'>
        <a href='https://www.linkedin.com/in/govind-asawa/' target='_blank'>
          <FaLinkedin className='w-6 h-6' />
        </a>
        <a href='https://github.com/Govind-Asawa' target='_blank'>
          <FaGithub className='w-6 h-6' />
        </a>
      </div>
    </div>
  );
}
