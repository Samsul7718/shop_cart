
import { useEffect } from 'react'
import './App.css'

function App() {
  const getUser=()=>{
    fetch("http://localhost:3000/api/product")
    .then(res=>res.json())
    .then(json=>console.log(json))
  }

  useEffect(()=>{
    getUser()
  },[])

  return (
    <>
    <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
    </>
  )
}

export default App
