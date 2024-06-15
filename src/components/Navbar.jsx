import React, { useState, useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { navLinks } from '../constants';
import hamburger from '../assets/icons/hamburger.svg';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

const Navbar = () => {
  const location = useLocation();
  const isServiceRequest = location.pathname === '/service-request';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const navAnimation = gsap.fromTo(navRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 });
    
    if (isMenuOpen) {
      gsap.fromTo(menuRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5 });
    }

    return () => {
      navAnimation.kill();
    };
  }, [isMenuOpen]);

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav ref={navRef} className='flex justify-between items-center max-container'>
        <Link smooth to='/#'>
          {/* <img src={headerLogo} alt="logo" width={130} height={29} /> */}
        </Link>
        <ul className={`flex-1 flex ml-[150px] justify-start items-center gap-16 max-lg:hidden ${isServiceRequest ? 'text-white font-medium' : ''}`}>
          {
            navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  smooth
                  to={item.href}
                  className={`font-montserrat leading-normal text-lg ${isServiceRequest ? 'text-white font-medium' : 'text-slate-gray'}`}>
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
        <div className='hidden max-lg:block'>
          <button onClick={toggleMenu}>
            <img
              src={hamburger}
              alt='hamburger'
              width={25}
              height={25}
            />
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul ref={menuRef} className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-start p-4">
          {
            navLinks.map((item) => (
              <li key={item.label} className="w-full">
                <Link
                  smooth
                  to={item.href}
                  className="block w-full py-2 px-4 text-lg font-montserrat text-slate-gray hover:bg-gray-200"
                  onClick={toggleMenu}
                >
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
