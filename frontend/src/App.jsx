import './App.css'

// Components
import Progressring from './components/Progress.jsx'
import LogFood from './components/Logfood.jsx'
import CaloriesUI from './components/Caloriescounting.jsx'
import ExceriseUI from './components/Logexcerise.jsx'



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
        <div className='Excerise_wrapper'>
          <ExceriseUI></ExceriseUI>
          <CaloriesUI></CaloriesUI>
        </div>
    </div>
    </>
  )
}

export default App
