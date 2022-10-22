import React, {useState} from 'react'
// import UseEffectBasics from './tutorial/2-useEffect/setup/1-useEffect-basics'
import UseEffectCleanup from './tutorial/2-useEffect/setup/2-useEffect-cleanup'


function App() {
  const [show, setShow] = useState(true)
  return (
    <div className='container'>
      <h2>Advanced Tutorial</h2>
      {/* <UseEffectBasics /> */}
      {show && <UseEffectCleanup />}
      <button className='btn' onClick={() => setShow(!show)}>toggle show</button>
    </div>
  )
}

export default App
