// code reused on method from udacity FEND Part 5 React course material covered and from Maeva tutorial https://www.youtube.com/watch?v=i6L2jLHV9j8 and help from my fellow student Daniela Kuester
// import all the needed components and Browser Router added here to allow routing of url's
import React from 'react'
import ReactDOM from 'react-dom'

import {BrowserRouter} from 'react-router-dom'

import App from './App'
import './index.css'

ReactDOM.render( <BrowserRouter><App /></BrowserRouter>, document.getElementById('root') 
	)


