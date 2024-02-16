import './App.css'
import { Route, Routes } from 'react-router-dom'
import Environment from './Environment'
import Home from './Home'

function App() {

  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/environment" element={<Environment />}/>
        <Route path="/" element={<Home />}/>
      </Routes>

    </div>
  )
}

export default App
