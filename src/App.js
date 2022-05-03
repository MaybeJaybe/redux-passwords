import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { yourRootReducer } from './reducers'
import reducers from './reducers';
import Password from './Password';
import './App.css';

const store = createStore(reducers)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Password />
      </div>
    </Provider>
  );
}

export default App;
