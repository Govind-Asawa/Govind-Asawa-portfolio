import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const links = [
  {
    name: 'home',
    id: '#',
  },
  {
    name: 'skills',
    id: '#',
  },
  {
    name: 'projects',
    id: '#',
  },
  {
    name: 'experience',
    id: '#',
  },
  {
    name: 'education',
    id: '#',
  },
  {
    name: 'contact',
    id: '#',
  },
];
export default function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className='flex justify-between items-center px-4 py-2 fixed text-white bg-black w-full h-20'>
      <div>
        <h1 className='text-5xl font-signature ml-2'>Govind</h1>
      </div>
      <div className='hidden md:flex gap-4 p-2 capitalize items-center text-gray-500 font-medium'>
        {links.map((ele, i) => {
          return (
            <Link
              key={i}
              activeClass='text-white'
              to={ele.id}
              className='hover:text-white transition-all ease-in-out duration-100 cursor-pointer'
            >
              {ele.name}
            </Link>
          );
        })}
      </div>
      <div
        onClick={() => setNav((prevNav) => !prevNav)}
        className='md:hidden flex pr-2 cursor-pointer text-gray-500'
      >
        {nav ? <FaTimes className='w-7 h-7' /> : <FaBars className='w-7 h-7' />}
      </div>
      {nav && (
        <div className='absolute top-14 right-8 z-10 h-fit flex flex-col min-w-32 justify-center items-center gap-2 px-4 py-4 bg-gradient-to-b from-black to-gray-800 rounded-lg'>
          {links.map((ele, i) => {
            return (
              <Link
                key={i}
                to={ele.id}
                className='flex items-center justify-center px-2 w-full py-1 text-gray-400 hover:text-white transition-all ease-in-out duration-100 rounded-full cursor-pointer'
              >
                {ele.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
