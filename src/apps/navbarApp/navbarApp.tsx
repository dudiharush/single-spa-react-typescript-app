import React from 'react';
import './navbarApp.css';

const Navbar: React.FC = () => {
  return (
      <div className='navbar-app'>
        <div onClick={()=>{window.location.assign('/app1')}}>show app1</div>
        <div onClick={()=>{window.location.assign('/app2')}}>show app2</div>
      </div>
  );
}

export default Navbar;
