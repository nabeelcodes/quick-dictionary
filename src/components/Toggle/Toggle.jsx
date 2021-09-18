import React from "react";

function turnDarkModeON() {
   //code
}

const Toggle = () => {
   return (
      <div className='toggle_switch'>
         <button onClick={turnDarkModeON}>Dark Mode</button>
      </div>
   );
};

export default Toggle;
