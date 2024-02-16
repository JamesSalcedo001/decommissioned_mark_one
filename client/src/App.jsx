import './App.css'
import { Route, Routes } from 'react-router-dom'
import Environment from './Environment'
import Home from './Home'
import Header from './Header'

function App() {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/environment" element={<Environment />}/>
        <Route path="/" element={<Home />}/>
      </Routes>

    </div>
  )
}

export default App
