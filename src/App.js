import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './reducers'
import Password from './Password'
import PasswordList from './PasswordList'
import { loadState, saveState } from './actions/localStorage'
import './App.css';

const loadedState = loadState();
const store = createStore(reducers, loadedState);
store.subscribe(() => {
  saveState(store.getState());
})

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Password />
        <h1>Saved Passwords</h1>
        <PasswordList />
      </div>
    </Provider>
  );
}

export default App;
