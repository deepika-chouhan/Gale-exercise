import Player from './player'
import React from 'react'
import { observer } from 'mobx-react'

@observer export default class Team extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      togglePlayerStats: false,
    }
  }
  handleClick = (e) => {
    this.setState({
      togglePlayerStats: !this.state.togglePlayerStats
    })
  }
  render() {
    const teamlist = this.props.score.map((player) => {
      return (
        <li className="player-list" key={player.id}>
          <Player toggle={this.state.togglePlayerStats} player={player} />
        </li>
      )
    })
    return (
      <div className={this.props.class}>
        <h4>{}</h4>
        <ul onClick={this.handleClick}>
          {teamlist}
        </ul>
      </div>
    )
  }
} 