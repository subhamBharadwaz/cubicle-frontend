import React, { useState } from 'react';
// Router
import { Link } from 'react-router-dom';
// React icons
import * as BiIcons from 'react-icons/bi';
import * as AiIcons from 'react-icons/ai';
import { navbarItems } from './navbarItems';
import { IconContext } from 'react-icons';
// Styles and Animations
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Nav = () => {
  const [sidebar, setSidebar] = useState(false);

  // functions
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Navbar>
          <Link to='#' className='menu-bars main'>
            <BiIcons.BiMenuAltLeft onClick={showSidebar} />
          </Link>
          <div className='logo'>
            <h1>Cubicle</h1>
          </div>
        </Navbar>
        <NavMenu className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul onClick={showSidebar} className='nav-menu-items'>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {navbarItems.map((item, idx) => (
              <li key={idx} className={item.className}>
                <Link to={item.path}>
                  {item.icon}
                  <span className='nav-span'>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </NavMenu>
      </IconContext.Provider>
    </>
  );
};

const Navbar = styled(motion.div)`
  background-color: #121212;
  color: #fff;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu-bars.main {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
  }
  .logo {
    margin-right: 45%;
  }
`;

const NavMenu = styled(motion.nav)`
  .menu-bars {
    margin-left: 20px;
  }
  z-index: 100;
`;

export default Nav;
