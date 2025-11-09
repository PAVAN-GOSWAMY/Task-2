// README.md

import React, { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import githubLogo from './assets/path.png'
import { FiMenu, FiX } from "react-icons/fi"
import profileImg from './assets/Rectangle1.png'
import WorkCard from './components/WorkCard.jsx'
import Form from './components/Form.jsx'
import instagram from './assets/Vector-4.png'
import facebook from './assets/Vector-3.png'

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='bg-[#222121] min-h-screen w-full overflow-x-hidden relative'>

      {/* Header Section */}
      <header className='flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-4 sm:py-5 fixed top-0 right-0 left-0 bg-[#222121]/95 z-50'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl text-[#ffffff]'>
          <span className='font-bold'>Emad</span>almagedy
        </h1>

        <div className="hidden lg:block">
          <Navbar />
        </div>

        <a 
          href="https://github.com/login" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img
            src={githubLogo}
            alt="GitHub Logo"
            className="hidden lg:block w-16 h-16 xl:w-20 xl:h-20 cursor-pointer hover:opacity-80 transition-opacity"
          />
        </a>

        <button
          className="lg:hidden text-2xl sm:text-3xl text-white"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu />
        </button>
      </header>

      {/* Hamburger Menu */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0  bg-opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>

          <div className="fixed top-0 right-0 h-max w-64 sm:w-80 bg-[#1e1e1e] p-6 z-50 shadow-lg">
            <div className="flex justify-end mb-6">
              <button className="text-3xl text-white" onClick={() => setMenuOpen(false)}>
                <FiX />
              </button>
            </div>
            <Navbar mobile setMenuOpen={setMenuOpen} />
          </div>
        </>
      )}

      {/* Hero Section */}
      <section id="home" className='flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10 sm:py-14 pt-22 sm:pt-26 md:pt-36'>
        <div className='text-center lg:text-left w-full lg:w-1/2 order-2 lg:order-1 px-4 sm:px-6 lg:px-0'>
          <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white mb-2 sm:mb-4'>
            Hello, I'm Emad,
          </p>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-[#A6BBCC] font-extrabold leading-tight mb-6 sm:mb-8'>
            Full stack Developer
          </h1>
          <div className='inline-block'>
            <a
              href="#contact"
              className="text-white text-xl sm:text-2xl md:text-3xl font-bold cursor-pointer hover:text-[#A6BBCC] transition-colors"
            >
              Contact Me
            </a>
            <hr className="w-32 sm:w-40 md:w-44 border-t-4 border-[#A6BBCC] rounded-full mt-2" />
          </div>
        </div>

        <div className='flex justify-center lg:justify-end w-full lg:w-1/2 order-1 lg:order-2 px-4 sm:px-6'>
          <img
            src={profileImg}
            alt="Emad Almagedy - Full Stack Developer"
            className='w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[750px] h-auto object-contain'
          />
        </div>
      </section>

      {/* About Section */}
      <div id="about" className='about-container mt-12 sm:mt-16 lg:mt-24'>

        <div className='about flex flex-col sm:flex-row justify-between items-center sm:items-center w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-6 gap-3 sm:gap-6 md:gap-8 lg:gap-12'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#A6BBCC] font-extrabold whitespace-nowrap'>
            about
          </h1>
          <div className='grow w-full sm:w-auto border-t-4 border-[#A6BBCC] rounded-full'></div>
        </div>

        <div className="paragraph max-w-6xl mx-auto mt-4 sm:mt-6 px-4 sm:px-6 md:px-10 lg:px-20 text-start text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-[#FFFFFF]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate
            tristique quam felis. Id phasellus dui orci vulputate consequat nulla
            proin. Id sit scelerisque neque, proin bibendum diam.
          </p>
        </div>

        {/* Skills */}
        <div className="skill-container flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-6 md:gap-10 lg:gap-16 xl:gap-24 mt-10 sm:mt-12 lg:mt-16 text-center text-[#FFFFFF] px-4 sm:px-6">
          {/* Frontend */}
          <div className='w-full sm:w-auto'>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4">Front-End</h1>
            <p className="text-base sm:text-lg md:text-xl font-semibold underline decoration-[#A6BBCC] decoration-4 underline-offset-6">
              60+ Hours Experience
            </p>
          </div>

          {/* Python */}
          <div className='w-full sm:w-auto'>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4">Python</h1>
            <p className="text-base sm:text-lg md:text-xl font-semibold underline decoration-[#A6BBCC] decoration-4 underline-offset-6">
              4 Years Experience
            </p>
          </div>

          {/* Machine Learning */}
          <div className='w-full sm:w-auto'>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-3 sm:mb-4">Machine Learning</h1>
            <p className="text-base sm:text-lg md:text-xl font-semibold underline decoration-[#A6BBCC] decoration-4 underline-offset-6">
              120+ Hours Experience
            </p>
          </div>
        </div>
      </div>

      {/* Work Section */}
      <div id="work" className='work-container mt-12 sm:mt-16 lg:mt-24'>
        
        <div className='about flex flex-col sm:flex-row justify-between items-center sm:items-center w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-6 gap-3 sm:gap-6 md:gap-8 lg:gap-12'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#A6BBCC] font-extrabold whitespace-nowrap'>
            work
          </h1>
          <div className='grow w-full sm:w-auto border-t-4 border-[#A6BBCC] rounded-full'></div>
        </div>

        <div className="paragraph max-w-6xl mx-auto mt-4 sm:mt-6 px-4 sm:px-6 md:px-10 lg:px-20 text-start text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-[#FFFFFF]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate
            tristique quam felis. Id phasellus dui orci vulputate consequat nulla
            proin. Id sit scelerisque neque, proin bibendum diam.
          </p>
        </div>

        <div className='cards-container flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8 mt-8 sm:mt-12 px-4 sm:px-6'>
          <WorkCard />
          <WorkCard />
        </div>
      </div>

      {/* Contact Me Section */}
      <div id="contact" className='contact-me-container mt-12 sm:mt-16 lg:mt-24'>

        <div className='about flex flex-col sm:flex-row justify-between items-center sm:items-center w-full px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-6 gap-3 sm:gap-6 md:gap-8 lg:gap-12'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#A6BBCC] font-extrabold whitespace-nowrap'>
            contact Me
          </h1>
          <div className='grow w-full sm:w-auto border-t-4 border-[#A6BBCC] rounded-full'></div>
        </div>

        <div className="paragraph max-w-6xl mx-auto mt-4 sm:mt-6 px-4 sm:px-6 md:px-10 lg:px-20 text-start text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed text-[#FFFFFF]">
          <p>
            I would love to hear about your project and how I can help. Please fill in the form, and I'll get back to you as soon as possible.
          </p>
        </div>

        <div className='cards-container flex flex-wrap justify-center gap-8 mt-8 sm:mt-12'>
          <Form />
        </div>
      </div>

      {/* Footer */}
      <footer className='flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-4 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-8 sm:py-10 mt-12 sm:mt-16 lg:mt-24'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl text-[#ffffff]'>
          <span className='font-bold'>Emad</span>almagedy
        </h1>

        <div className='flex gap-4 sm:gap-6 items-center'>
          <a 
            href="https://www.facebook.com/login" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Facebook"
          >
            <img 
              src={facebook} 
              alt="facebook" 
              className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 cursor-pointer hover:opacity-80 transition-opacity' 
            />
          </a>
          
          <a 
            href="https://www.instagram.com/accounts/login/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit Instagram"
          >
            <img 
              src={instagram} 
              alt="instagram" 
              className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 cursor-pointer hover:opacity-80 transition-opacity' 
            />
          </a>
          
          <a 
            href="https://github.com/login" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Visit GitHub"
          >
            <img 
              src={githubLogo} 
              alt="github" 
              className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 cursor-pointer hover:opacity-80 transition-opacity' 
            />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default App




