//import path from 'path'
const path = require('path')

// distribution directory for bundled/transpiled files
const DIST_DIR = path.resolve(__dirname + '/dist')
// source directory of modules entry point
const SRC_DIR = path.resolve(__dirname + '/src')

const config = {
  //context: __dirname + '/app',
  entry: SRC_DIR + '/app/index.js', // webpack entry path
  output: {                         // webpack output location
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app/'             //for webpack-dev-server(we'll deploy this dist folder on server in prod)
    //public dist folder for the webpack-dev-server to look             
  },
  module: {                         // define modules used during webpack process for transformations(transpilation, uglify etc.)
    loaders: [
      {
        test: /\.js?/,              //files webpack need to transform for this particular loader
        include: SRC_DIR,
        exclude: /node_modules/,
        loader: ['babel-loader']
        // options: {                     //babel-loader uses some presets(contains the logic of transformations)(.babelrc)
        //   presets: ["react", "es2015", "stage-2"]
        // }
      }
    ]
  }
}

// export the config object
module.exports = config