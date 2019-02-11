

# create project and install packages
    npm init -y
    npm i body-parser express mongodb path

path module to serve static html file to user



# installing mongo db
1. download tgz file of mongodb server.
2. extract it anywhere
3. create /data/db folder
    `sudo mkdir -p /data/db`
4. change owner of /data/db
    `sudo chown $(whoami) /data/db`
5. add <mongo_db_path>/bin in PATH in the ~/.bash_profile
    `export PATH=$PATH:<mongo_db_path>/bin`
    
# to start mongo db, start mongo daemon using below command
    mongod
    
# to connect to mongo daemon server
    mongo

# to see all the databases in mongo db
    show dbs
    
    
# insert in mongo db using this node app
   
    curl -X POST \
      http://localhost:3000/ \
      -H 'content-type: application/json' \
      -d '{"todo": "clean garage"}' 
         
### verifying insert in mongo db, open mongo shell prompt
    
        use crud_mongodb
        db.todo.find({})      
   
   
# get all todo from mongo db        
    
    curl -X GET \
      http://localhost:3000/getTodos
      
# update all todo
    
    curl -X PUT \
      http://localhost:3000/<put-existing-todo-id-here> \
      -H 'content-type: application/json' \
      -d '{"todo": "clean kitchen"}'  
      
      
      
# creating react app, run below command to add webpack based react configuration in current project
    
    npx create-react-app .
    cd src
    rm -f *
    
    
# session management in nodejs cluster
              