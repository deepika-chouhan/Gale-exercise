import Team from './components/team'
import React from 'react'
import ReactDOM from 'react-dom'
import { observable } from 'mobx'
import $ from 'jquery'
import './main.scss'

var scores = observable({
  teamList1: [{
    id: 18,
    name: 'Virat Kohli',
    runs: 123,
    balls: 90,
    isOut: false,
    wicket_by: '',
  },
  {
    "id": 1,
    "name": "Micheal",
    "runs": 85,
    "balls": 4,
    "isOut": true,
    "wicketBy": "Cosimo"
  },
  {
    "id": 2,
    "name": "Lamar",
    "runs": 18,
    "balls": 65,
    "isOut": false,
    "wicketBy": "Abran"
  },
  {
    "id": 7,
    "name": "Godart",
    "runs": 74,
    "balls": 76,
    "isOut": false,
    "wicketBy": "Reamonn"
  },
  {
    "id": 8,
    "name": "Claudetta",
    "runs": 45,
    "balls": 9,
    "isOut": true,
    "wicketBy": "Monti"
  },
  {
    "id": 9,
    "name": "Aldin",
    "runs": 56,
    "balls": 55,
    "isOut": false,
    "wicketBy": "Emmy"
  },
  {
    "id": 10,
    "name": "Chelsy",
    "runs": 36,
    "balls": 60,
    "isOut": true,
    "wicketBy": "Skipp"
  }],

  teamList2: [{
    id: 25,
    name: 'Steve Smith',
    runs: 32,
    balls: 27,
    isOut: true,
    wicket_by: '',
  },
  {
    "id": 16,
    "name": "Cooper",
    "runs": 26,
    "balls": 44,
    "isOut": true,
    "wicketBy": "Georgy"
  },
  {
    "id": 17,
    "name": "Gabbie",
    "runs": 11,
    "balls": 82,
    "isOut": true,
    "wicketBy": "Pail"
  },
  {
    "id": 18,
    "name": "Godfrey",
    "runs": 28,
    "balls": 43,
    "isOut": false,
    "wicketBy": "Artair"
  },
  {
    "id": 19,
    "name": "Cecelia",
    "runs": 29,
    "balls": 21,
    "isOut": true,
    "wicketBy": "Nollie"
  },
  {
    "id": 20,
    "name": "Tessy",
    "runs": 63,
    "balls": 53,
    "isOut": true,
    "wicketBy": "Hillery"
  }]
})

console.log(scores)
//For enabling HMR
if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { data: scores }
  }
  componentDidMount() {
    console.log('componentDidMount')
    $.ajax({
      url: 'http://localhost:3000/api/list',
      dataType: 'json',
      cache: true,
      type:'GET',
      success: function (results) {
        console.log('Ajax call')
        this.setState({ data: results });
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    console.log(this.props.ScoresData)
    return (
      <div className="scorecard">
        <Team class="teamA" score={this.props.ScoresData.teamList1} />
        <Team class="teamB" score={this.props.ScoresData.teamList2} />
      </div>
    )
  }
}

ReactDOM.render(<App ScoresData={scores} />, document.getElementById("app"))