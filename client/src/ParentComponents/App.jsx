import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Main/Home'
import Environment from './Main/Environment'
import Language from './Main/Language'
import Framework from './Main/Framework'
import Database from './Main/Database'
import Header from './Header'
import EnvironmentEnv from '../ChildrenComponents/EnvironmentEnv'
import EnvironmentNode from '../ChildrenComponents/EnvironmentNode'
import EnvironmentRuby from '../ChildrenComponents/EnvironmentRuby'
import EnvironmentPython from '../ChildrenComponents/EnvironmentPython'
import EnvironmentSQL from '../ChildrenComponents/EnvironmentSQL'

function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/env" element={<EnvironmentEnv />}/>
        <Route path="/env/node" element={<EnvironmentNode />}/>
        <Route path="/env/ruby" element={<EnvironmentRuby />}/>
        <Route path="/env/python" element={<EnvironmentPython />}/>
        <Route path="/env/sql" element={<EnvironmentSQL />}/>
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


