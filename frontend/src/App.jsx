import './App.css'

// Components
import Progress from './components/Progress.jsx'
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
        <Progress Calories={100}></Progress>
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
