var express = require('express')
var fs = require('fs')
var path = require('path')
var multer = require('multer')
var bodyParser = require('body-parser')

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

//comment if running npm run start_prod 
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }
}))

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