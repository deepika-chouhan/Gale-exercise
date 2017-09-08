import Form from './components/form.js'
import Box from './components/displaybox.js'
import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        React App Start -App Component
        <Box />
        <Form />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("app"))