- Create a repository
- Initilize the repository
- node modules,package.json,package.lock.json
- Install express
- create server
- write request handler for /test,/hello
- Install nodemon and update script inside package.json
- difference between caret and tilde

- initialize git
  .gitignore
- Create a remote repo on github
- Push all code to remote origin
- Play with routes and route extensions ex. /hello, /, hello/2
- Order of the routes matter a lot
- Install Postman app and make a workspace/collection > test API call
- Write logic to handle GET,POST,PATCH,DELETE API Calls and test them on Postman
- Explore routing and use of ?,+,(),\* in the routes
- use of regex in routes /a/.\*fly$/
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
- User.findOne() with duplicate email id , which object returns
- API - Get user by email
- API - Feed API - GET/feed - get all the users from the database
- API- get users by ID
- Create a delete user API
- Difference between PATCH and PUT
- API- Update a user
- Explore the mongoose Documentation for Model API/method
- what are options in a Model.findOneAndUpdate method,explore more about it
- API - Update the user with email ID

- Explore schematypes options from the documentation
- add required ,unique,lowercase,min,minLenngth,trim
- Add default
- Create a custom validate function for gender
- Improve the DB Schema - Put all appropriate validations on each field in Schema
- Add timeStamps to the userSchema
- Add API level validation on Patch request & signup post api
- DATA Sanitizing - Add API validation for each field
- Install validator
- Explore validator function and use validator functions for password,email,photoUrl
- Never trust req.body

- Validate data in Signup API
- Install bcrypt package
- Create PasswordHash using bcrypt.hash & save the user is encrypted the password
- Create Login Api
- Compare password aand throw new errors if password is invalid

- Install cookie-parser
- just send a dummy cookie to user
- Create GET/profile API and check if you get the cookie back
- Install jsonwebtoken

- //In Login API ,after email and password validation , create a JWT token and send it to the user in cookies.
- read the cookies inside your profile and find the logged in user.
- userAuth Middleware
- Add the userAuth middleware in profile API and a new sendConnectionRequest API
- Set the expiry of JWT token and cookies to 7 days
- Create userSchema method to getJWT();
- Create UserSchema method to compare password(passwordInputByUser)

- Explore tinder APIs
- Create a list of all API you can think of in Dev Tinder
- Group multiple routes under respective routers
- Read documentation for express.Router 
- Create routes folder for managing ath,profile,request routers
- Create authRouter,profileRouter,requestRouter
- Import these routers in app.js
- Create POST /logout API
- Create PATCH /profile/edit
- Create PATCH /profile/password API => forgot password API
- Make you validate all data in every post,patch apis