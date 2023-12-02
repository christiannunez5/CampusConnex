import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Home} from './Pages/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
