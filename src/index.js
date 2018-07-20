import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
//import { BrowserRouter as Router, Route } from 'react-router-dom';



//ReactDOM.render(<App />, document.getElementById('root'))


ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);
