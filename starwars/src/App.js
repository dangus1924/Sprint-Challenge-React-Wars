import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [characterItem, setCharacterItem] = useState(' ');
  
  useEffect(() => {
    axios.get('https://swapi.co/api/people/5/')
    .then(success => {
      console.log('request completed')
      console.log('data', success.data)
      console.log('results', success.data.results)
      setCharacterItem(success.data.results)
    })
    .catch(failure => {
      console.log('unable to complete the request')
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
    </div>
  );
}

export default App;
