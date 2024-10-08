import { useState, useCallback ,useEffect, useRef} from 'react'

import './App.css'
function App() {
  const [length, setLength] = useState(9);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [charAllowed, setCharAllowed] = useState(true );
  const [password, setPassword] = useState('');

  //refHook
  const passwordRef = useRef(null)
  const copyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,49) 
    window.navigator.clipboard.writeText(password)
  }, [password])


  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += "!@#$%^&*()_-+=[]{}'':?/";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    return pass;
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    setPassword(generatePassword());
  }, [generatePassword]);


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden md-4'>
          <input type='text'
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly 
            ref={passwordRef}/>

          <button 
          onClick={copyPasswordToClipBoard}
          className='ountline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range'
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label>Length : {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
              defaultChecked={numberAllowed}
              id="numberInput"

              onChange={(e) => { setNumberAllowed((prev) => !prev) }} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type='checkbox'
              defaultChecked={charAllowed}
              id="charInput"

              onChange={(e) => { setCharAllowed((prev) => !prev) }} />
            <label htmlFor='charInput'>Character</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
