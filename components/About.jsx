import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          "Coding: A flame that consumed me."
          </p>
          <p className='py-2 text-gray-600'>
            I had always dreamed of becoming a doctor, using my skills to help others and make a positive impact on people's lives. With my passion for biology and the pursuit of medical knowledge, I envisioned a fulfilling career in healthcare. However, life took an unexpected turn, and I found myself immersed in the world of coding.
            </p>
          <p className='py-2 text-gray-600'>
            As I began my journey, I couldn't help but feel a bit uncertain about this new path. Yet, the moment I started learning, I felt a spark ignite within me. It was like finding the missing puzzle piece that I never knew I needed. From my first JavaScript tutorial to exploring React and version control, I became captivated by the creative and problem-solving aspects of web development.
            </p>
          <p className='py-2 text-gray-600'>
            Creating web pages that adapt flawlessly to different devices, incorporating responsive design principles, gave me an oddly satisfying feeling. It reminded me of how, like those web pages, I am moldable and constantly evolving, while still holding on to my creativity and individuality.
            </p>
          <p className='py-2 text-gray-600'>
            While medicine might have been my initial dream, coding has opened up a whole new world for me. I find joy in quickly learning new skills and mastering programming languages like HTML, CSS, and JavaScript. React has also become an exciting playground for my creative mind.
            </p>
          <p className='py-2 text-gray-600'>
            As a beginner, I'm still enthusiastically exploring different programming languages, frameworks, and principles, eager to weave them into the coding web in my mind.
            </p>
          <p className='py-2 text-gray-600'>
          Although I might have deviated from my original dream, I now embrace my new passion for coding with the same determination and dedication I once had for medicine. Who knows, maybe one day I'll find a way to combine both worlds and create innovative medical applications that can improve healthcare for everyone.
          </p>
          
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
