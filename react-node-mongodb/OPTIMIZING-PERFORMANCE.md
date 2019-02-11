
https://reactjs.org/docs/optimizing-performance.html#examples

## Use production build

- we can test whether we are using production build or not using
React Developer tools for chrome. If you visit a site with React 
in production mode, the icon will have a dark background. Dev mode
will have a red background.

## Brunch
    npm install --save-dev -g uglify-js-brunch
    brunch build -p
    
## Browserify
    npm install --save-dev -g envify uglify-js uglifyify
        
    
 envify ensures the right build environment
 uglifyify removes development imports
 uglify-js for mangling
 
    browserify ./index.js \
      -g [ envify --NODE_ENV production ] \
      -g uglifyify \
      | uglifyjs --compress --mangle > ./bundle.js
      
      
## Rollup
    
    npm install --save-dev rollup-plugin-commonjs rollup-plugin-replace rollup-plugin-uglify  
    
    plugins: [
      // ...
      require('rollup-plugin-replace')({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      require('rollup-plugin-commonjs')(),
      require('rollup-plugin-uglify')(),
      // ...
    ]  
    
## webpack - if you configure webpack directly

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin()
    
    
## Profiling Components with the Chrome Performance Tab
   - disable all Chrome extensions, especially React DevTools.
   - run in dev mode.
   - open Performance tab and press Record
   - Perform the action you want to profile, but don't record more
   than 20 seconds or chrome might hang.
   - stop recording
   - react events wil be grouped under the User Timing label.
   https://calibreapp.com/blog/react-performance-profiling-optimization/
   
   this should help you realize when unrelated UI gets updated by mistake, 
   and how deep and how often your UI updates occur.
   
## Profiling Components with the DevTools Profiler
   https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html
   https://www.youtube.com/watch?v=nySib7ipZdk
   
## Virtualize long lists
   - if application renders 100s or 1000s of rows, we should use
   "windowing" technique.
   - it renders a small subset of your rows at any given time.
   - react-window and react-virtualized are popular windowing libaries.
      
##  Avoid Reconciliation
   - react maintains an internal representation of the rendered ui.
   - It includes the React elements you return from your components.
   - This caching lets react avoid creating dom nodes.
   - This is call virtual DOM.
   
   - when a component's props/state change, react compares 
   newly returned element with the previously returned one, then decides
   whether an actual DOM update is necessary or not.
   
   - sometimes react does not know whether it has to re-render a component or not,
   so it re-renders it. 
   - To fix this, we can override the life cycle function
   shouldComponentUpdate(nextProps, nextState) and return false.
   - shouldComponentUpdate is triggered before the re-rendering process starts.
   - This ways it will the skip the while rendering process, including
   calling render() on this component and below.
   - We can inherit React.PureComponent for this, it should with
   shouldComponentUpdate() with a shallow comparison of current and previous
   props and state.
   
## The power of not mutating data
   - if we create a new copy of data while updating props and state,
    we would be able to use React.PureComponent's shouldComponentUpdate()
    shallow comparison logic.

## Using immutable data structures   
   - Immutable.js
   - it gives immutable collections, once created can't be altered.
   - Persistent: for previous collection, A new collection will be created from a previous collection,
   and previous collection is still valid.
   - Structural Sharing: new collections are created using as much of
   the same structure as the original collection as possible, reducing copying
   to a minimum to improve performance.
   
## Avoid array.push(), use array.concat() method.
 - concat() method doesn't mutate the original array.   
   
        
   
   
   
        
    
           