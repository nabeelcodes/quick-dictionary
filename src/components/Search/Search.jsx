import React from "react";
import "./Search.scss";

const Search = (props) => {
   const handleChange = (event) => {
      event.preventDefault();
      props.onChange(event.target.value);
   };

   return (
      <form>
         <input className='inputText' type='text' placeholder='Search for a word...' onChange={handleChange} autoFocus />
      </form>
   );
};

export default Search;
