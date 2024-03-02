import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


    // let counter = 15;
    // const addValue = () =>{
    //   // counter = counter+ 1;
    //   // console.log('clicked', counter); // not updating UI
    //   // React controls the UI or variable update

    // }

    let [counter, setCounter] = useState(15);
    
  const addValue = () =>{

    if(counter < 21){
      counter= counter+1
      console.log(counter);
    }
    setCounter(counter);
  }

  const removeValue = () =>{
    if(counter > 0){
      counter = counter-1
    }
    setCounter(counter)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button><br/>
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
