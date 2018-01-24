app1 : home folder. anything and everything inside here
	dist : index.html
	src : index.js, bundle.js(this will be created later)
	.babelrc : contains everything we want to transpile

Basic setup process using Babel to build the project.
1. npm init : generate the project str. this step will create the package.json file. describes the proj features and dependencies.
2. npm install babel-cli@6.18.0 --save-dev
3. npm install -g babel-cli : install globally
4. create the file .babelrc
5. npm install babel-preset-react@6.16.0 --save-dev
6. npm install babel-preset-latest@6.16.0 --save-dev
7. npm install babel-preset-stage-0@6.16.0 --save-dev
8. babel src\index.js --out-file dist\bundle.js	: this where everything gets transpiled into the bundle.js
9. edit "scripts" to : "start": "httpster -d dist -p 3000"
10. npm start to run the project on port 3000.

Building using Webpack
1. create file webpack.config.js in home folder
2. npm install webpack@1.13.3 --save-dev
3. npm install babel-loader@6.2.5 --save-dev
4. npm install webpack-dev-server@1.16.2 --save-dev
5. webpack : this command will give "command not found error". Either you can install webpack globally in step 2, or run it from node_modules/.bin in the home directory
