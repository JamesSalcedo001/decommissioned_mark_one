import './App.css'
import { Route, Routes } from 'react-router-dom'
import Environment from './Environment'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/environment" element={<Environment />}/>
        <Route path="/" element={<h1>Hello</h1>}/>
      </Routes>

    </div>
  )
}

export default App
