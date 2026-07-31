# DevTinder APIs

## authRouter

- POST/Signup
- POST/login
- POST/logout

## profileRouter

- GET/profile/view
- PATCH/profile/edit
- PATCH/profile/password //Forgot password API

## connectionRequestRouter

- POST/request/send/:status/:userId
- POST/request/review/:status/:userId

## userRouter
- GET/user/requests/received
- GET /user/connections
- GET /feed- Gets you the profiles of other users on plateform

Status: ignore,interested,accepted,rejected
