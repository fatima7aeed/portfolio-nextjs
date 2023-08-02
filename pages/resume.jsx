import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Fatima | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/logo-4.png' />

      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Fatima Saeed</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/fatima-saeed-b3775b25b/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/fatima7aeed'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Complex Problem-Solving <span className='px-1'>|</span> Strong Interpersonal Abilities{' '}
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Complex Problem-Solving</p>
            <p className='py-2'>Strong Interpersonal Abilities</p>
          </div>
        </div>
        <p>
        Analytical, innovative, and motivated student with a background in teaching
        and customer care service. Currently pursuing a front-end development course,
        I am an empathetic and consistent individual. I excel in critical thinking,
        idea generation, and optimizing efficiencies with a strong passion for web development.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>Version control
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
          </p>
          {/* <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p> */}
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Education
        </h5>
        {/* Education */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Bachelor in Biochemistry 
            </span>
            <span className='px-2'>|</span>Karachi, Pakistan
          </p>
          <p className='py-1 italic'>University of Karachi(2021 - Current)</p>
          {/* <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Collaborated effectively, delivering user-centric front-end web designs by utilizing strong communication
            and problem-solving skills.
            </li>
            <li>
            Created visually polished and intuitive web experiences by employing empathy and attention to detail.
            </li>
          </ul> */}
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Front-End Web Development Certification 
            </span>
            <span className='px-2'>|</span>Karachi, Pakistan
          </p>
          <p className='py-1 italic'>Coursera(2022 - Current)</p>
          {/* <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Collaborated effectively, delivering user-centric front-end web designs by utilizing strong communication
            and problem-solving skills.
            </li>
            <li>
            Created visually polished and intuitive web experiences by employing empathy and attention to detail.
            </li>
          </ul> */}
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            IBEX
            </span>
            <span className='px-2'>|</span>Karachi, Pakistan
          </p>
          <p className='py-1 italic'>Customer care Service(2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Utilized strong communication and problem-solving skills to deliver excellent customer service
            </li>
            <li>
            Developed empathy and attention to detail while resolving customer inquiries and addressing concerns.
            </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              TEACHING
            </span>
            <span className='px-2'>|</span>Karachi, Pakistan
          </p>
          <p className='py-1 italic'>(2020 - 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Nurtured the minds of young students, developing valuable communication, patience, and adaptability skills.
            </li>
            <li>
            Created a supportive and engaging learning environment using interactive teaching methods.
            </li>
          </ul>
        </div>

        
        {/* <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5> */}
      
        {/* Experience */}
        {/* <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>CITY OF SHERMAN, TX</span>
            <span className='px-2'>|</span>Sherman, TX
          </p>
          <p className='py-1 italic'>Paramedic / Firefighter (2010 – 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default resume;
