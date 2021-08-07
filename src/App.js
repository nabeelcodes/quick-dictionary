import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";

function App() {
   const [definition, setDefinition] = useState([]);

   const dictionaryApi = async () => {
      try {
         const apiData = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en_US/hello");

         setDefinition(apiData.data); // Updating the state with the data array
      } catch (error) {
         console.log(error);
      }
   };

   // console.log(definition);

   useEffect(() => {
      dictionaryApi();
   }, []);

   return (
      <Fragment>
         <Header />
      </Fragment>
   );
}

export default App;
