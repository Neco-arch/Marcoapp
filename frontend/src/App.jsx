import './App.css'
import { useState } from 'react'
import Progressring from './components/Progress.jsx'
import LogFood from './components/Logfood.jsx'



function App() {

  return (
    <>
    <div>
      <h1>Fitness Buddy</h1>
      <div className='Progress_wrapper'>
        <h2>Today Progress </h2>
        <div className='Progress_div'>
        <Progressring Calories={100}></Progressring>
      </div>
      </div>
      <div className='Log_Food_Excersice'>
        <LogFood></LogFood>
        <div className='LogExcerise'>
        </div>
      </div>
    </div>
    </>
  )


}

export default App
