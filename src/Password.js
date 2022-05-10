import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPassword } from './actions'
import zxcvbn from 'zxcvbn'
import { str, caps, nums, chars, words } from './dictionary'
import './Password.css'

function generatePassword() {
  let randomPass = '';

  for (let i = 0; i < 7; i ++) {
    if (i === 6 || i === 0) {
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
    console.log(zxcvbn(randomPass))
  }
  return randomPass
}

function Password() {
  const [password, setPassword] = useState()
  const [name, setName] = useState("")
  const [site, setSite] = useState("")
  const dispatch = useDispatch()

  return (
    <div className="Password">
      <h1 className="header"><span>Passave</span></h1>
      <div className="user-input">
        <label className="site-input">Site: 
          <input 
            type="text" 
            name="site"
            placeholder="URL or site name"
            value={site}
            onChange={(e) => {setSite(e.target.value)}}
          />
        </label>
        <label className="name-input">Username: 
          <input 
            type="text" 
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => {setName(e.target.value)}}
          />
        </label>
        <label className="password-input">Password:
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => {setPassword(e.target.value)}}
          />
        </label>
      </div>
      <button className="generator-button"
        onClick={(e) => {setPassword(generatePassword())}}>
        Generate Password
      </button>
      <button className="save-button"
        onClick={(e) => {
        dispatch(addPassword(site, name, password))
      }}>Save</button>
    </div>
  )
}

export default Password