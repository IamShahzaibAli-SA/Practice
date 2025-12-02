import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className='flex justify-center' style={{backgroundColor: color}}>
        <button className='px-3 py-1 bg-[red] m-2 rounded cursor-pointer'
        onClick={()=>setColor("red")}
        >Red</button>
        <button className='px-3 py-1 bg-[green] m-2 rounded cursor-pointer'
        onClick={()=>setColor("green")}
        >Green</button>
        <button className='px-3 py-1 bg-[blue] m-2 rounded cursor-pointer'
        onClick={()=>setColor("blue")}
        >Blue</button>
      </div>

      <div></div>
    </>
  )
}

export default App
