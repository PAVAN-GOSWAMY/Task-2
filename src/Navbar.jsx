import React from 'react'

const Navbar = ({ mobile, setMenuOpen }) => {
  const handleClick = () => {
    if (mobile && setMenuOpen) setMenuOpen(false)
  }

  return (
    <nav>
      <ul className={`${mobile ? 'flex flex-col gap-4 text-lg' : 'flex gap-16 text-xl'} font-medium list-none`}>
        <li className="hover:text-[#A6BBCC] transition-colors text-2xl sm:text-2xl lg:text-3xl text-[#ffffff] cursor-pointer">
          <a href="#home" onClick={handleClick}>Home</a>
        </li>

        <li className="hover:text-[#A6BBCC] transition-colors text-2xl sm:text-2xl lg:text-3xl text-[#ffffff] cursor-pointer">
          <a href="#about" onClick={handleClick}>About</a>
        </li>

        <li className="hover:text-[#A6BBCC] transition-colors text-2xl sm:text-2xl lg:text-3xl text-[#ffffff] cursor-pointer">
          <a href="#work" onClick={handleClick}>Work</a>
        </li>

        <li className="hover:text-[#A6BBCC] transition-colors text-2xl sm:text-2xl lg:text-3xl text-[#ffffff] cursor-pointer">
          <a href="#contact" onClick={handleClick}>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar

