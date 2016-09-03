import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

// Importing default style from react-toolbox
import 'react-toolbox/lib/commons.css'

import App from './App'

const mountNode = document.querySelector('#root')
ReactDOM.render(<div><App /></div>, mountNode)
