import './App.css'
import { Route, Routes  } from 'react-router-dom'
import AboutMe from './components/aboutMe/AboutMe'
import NavBar from './components/navBar/NavBar'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import InfoProject from './components/infoProject/InfoProject'
import Header from './components/header/Header'

function App() {

  return (
    <>

    <NavBar />
    
    <Routes>
        <Route path="/" element={<Header />}></Route>
        <Route path="/about" element={<AboutMe />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/projects/:id" element={<InfoProject/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    </>
  )
}

export default App
