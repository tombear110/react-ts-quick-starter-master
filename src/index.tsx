import React from 'react'
import ReactDOM from 'react-dom'
import Route from 'Src/components/Layout'
import './app.scss'

if (module && module.hot) {
  module.hot.accept()
}

ReactDOM.render(<Route />, document.querySelector('#root'))
