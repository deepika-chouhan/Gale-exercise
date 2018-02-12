import React from 'react'
import { observer } from 'mobx-react'
import UserInput from './UserInput'
import Question from './Question'
import Answer from './Answer'

@observer export default class Chathome extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.DataState.contentArray.push(<Question
      ques={this.props.DataState.questionArray[0].stmt}
      qid={this.props.DataState.questionArray[0].st_id}
    />)
  }
  render() {
    let contentArray = this.props.DataState.contentArray
    setTimeout(() => {
      this.props.uiState.ui.startScreen = false
    }, 1000)
    return (
      <div className={`chathome-screen${this.props.uiState.ui.chatHome ? '' : ' hide'}`}>
        <div className={`start-screen${this.props.uiState.ui.startScreen ? '' : ' hide'}`}>
          <img className="start-scr-img" src="../images/home.jpg" />
        </div>
        <img className="home-bg-img" src="../images/conversationWithoutText.jpg" />
        <div className="content">
          {contentArray}
        </div>
        <UserInput
          uiState={this.props.uiState}
          DataState={this.props.DataState}
        />
      </div>
    )
  }
}