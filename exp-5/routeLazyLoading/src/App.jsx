import{BrowserRouter,Routes,Route,Link} from "react-router-dom"
import {lazy, Suspense}  from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

  const Home = lazy(() => import('./Components/home.jsx'),3000)
  const Contact = lazy(() => import('./Components/contact.jsx'),3000)
  const About = lazy(() => import('./Components/about.jsx'),3000)
function App() {
  return (
    <BrowserRouter>
         <nav>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/about">About</Link></button>
        <button><Link to="/contact">Contact</Link></button>
      </nav>
    <Suspense fallback = {<h2>Loading....</h2>}>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </Suspense>
    </BrowserRouter>

  )
}

export default App
