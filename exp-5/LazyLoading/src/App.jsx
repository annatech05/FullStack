import { useState, lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const Dash = lazy(() => import('./Components/dashboard.jsx'))
 

  return (
    <Suspense fallback={<div><h1>Loading...</h1></div>}>
      <Dash />
    </Suspense>
  )
  
}

export default App
