
 
import { useEffect, useState} from 'react'
import './App.css'


function App() {
  const [count,setCount]= useState(0);

 useEffect(()=>{
  alert("i will run on each render")
 })
 function handleClick(){
  setCount(count+1);
 }

  return (
    <div>
      <button onClick={handleClick}>
        Click me
      </button>
      <br />
      Count is: {count}
    </div>
  )
}

export default App
