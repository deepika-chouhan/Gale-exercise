//import path from 'path'
const path = require('path')
const webpack = require('webpack')
// distribution directory for bundled/transpiled files
const DIST_DIR = path.resolve(__dirname + '/dist')
// source directory of modules entry point
const SRC_DIR = path.resolve(__dirname + '/src')

// ["webpack-hot-middleware/client"] 
// This connects to the server to receive notifications when the bundle rebuilds and then updates your client bundle accordingly.
const config = {
  //context: __dirname + '/app',
  entry: ['webpack-hot-middleware/client', SRC_DIR + '/app/index.js'], // webpack entry file path
  output: {                        // webpack output location
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app'             //http://localhost:3000/app' webpack-dev-middleware to serve bundled files from this location
  },
  module: {                        // define modules used during webpack process for transformations(transpilation, uglify etc.)
    loaders: [
      {
        test: /\.js?/,             //files webpack need to transform for this particular loader
        include: SRC_DIR,
        exclude: path.join(__dirname, 'node_modules'),
        loader: ['babel-loader']
        // options: {              //babel-loader uses some presets(contains the logic of transformations)||(.babelrc)
        //   presets: ["react", "es2015", "stage-2"]
        // }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // plugin for HMR
    new webpack.NoEmitOnErrorsPlugin() // plugin to display errors properly
  ]
}

// export the config object
module.exports = config