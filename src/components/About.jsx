import { IoIosArrowRoundForward } from 'react-icons/io';
import { FaRegFilePdf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import AboutItem from './AboutItem';
import SkillItem from './SkillItem';
import aboutImg from '../assets/aboutImg.jpg';
import { SKILLS } from '../constants';

export default function About() {
  return (
    <section
      className='section-padding bg-black text-white border-b border-neutral-800'
      id='about'
    >
      <div className='flex flex-col px-2 md:px-10'>
        <div className='flex justify-start sm:justify-center items-start'>
          <div className='flex flex-1 justify-start gap-4'>
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              src={aboutImg}
              alt='about profile'
              className='hidden md:flex md:w-1/5 md:h-1/5 rounded-md opacity-70'
            />
            <div className='flex flex-col gap-4 flex-1'>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='flex flex-col gap-2 border-b border-gray-600 pb-3'
              >
                <h3 className='text-2xl font-light tracking-tight capitalize'>
                  Govind asawa
                </h3>
                <p className='text-md capitalize text-gray-500'>
                  software engineer
                </p>
                <p className='text-sm capitalize text-gray-500'>
                  MS CS @ University of North Texas '2025
                </p>
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='w-full grid grid-cols-1 grid-flow-row justify-items-start sm:grid-cols-2 sm:gap-x-8 h-fit p-2'
              >
                <AboutItem tag='First name' value='govind' />
                <AboutItem tag='last name' value='asawa' />
                <AboutItem
                  tag='email'
                  value='govindasawa23@gmail.com'
                  valueCase='normal-case'
                />
                <AboutItem
                  tag='DOB'
                  tagCase='uppercase'
                  value='April 23, 1999'
                />
                <AboutItem tag='Address' value='Denton, Texas' />
                <AboutItem tag='Languages' value='English, Hindi, Telugu' />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='flex justify-center md:justify-start flex-wrap gap-4 mt-2 font-light'
              >
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
              </motion.div>
            </div>
          </div>
        </div>
        <div className='mt-20 grid gap-2 grid-cols-1 grid-flow-row justify-items-start sm:grid-cols-2 md:grid-cols-3'>
          {SKILLS.map((skill, i) => {
            return (
              <SkillItem
                key={i}
                skillname={skill.name}
                percent={skill.percent}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
