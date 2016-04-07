https://github.com/gaearon/react-transform-boilerplate




#Development Environment

## airbnb
npm install --save-dev eslint-config-airbnb eslint-plugin-react eslint




#Production Environment

## Build the server (optional)

"$ npm build"
or
"$ node_modules/babel/bin/babel.js server --source-maps --out-dir dist"

## Start Application in cluster Mode

### Choose number of cores
node cluster n ( "n" number of cores )

### All the cores
node cluster

### Using width forever
forever cluster
