# Book Management System

**NOTE:** This repository is assignment given from Walbury Technolabs as one of the round in Interview process.

## User Permissions

A user can

* register himself on the app
* Login to the app
* view and edit his profile
* add or modify books
* view all users with the app

# Installation
```
> git clone https://github.com/msquare-2/Book-Management-System.git
> cd Book-Management-System
> npm install
> npm run dev
```

## Repository layout

The following is a non-exhaustive list of folders explaining the general layout strategy of the repository:

* `/` : Repo root
* `/backend` : Backend Code
    * `/config`  :  All Config Files here
        * `/dbconnect.js`  :  Connect to Data Base function
    * `/middleware`  :  Middlewares inside
        * `/authMiddleware.js`  :  Handles authentication
        * `/errorMiddlewareHandler.js`  :  Handles errors
    * `/models` : Data Models inside
        * `/Book.js`  :  Book Data Model
        * `/User.js`  :  User Data Model
  	* `/routes` : All routes inside
        * `/bookRoutes.js` : Routes for book management
        * `/userRoute.js`  : Routes for User management
  	* `/server.js` : Main Server file
* `/frontend` : Frontend Code
    * `/src`  :  react source folder
        * `/assets`  :  All static assets
	      * `/componets`  :  react components
	          * `/Books`  :  Book Component files inside
            * `/Home`  :  Home Component filees inside
            * `/Loading`  :  Loadng Component filees inside
            * `/Navbar`  :  Navigation-Bar Component filees inside
            * `/Profile`  :  Profile Component filees inside
            * `/Users`  :  Users Component filees inside


## Tech Stack Used

### The MERN Stack

* [MongoDB](https://docs.mongodb.com/) - Document database - to store data as JSON 
* [Express.js](https://devdocs.io/express/) - Back-end web application framework running on top of Node.js
* [React](https://reactjs.org/docs/) - Front-end web app framework used
* [Node.js](https://nodejs.org/en/docs/) - JavaScript runtime environment 

### Middleware

* [Redux](https://redux.js.org/basics/usage-with-react) - For flux architecture, and fetching rapidly data
* [Mongoose](https://mongoosejs.com/docs/guide.html) - ODM for MongoDB


