import React from "react";
import "./Header.scss";
import Toggle from "../Toggle/Toggle";

const Header = () => {
   return (
      <header className='mainHeader'>
         <nav className='navbar'>
            <div className='navbar_logo'>quickDictionary</div>
            <div className='navbar_menu'>
               <div className='navbar_item'>About</div>
               <Toggle />
            </div>
         </nav>
      </header>
   );
};

export default Header;
