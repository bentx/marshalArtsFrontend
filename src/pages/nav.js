import { padding } from '@mui/system';
import React, { useState } from 'react';
import logo from '../assets/logo.svg';
import shailesh from '../assets/shailesh.png';
import MenuIcon from '@mui/icons-material/Menu';
import './nav.css';
const Nav = () => {
  const [mobNav, setMobNav] = useState(true);
  const [mobNavstyle, setMobNavstylle] = useState('close');
  const handleNavigation = () => {
    setMobNav(!mobNav);
    if (mobNav) {
      setMobNavstylle('open');
    } else {
      setMobNavstylle('');
    }
    console.log(mobNav);
  };
  return (
    <div>
      <div className='primaryHeader'>
        <div className='logo'>
          <div style={{ display: 'flex' }}>
            <img src={shailesh} style={{ width: '160px', height: '110px' }} />
          </div>
        </div>
        <div>
          <div onClick={() => handleNavigation()} className={` ${mobNavstyle} mobile-nav`}>
            <MenuIcon />
          </div>
          <nav>
            <ul data-vi className={`${mobNavstyle} primaryNavigiation flex`} style={{ display: 'flex' }}>
              <li>
                <a style={{ textDecoration: 'none', color: 'black' }} href='/'>
                  <span className='numeric'>00</span>Admin
                </a>
              </li>
              <li>
                <a style={{ textDecoration: 'none', color: 'black' }} href='/student'>
                  <span className='numeric'>01</span>Student
                </a>
              </li>
              <li>
                <a style={{ textDecoration: 'none', color: 'black' }} href='/master'>
                  <span className='numeric'>02</span>Master
                </a>
              </li>
              {/* <li>
              <a style={{ textDecoration: 'none', color: 'black' }} href='/'>
                <span className='numeric'>00</span>Home
              </a>
            </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Nav;
