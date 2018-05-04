import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import DataStore from './DataStore'
import CartPanel from './components/CartPanel'
import DataPanel from './components/DataPanel'
import './main.scss'

const DataState = window.DataState = new DataStore()


//For enabling HMR
if (module.hot) {
  module.hot.accept();
}

class StartScreen extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="start-screen">
        <DataPanel
          DataState={DataState}
        />
        <CartPanel
          DataState={DataState}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <StartScreen
    DataState={DataState}
  />,
  document.getElementById("app")
)
