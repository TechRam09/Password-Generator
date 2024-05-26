/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState("")



  return (
    <>
      <div className="w-full max-w-md mx-auto bg-gray-700 rounded-xl text-orange-500 py-3 my-5 px-4 text-center
      ">
        <h1 className=' font-bold text-2xl'>Password Generator</h1>
        <div className=' flex rounded  w-full my-3 '>
          <input
            type="text"
            className=' p-2 rounded-lg text-orange-500 w-full'
            value={password}
            placeholder='Password'
            readOnly
            ref={passRef}
          />
          <button className='p-2 rounded bg-blue-700 text-white hover:bg-blue-400 focus:bg-blue-600' onClick={copyPassword}>Copy</button>
        </div>
        <div className='flex gap-x-2 overflow-hidden flex-wrap'>
          <div className=' flex items-center gap-x-2'>
            <input
              type="range"
              min={8}
              max={50}
              className='cursor-pointer'
              value={length}
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
          <div className=' flex items-center gap-x-2'>
            <input
              type="checkbox"
              id="numberInput"
              onChange={(e) => { setNumbers(e.target.checked) }}
            />
            <label>Numbers</label>
          </div>
          <div className=' flex items-center gap-x-2'>
            <input
              type="checkbox"
              id="charcterInput"
              onChange={(e) => { setCharacters(e.target.checked) }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )

}

export default App
