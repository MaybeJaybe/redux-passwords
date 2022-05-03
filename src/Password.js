import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPassword } from './actions'
import { str, caps, nums, chars, words } from './dictionary'

function generatePassword() {
  let randomPass = '';

  for (let i = 0; i < 6; i ++) {
    if (i === 5 || i === 0) {
      randomPass += nums[Math.floor(Math.random() * nums.length)];
    } else if (i === 3) {
      randomPass += caps[Math.floor(Math.random() * caps.length)]
    } else if (i === 2) {
      randomPass += chars[Math.floor(Math.random() * chars.length)];
    } else if (i === 1) {
      randomPass += words[Math.floor(Math.random() * words.length)];
    } else {
      randomPass += str[Math.floor(Math.random() * str.length)];
    }
  }
  return randomPass
}

function Password() {
  const [password, setPassword] = useState()
  const [name, setName] = useState("")
  const dispatch = useDispatch()

  return (
    <div className="Password">
      <div className="user-input">
        <input 
          type="text" 
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => {setName(e.target.value)}}
        />
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />
      </div>
      <h1>Username: {name}</h1>
      <h2>Password: {password}</h2>
      <button onClick={(e) => {setPassword(generatePassword())}}>
        Generate Password
      </button>
      <button onClick={(e) => {
        dispatch(addPassword(name, password))
      }}>Save</button>
    </div>
  )
}

export default Password