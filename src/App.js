import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import "./App.scss";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";

function App() {
   const [wordQuery, setWordQuery] = useState([]);
   const [userInputWord, setUserInputWord] = useState("dictionary");
   const [userInputLanguage, setUserInputLanguage] = useState("en_US");

   const dictionaryApi = async () => {
      try {
         const dataFromApi = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${userInputLanguage}/${userInputWord}`);
         setWordQuery(dataFromApi.data);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      dictionaryApi();
   }, [userInputWord, userInputLanguage]);

   return (
      <Fragment>
         <Header />

         <main className='searchAndLanguage'>
            <Search onChange={(value) => console.log(value)} />
            <LanguageSelector onChange={(value) => console.log(value)} />
         </main>

         {wordQuery[0] !== undefined && <div style={{ color: "white" }}>{wordQuery[0].meanings[0].definitions[0].definition}</div>}
      </Fragment>
   );
}

export default App;
