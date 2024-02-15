import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/test" element={<h1>test route</h1>}/>
        <Route path="/" element={<h1>Hello</h1>}/>
      </Routes>

    </div>
  )
}

export default App
