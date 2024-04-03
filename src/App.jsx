import './App.css'
import ComposedChart from './components/ComposedChart/ComposedChart'
import LineChart from './components/LIneChart/LineChart'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import Phones from './components/Phones/Phones'
import PriceOptions from './components/PriceOptions/PriceOptions'

function App() {

  return (
    <>
      <h1 className='text-4xl bg-yellow-500'>Vite + React</h1>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <ComposedChart></ComposedChart>
      <Phones></Phones>
    </>
  )
}

export default App
