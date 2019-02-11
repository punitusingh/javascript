## creating react app, run below command to add webpack based react configuration in current project
    
    npx create-react-app .
    cd src
    rm -f *
    
    npm uninstall ajv
    npm install ajv@6.8.1
    
    npm start

## install server side dependencies, server side code will go in server folder
    npm i body-parser express mongodb path

path module to serve static html file to user



## installing mongo db
1. download tgz file of mongodb server.
2. extract it anywhere
3. create /data/db folder
    `sudo mkdir -p /data/db`
4. change owner of /data/db
    `sudo chown $(whoami) /data/db`
5. add <mongo_db_path>/bin in PATH in the ~/.bash_profile
    `export PATH=$PATH:<mongo_db_path>/bin`
    
## to start mongo db, start mongo daemon using below command
    mongod
    
## to connect to mongo daemon server
    mongo

## to see all the databases in mongo db
    show dbs
    
    
## insert in mongo db using this node app
   
    curl -X POST \
      http://localhost:3000/ \
      -H 'content-type: application/json' \
      -d '{"todo": "clean garage"}' 
         
### verifying insert in mongo db, open mongo shell prompt
    
        use crud_mongodb
        db.todo.find({})      
   
   
## get all todo from mongo db        
    
    curl -X GET \
      http://localhost:3000/getTodos
      
## update all todo
    
    curl -X PUT \
      http://localhost:3000/<put-existing-todo-id-here> \
      -H 'content-type: application/json' \
      -d '{"todo": "clean kitchen"}'  
      
      
      
      
      
      
      






This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify




      

      
      

    
    
# session management in nodejs cluster
              


