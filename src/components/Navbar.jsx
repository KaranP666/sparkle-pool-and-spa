import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { navLinks } from '../constants';
import hamburger from '../assets/icons/hamburger.svg';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
  const isServiceRequest = location.pathname === '/service-request';
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
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
                  className={`font-montserrat leading-normal text-lg text-slate-gray ${isServiceRequest ? 'text-white font-medium' : 'text-slate-gray'}`}>
                  {item.label}
                </Link>
              </li>
            ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img
            src={hamburger}
            alt='hamburger'
            width={25}
            height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
