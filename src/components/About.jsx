import { IoIosArrowRoundForward } from 'react-icons/io';
import { FaRegFilePdf } from 'react-icons/fa';
import AboutItem from './AboutItem';
import aboutImg from '../assets/aboutImg.jpg';

export default function About() {
  return (
    <section className='section-padding bg-black text-white' id='about'>
      <div className='flex px-2 md:px-10 justify-start sm:justify-center items-start'>
        <div className='flex flex-1 justify-start gap-4'>
          <img
            src={aboutImg}
            alt='about profile'
            className='hidden md:flex md:w-1/5 md:h-1/5 rounded-md opacity-70'
          />
          <div className='flex flex-col gap-4 flex-1'>
            <div className='flex flex-col gap-2 border-b border-gray-600 pb-3'>
              <h3 className='text-2xl font-light tracking-tight capitalize'>
                Govind asawa
              </h3>
              <p className='text-md capitalize text-gray-500'>
                software engineer
              </p>
            </div>
            <div className='w-full grid grid-cols-1 grid-flow-row justify-items-start sm:grid-cols-2 sm:gap-x-8 h-fit p-2'>
              <AboutItem tag='First name' value='govind' />
              <AboutItem tag='last name' value='asawa' />
              <AboutItem
                tag='email'
                value='govindasawa23@gmail.com'
                valueCase='normal-case'
              />
              <AboutItem tag='DOB' tagCase='uppercase' value='April 23, 1999' />
              <AboutItem tag='Address' value='Denton, Texas' />
              <AboutItem tag='Languages' value='English, Hindi, Telugu' />
            </div>
            <div className='flex justify-center sm:justify-start flex-wrap gap-4 mt-4 font-light'>
              <div className='group p-[0.1rem] bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 rounded-full'>
                <a
                  href='https://drive.google.com/file/d/1Boxp2r19OiWXlWwG-9mc0RvLz3X0eHH5/view?usp=drive_link'
                  target='_blank'
                  className='flex items-center gap-1 px-4 py-2 rounded-full bg-black capitalize cursor-pointer'
                >
                  <FaRegFilePdf className='w-5 h-5 group-hover:text-red-400 duration-100' />
                  <p>view Resume</p>
                </a>
              </div>
              <button className='group flex gap-2 w-fit cursor-pointer px-4 py-2 border-white-500 border rounded-full hover:bg-white hover:text-black hover:font-medium transition-all duration-100 ease-in-out '>
                <span className='capitalize'>Let's Connect</span>
                <IoIosArrowRoundForward className='w-6 h-6 group-hover:rotate-90 duration-100' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}