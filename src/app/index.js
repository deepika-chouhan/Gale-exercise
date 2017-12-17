import Form from './components/form.js'
import Box from './components/displaybox.js'
import React from 'react'
import ReactDOM from 'react-dom'

//For enabling HMR
if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        React App Components
        <Box />
        <Form />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))