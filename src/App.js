import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import cats from './img/catfact.png'


function App() {

  const [catFact, setCatFact] = useState();

  const handleClick = () => {
    Axios.get('https://catfact.ninja/fact').then((res) => {
      setCatFact(res.data.fact)
    })
  }

  useEffect(() => {

    handleClick();
    // eslint-disable-next-line
  }, [])



  return (
    <div className='App '>
      <div className='btnArea'>
        <h1>Cat Fact Generator</h1>
        <p>Generate a random fact by clicking the button</p>
        <button onClick={handleClick}>Generate a fact</button>
      </div>

      <div className='factArea'>
        <p>{catFact}</p>
        <img src={cats} alt='sorry' />
      </div>

    </div>
  )

}

export default App;

