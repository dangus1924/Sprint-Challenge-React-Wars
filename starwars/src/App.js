import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import Cards from './Cards'
import './App.css';

const App = () => {
  const [data, setData] = useState(' ');
  
  useEffect(() => {
    axios.get('https://swapi.co/api/people/5/')
    .then(success => {
      console.log('request completed')
      console.log('data', success.data)
      console.log('results', success.data.results)
      setData(success.data.results)
    })
    .catch(failure => {
      console.log('unable to complete the request')
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <Cards data={data}/>
    </div>
  );
}

export default App;
