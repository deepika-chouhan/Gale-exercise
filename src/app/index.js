import React from 'react'
import ReactDOM from 'react-dom'
import DataStore from './DataStore'
import uiStore from './uiStore'
import Chathome from './components/Chathome'
import './main.scss'

const DataState = window.DataState = new DataStore()
const uiState = window.uiState = new uiStore()

console.log(DataState)
console.log(uiState)

//For enabling HMR
if (module.hot) {
  module.hot.accept();
}

class Dove extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Chathome
          uiState={this.props.uiState}
          DataState={this.props.DataState}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <Dove
    DataState={DataState}
    uiState={uiState}
  />,
  document.getElementById("app")
)