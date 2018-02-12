import React from 'react'
import { observer } from 'mobx-react'

@observer export default class Answer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="answer">
        {this.props.ans}
      </div>
    )
  }
}