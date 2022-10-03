# How to build

0. Install yarn from npm (https://nodejs.org/ko/download/)
```
npm install --global yarn
```


1. From the repository, initialize yarn
```
yarn init
```

Questions for **yarn init**:
  * name          : a name of the application
  * version       : a version of the application
  * description   : a description of the application
  * entry point   : the first javascript file which is executed when the application runs
  * repository url: URL for (git) repo
  * author        : an author of the repo
  * license       : a license information for the application
  * private       : 
    * empty(just pressing enter): No *private* field in a package.json file.
    * true: Add *private* field with a value true, the application refuses "npm publish" command, which publishes the application to the npm.

Then, **package.json** file is automatically added in the repository.


2. Make a *.gitignore* file

Add **node_modules** and **build/** into *.gitignore* file.

and DO NOT add **package.json** and **yarn.lock** files. Those files are related to controlling versions of packages.


3. Static build setting

Install ***Webpack*** module for static building

  a.
  ```
  yarn add webpack webpack-cli webpack-dev-server html-webpack-plugin --dev
  ```

  b. Make a webpack setting file **/webpack.config.js**
  ```javascript
  // webpack.config.js
  const HTMLWebpackPlugin = require('html-webpack-plugin');
  const path = require('path')
  module.exports = {
    entry: { 
        "index": path.resolve(__dirname, 'src', 'index.js')  // Entry point. 
    },

    output: { 
        path: path.resolve(__dirname, 'build'), // distribution files are generated in "build/"
        filename: '[name].js',  // "[name]" = KEY used in this file. e.g.) entry: {"index": } => [name] = index 
        library: '[name]',
        clean: true  // true: build files after deleting preivous built files
     },

    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
    ],
  }
  ```
  Place index.js file in the entry directory setted in the configure file. for example, 
  ```javascript
  // src/index.js
  // import '/css/diagram.css'; importing .css file from this file.
  console.log("HTML test")
  ```

  Please note that css files should be imported in the entry javascript, for e.g. "src/index.js" for the above example configuration file.

  c. Add "scripts" field in **/pacakge.json**

  Append the followings.
  ```javascript
    "scripts": {
      "dev": "webpack --mode development",
      "start": "webpack-dev-server --mode development --open",
      "build": "webpack --mode production"
  },
  ```

  d. Add sample .html file (at the entry directory set in sebpack.config.js, e.g. /public/index.html)
  ```HTML
  <html>
  <body>
    <!-- <script src="./index.js"></script> -->
    Hello world!
  </body>
  </html>
  ```


4. Configure **Netlify** for the repository

Log in via Github account. ***Site*** -> ***Add new site*** -> ***Import an existing project***.

Basic build settings
* Base directory    : a directory where the below build command will be executed
* Build command     : a command to be executed to depoly static website, is of form ***yarn [command-name]*** 
where **command-name** is one of keys in the **scripts** field in ***/package.json***. e.g. **yarn build**.

* Publish directory : the directory set in **output** field in the **/webpack.config.js** file. e.g. ***build***


5. (Additionally) Webpack plugins

  a. CSS plugin
  ```
  yarn add css-loader style-loader --dev
  ```
  Add followings to ***webpack.config.js***
  ```javascript
      module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
  ```

  ***css-loader*** is for loading .css files and ***style-loader*** is for loading style sheets from DOM(Document Object Model).

  b. Babel Plugin 
  It is a plugin for converting scripts to modern style javascript compatible to all browsers.
  ```
  yarn add @babel/core babel-loader @babel/preset-env --dev
  ```

  * @babel/core       : engine package of Babel
  * babel-loader      : a loader for webpack
  * @babel/preset-env : Javascript -> ES5 converter
  
  It needs an extra config file, ***/babel.config.json***
  ```JSON
  // /babel.config.json
  {
    "presets": ["@babel/preset-env"]
  }
  ```

  Add followings to ***webpack.config.js***
  ```javascript
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  }
  ```

  c. jQuery plugin

  Add following to entry .js files (e.g. ***index.js***)
  ```javascript
  import $ from 'jquery';
  ```
  Add followings to ***webpack.config.js*** (module.exports field)
  ```javascript
      externals: {
        jquery: 'jQuery',
    }
  ```


6. JSONStream

  Install stream, JSONStream
  ```
  yarn add stream JSONStream
  ```

  To avoid fs module error, add following to package.json
  ```
    "browser": {
    "fs": false,
    "path": false,
    "os": false
  }
  ```

  To avoid Buffer error, install buffer package
  ```
  yarn add buffer
  ```
  and add followings to entry javascript
  ```
  window.Buffer = require('buffer/').Buffer; 
  ```
