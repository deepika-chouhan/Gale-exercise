var express = require('express')
var fs = require('fs')
var path = require('path')

var app = express()
var port = 3000

var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('../webpack.config.js')
const compiler = webpack(config)

const SRC_DIR = path.resolve(__dirname, '..', 'src')

//localhost:3000/index.html
app.use(express.static(SRC_DIR))
//app.use(express.static('server/public'))

// Adding 3rd party middleware to build the frontend project
// and output the build file to a dist location(public path)
//  on loading the web app, (index.html), along with it loads the
// script file to the browser i.e the bundled FE project as a whole

//comment if running npm run start_prod 
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}))

// Adding 3rd party HMR middleware
// it sends an updated build file to the listening client
// on any server sid changes, and the client in the browser
// updates the bundle.js existing in browser accordingly

//HMR- hot module replacement
app.use(webpackHotMiddleware(compiler))

app.get('/api/list', (req, res) => {
})

app.post('/api/upload', (req, res) => {
})

app.listen(port, (err) => {
  if (err) {
    throw new Error("Error is connecting to server", err)
  } else {
    console.log('Server is listening on port ', port)
  }
})