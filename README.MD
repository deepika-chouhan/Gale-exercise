# React App[Boilerplate] with Express server as back-end
# Webpack-dev-middleware for builds and serving frontend project

Following libraries, utilities and config files are included
 1. React, React DOM 
 2. Webpack & webpack config file
 3. Webpack-dev-server 
 4. Babel (ES6 transpilation) & .babelrc
 5. MobX & MobX-for-react
 6. npm build scripts
 7. Express
 8. Webpack-dev-middleware
 9. Webpack-hot-middleware
 10. React-hot-loader 

# Boilerplate directory structure
1. ./src contains our applications source code.
2. ./src/app contains the react components for the app.
3. ./dist folder is for outputting the bundled files and for the webpack-dev-server to serve files from (dev-environments).
4. ./index.html,./package.json,./webpack.config.js are at root location and serve their general purpose.
5. ./server/server.js is the script file run when booting up the application on the server.
6. ./server/public is the dist folder used for distribution in production environments.

# npm Scripts
On npm start --> Express server is started and the webpack-dev-middleware generates a build of the frontend project to the publicPath[http://localhost:3000/app] 
On npm run build[dev||prod] -->  webpack is invoked to build the bundle.js then required index files are copied to dist locations(./dist/app || ./server/public/app) and after that the webpack-dev-server is started and also enables hot module replacement for dev-server

# Using ExpressJS server to build(webpack-dev-middleware) frontend project/files and serve on hitting app url(loading app)
1. Adding 3rd party middleware(webpack-dev-middleware) to build the frontend project and output the build file(bundle.js) to a dist location(public path)[http://localhost:3000/app].
2. On requesting the app URL the bundle.js files will be served from the dist location along with the index.html/homepage.
3. To add HMR capability webpack-hot-middleware is used, it listens to any server side changes.
4. It generates and sends an updated build file diff to the listening client and the client in the browser updates the bundle.js existing in browser accordingly.

# Follow steps to start the application
1. "npm install" to install the dependencies
2. "npm start" to start the application

Note: If any of the dependencies are missing for eg: sass-loader etc, install them manually 