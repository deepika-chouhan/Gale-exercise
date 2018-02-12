import React from 'react'
import { observer } from 'mobx-react'
import Answer from './Answer'
import Question from './Question'

@observer export default class UserInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  handleClick = (e) => {
    this.props.DataState.response.reply = this.state.value
    this.props.DataState.response.st_id = this.props.DataState.contentArray.slice(-1)[0].props.qid
    this.props.DataState.response.stmt = this.props.DataState.contentArray.slice(-1)[0].props.ques
    this.props.DataState.contentArray.push(<Answer ans={this.state.value} />)
    const quesArray = this.props.DataState.questionArray
    // find the ques associated with the response using (st_id of response)
    const ques = quesArray.find((q) => {
      return q.st_id == this.props.DataState.response.st_id
    })
    // find if the user response matches any of the system ans options
    const newOpt = ques.ans_opts.find((a) => {
      return a.option == this.props.DataState.response.reply
    })
    console.log('newOpt ', newOpt)
    // find the next ques to show(next_id) 
    if (newOpt) {
      const newQues = quesArray.find((q) => {
        return q.st_id == newOpt.next_id
      })
      this.props.DataState.contentArray.push(<Question
        ques={newQues.stmt}
        qid={newQues.st_id}
      />)
    } else {
      this.props.DataState.contentArray.push(<Question
        ques={`Sorry I didn't get that. Again ${ques.stmt}`}
        qid={ques.st_id}
      />)
    }
    console.log('newQues.next ', newQues.next)
    if (newQues.next) {
      let ques = quesArray.find((q) => {
        return q.st_id == newQues.next
      })
      this.props.DataState.contentArray.push(<Question
        ques={ques.stmt}
        qid={ques.st_id}
      />)
    }
  }
  render() {
    return (
      <div className="input-div">
        <input className="user-input" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Type your message here.." />
        <button className="send-btn" onClick={this.handleClick}>SEND</button>
      </div>
    )
  }
}