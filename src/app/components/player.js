import React from 'react'
import { observer } from 'mobx-react'

@observer export default class Player extends React.Component {
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
    const player = this.props.player
    return (
      <div>
        <div className="player" onClick={this.handleClick}>
          <div className="name-and-wicket">{player.name}</div>
          <div className="runs-and-balls">{`${player.runs}${player.isOut ? '' : '*'}(${player.balls})` }</div>
        </div>
        <div className={`toggle-player-stats${(this.props.toggle) ? ' show' : ''}`}>
          Ball 1 -  Straight drive to boundary ropes<br/>
          Ball 2 -  Defensive stop<br/  >
          Ball 3 -  Leg glance to steal one run
        </div >
      </div>
    )
  }
} 