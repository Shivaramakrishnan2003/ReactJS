import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [message,setMessage]=useState("Hello dear one, learning React...?")
  useEffect(() => {
    console.log('useEffect hook called')
    setTimeout(()=>{
      setMessage("Great... This is time to learn about HOOKS");},2000)
  })
  
  return (
    <div className="App">
      <h3>{message}</h3>
    </div>
  );
}

export default App;
