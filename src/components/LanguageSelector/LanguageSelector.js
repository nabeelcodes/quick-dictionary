import React from "react";
import category from "../../data/category.js";
import "./LanguageSelector.scss";

const LanguageSelector = (props) => {
   const handleSelect = (event) => {
      event.preventDefault();
      props.onChange(event.target.value);
   };

   return (
      <aside className='languageBox'>
         <label className='selectLabel'>Select your desired language :</label>
         <select className='select' onChange={handleSelect}>
            {category.map((eachLanguage) => {
               return (
                  <option key={eachLanguage.id} value={eachLanguage.label} className='select_options'>
                     {eachLanguage.value}
                  </option>
               );
            })}
         </select>
      </aside>
   );
};

export default LanguageSelector;
