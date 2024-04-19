import './App.css'
import About from './components/about/About'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/navBar/NavBar'
import Projects from './components/projects/Projects'
import Home from './components/home/Home'

function App() {

  return (
    <>
         <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
          </Routes>
    </>
  )
}

export default App
