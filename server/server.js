var express = require('express')
var fs = require('fs')
var path = require('path')
var app = express()
var port = 3000
var multer = require('multer')
var bodyParser = require('body-parser')

app.use(express.static('server/public'))
//app.use(express.static('dist'))

// app.use('/', (req, res) => {
//   console.log("Inside /")
//   res.send('<h2>ExpressJS is @ work</h2>')
// })


app.post('/api/upload', (re, res) => {

})

app.listen(port, (err) => {
  if (err) {
    throw new Error("Error is connecting to server", err)
  } else {
    console.log('Server is listening on port ', port)
  }
})