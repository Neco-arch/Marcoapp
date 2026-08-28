import './App.css'
import { useState } from 'react'
import Progressring from './components/Progress.jsx'
import LogFood from './components/Logfood.jsx'



function App() {

  return (
    <>
    <div>
      <div className='Header'>
      <h1>Fitness Buddy</h1>
      <h2>Everything you need is here</h2>
      </div>
      <div className='Progress_wrapper'>
        <h2>Today Progress </h2>
        <div className='Progress_div'>
        <Progressring Calories={100}></Progressring>
      </div>
      </div>
        <LogFood></LogFood>
        <div>
          
        </div>
    </div>
    </>
  )


}

export default App
