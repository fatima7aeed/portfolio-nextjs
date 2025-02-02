import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import PortfolioImg from '../public/assets/projects/portfolio.png';
import hairdayImg from '../public/assets/projects/hairday.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem
  title='My Portfolio'
  backgroundImg={PortfolioImg}
  projectUrl='https://fatimasaeed.vercel.app/' // Add your portfolio URL here
  tech='React JS'
          />
          <ProjectItem
            title='Hair Day'
            backgroundImg={hairdayImg}
            projectUrl='https://hairday.vercel.app/'
            tech='HTML & CSS'

          // />
          // <ProjectItem
          //   title='Netflix App'
          //   backgroundImg={netflixImg}
          //   projectUrl='/netflix'
          //   tech='React JS'

          // />
          // <ProjectItem
          //   title='Twitch UI'
          //   backgroundImg={twitchImg}
          //   projectUrl='/twitch'
          //   tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
