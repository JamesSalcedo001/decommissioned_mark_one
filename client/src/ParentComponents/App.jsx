import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Main/Home'
import Environment from './Main/Environment'
import Language from './Main/Language'
import Framework from './Main/Framework'
import Database from './Main/Database'
import Header from './Header'

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/databases" element={<Database />}/>
        <Route path="/frameworks" element={<Framework />}/>
        <Route path="/languages" element={<Language />}/>
        <Route path="/environment" element={<Environment />}/>
        <Route path="/" element={<Home />}/>
      </Routes>

    </div>
  )
}

export default App


