import { findLastIndex } from 'lodash'
import { React, useState } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { deletePassword } from './actions'
import './PasswordList.css'

function PasswordList() {
  const passwords = useSelector((state) => state.passwords)
  const dispatch = useDispatch()
  const passwordList = passwords.map((pass, index) => {
    return (
      <div className="container">
        <div className="saved">
          <div className="display-saved" key={index}>
            <h2>Site: {pass.site}</h2>
            <h3>Username: {pass.name}</h3>
            <h4>Password: {pass.password}</h4>
            <button className="delete-button" onClick={(e) => {
            dispatch(deletePassword(index))
          }}>Delete</button>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div>
      {passwordList}
    </div>
  )
}

export default PasswordList
