- Create a repository
- Initilize the repository
- node modules,package.json,package.lock.json
- Install express 
- create  server
- write request handler for /test,/hello
- Install nodemon and update script inside package.json
- difference between caret and tilde

- initialize git 
.gitignore
- Create a remote  repo on github
- Push all code to remote origin
- Play with routes and route extensions ex. /hello, /, hello/2
- Order of the routes matter a lot
- Install Postman app and make a workspace/collection > test API call
- Write logic to handle GET,POST,PATCH,DELETE API Calls and test them on Postman
- Explore routing and use of ?,+,(),* in the routes
- use of regex in routes /a/.*fly$/
- Reading the query params in the routes
- Reading the dynamic routes

- Multiple Route handlers - Play with the code
- next()
- next function and errors along with res.send()
- app.use("/route",rH,[rH2,rH3],rH4,rH5)
- what is a Middleware ? Why do we need it
- How express js basically handles requests behind the scenes
- Difference between app.use and app.all
- write a dummy auth middleware for admin
- write a dummy middleware for all user routes, except/user/login
- Error Handling using app.use("/",(err,req,res,next)={})

- Create a free cluster on MongoDB Official website(Mongo Atlas)
- Install mongoose libraray
- connect your application to the Database <connection-urls> /devTinder
- call the connectDB function to database before starting application on 7777
- Create a userSchema & user Model 
- Create POST /signup API to add data to database
- Push some document using API calls from postman
- Error handling using try, catch

- JS object vs JSON(difference)
- Add the express.json middleware to your app
- Make your signup API dynamic to receive data from the end user

