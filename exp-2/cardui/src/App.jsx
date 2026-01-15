import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Card UI Web Page</h1>
      <div className='card mt-4'>
        <img src="https://tse4.mm.bing.net/th/id/OIP.LjtG_Wl_y08hQe8m1IrO-gHaE8?w=1920&h=1280&rs=1&pid=ImgDetMain&o=7&rm=3" class="card-img-top" style={{height:"150px"}}></img>
        <h2 className='text-center'>Card 1</h2>
        <div className='card-body'>
          <h4 class="card-title">About</h4>
          <p class="card-text">Create what inspires you </p>
          <a href="#" class="btn btn-primary">Next</a>
        </div>
      </div>

      <div className='card mt-4'>
        <img src="https://tse4.mm.bing.net/th/id/OIP.LjtG_Wl_y08hQe8m1IrO-gHaE8?w=1920&h=1280&rs=1&pid=ImgDetMain&o=7&rm=3" class="card-img-top" style={{height:"150px"}}></img>
        <h2 className='text-center'>Card 2</h2>
        <div className='card-body'>
          <h4 class="card-title">About</h4>
          <p class="card-text">Design your own path</p>
          <a href="#" class="btn btn-primary">Next</a>
        </div>
      </div>

      <div className='card mt-4'>
        <img src="https://tse4.mm.bing.net/th/id/OIP.LjtG_Wl_y08hQe8m1IrO-gHaE8?w=1920&h=1280&rs=1&pid=ImgDetMain&o=7&rm=3" class="card-img-top" style={{height:"150px"}}></img>
        <h2 className='text-center'>Card 3</h2>
        <div className='card-body'>
          <h4 class="card-title">About</h4>
          <p class="card-text">Let your ideas grow</p>
          <a href="#" class="btn btn-primary">Next</a>
        </div>
      </div>

    </>
  )
}

export default App
