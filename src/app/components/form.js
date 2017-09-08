var React = require('react')
var ReactDOM = require('react-dom')

export default class Form extends React.Component {
  constructor(props) {
    super()
  }

  handleSubmit = (e) => {

  }
  render() {
    return (
      <div>
        Form component
        <form action="" method="post" encType="multipart/form-data">
          File name: <input type="text" name="filename" /><br />
          File :<input type="file" name="file" /><br />
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}