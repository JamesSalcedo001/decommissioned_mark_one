import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Main/Home'
import Environment from './Main/Environment'
import Languages from './Main/Languages'


function App() {

  return (
    <div>
      <Routes>
        <Route path="/languages" element={<Languages />}/>
        <Route path="/environment" element={<Environment />}/>
        <Route path="/" element={<Home />}/>
      </Routes>

    </div>
  )
}

export default App


