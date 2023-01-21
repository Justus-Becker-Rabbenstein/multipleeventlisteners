import './App.css';
import React, { useEffect, useState } from 'react';
import Card from './Card';


function App() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      const dataFilteredResult = data.results;
      const newData = dataFilteredResult.map(item => {return {...item, isOpend: false}})
      setApiData(newData);
    }
    fetchData();

    // function only called once because of empty dependency array
  }, []);



  return (
    <div>
   {apiData.map((char) => {
        return (
          <Card char={char}/>
        );
      })}
      </div>
  )
}

export default App;