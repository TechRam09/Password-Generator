/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numbers, setNumbers] = useState(false)
  const [characters, setCharacters] = useState(false)
  const [password, setPassword] = useState("")


  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (numbers) { str += "0123456789" }
    if (characters) { str += "!@#$%^&*-_+=[]`" }
    
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      console.log(char);
      pass += str.charAt(char)
    }

    setPassword(pass)
  },[length,numbers,characters,setPassword])// to optimise the repeating dependency
  
  let passRef = useRef(null)// use to pass the reference of the current input or used to give user selection effect in this case

  const copyPassword = useCallback(() => {
    passRef.current?.select()// used to select the input value //optional
    //  passRef.current?.setSelectionRange(0, 5);// used to slect a range of characters
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
   },[length,numbers,characters,passwordGenerator]) // here dependies are on which changes the metjod should be run

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
