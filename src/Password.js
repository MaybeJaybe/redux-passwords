import React, { useState } from 'react';

// generate password using all ascii characters 
// (level 1 password)
// function generatePassword() {
//   let randomPass = '';
//   for (let i = 0; i < 9; i ++) {
//     const random = Math.floor(Math.random() * 94) + 33;
//     randomPass += String.fromCharCode(random)
//   }
//   return randomPass
// }

// generate password using given strings to make sure theres at least 1 num, capital letter, and special char
// (level 2 password)
// function generatePassword() {
//   let randomPass = '';
//   const str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const nums = '0123456789'
//   const chars = '~!@#$%^&*()_-+=?';

//   for (let i = 0; i < 9; i ++) {
//     if (i === 7) {
//       randomPass += nums[Math.floor(Math.random() * nums.length)];
//     } else if (i === 3) {
//       randomPass += chars[Math.floor(Math.random() * chars.length)];
//     } else {
//       randomPass += str[Math.floor(Math.random() * str.length)];
//     }
//   }
//   return randomPass
// }

// generate password using char codes to make sure theres at least 1 num, capital letter, and special char
// (level 3 password)
function generatePassword() {
  let randomPass = '';
  for (let i = 0; i < 9; i ++) {
    if (i === 8) {
      // nums
      const random = Math.floor(Math.random() * 10) + 48;
      randomPass += String.fromCharCode(random)
    } else if (i === 5) {
      // special chars
      const random = Math.floor(Math.random() * 15) + 33;
      randomPass += String.fromCharCode(random)
    } else if (i === 3) {
      // all chars
      const random = Math.floor(Math.random() * 94) + 33;
      randomPass += String.fromCharCode(random)
    } else if (i === 0) {
      // only capital letters
      const random = Math.floor(Math.random() * 26) + 65;
      randomPass += String.fromCharCode(random)
    } else {
      // lowercase and uppercase letters, also [\^_`]
      // this is to make password majority be letters for readability
      const random = Math.floor(Math.random() * 58) + 65;
      randomPass += String.fromCharCode(random)
    }
  }
  return randomPass
}


function Password() {
  const [password, setPassword] = useState()
  const [name, setName] = useState("")

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
      <h1>Name: {name}</h1>
      <h2>Password: {password}</h2>
      <button onClick={(e) => {setPassword(generatePassword())}}>
        Generate
      </button>
    </div>
  )
}

export default Password