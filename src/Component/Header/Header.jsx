import './Header.css';
import React from 'react';

const Header = () => {
    return (
        <nav className='header'>
          <h1 className='shawon'>Shawon's</h1>
          <div className='shawon'>
               <a href="/Home">Home</a>
           
                <a href="/Shop">Shop</a>
            
                <a href="/Customer">Customer</a>
           </div>
       </nav>
    );
};

export default Header;