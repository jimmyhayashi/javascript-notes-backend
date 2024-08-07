<h1 align="center" style="font-weight: bold;">Javascript Notes Backend 📝</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Javascript-000?style=for-the-badge&logo=javascript" alt="Javascript Badge"/>
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="NodeJs"/>
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" alt="Express.Js"/>
  <img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="Mongo DB"/>
  <img src="https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD" alt="nodemon"/>
</p>

<p align="center">
 <a href="#about">About</a> • 
 <a href="#started">Getting Started</a> • 
 <a href="#started">App Routes</a>
</p>

<h2 id="started">📌 About</h2>

This backend project is developed using Node.js and Express and is designed to manage the creation of notes and user data. It interacts with a MongoDB database to store and retrieve information, providing the necessary API endpoints for creating, editing, and managing both notes and user accounts.

🔗 Part of a Larger Project

This backend service is part of a larger project called Javascript Notes, which includes a frontend built with React. The frontend interacts with this backend to provide a complete note-taking application.

Frontend Repository: [javascript-notes-react](https://github.com/jimmyhayashi/javascript-notes-react.git)

<h2 id="started">🚀 Getting started</h2>

Here you describe how to run your project locally

<h3>Prerequisites</h3>

Before running this backend application, make sure you have the following installed on your computer:

- **Node.js**: Ensure that Node.js is installed, as it's required to run the application. You can download it from [Node.js official website](https://nodejs.org/).
- **MongoDB**: The application uses MongoDB to store data. You can either install MongoDB locally by following the instructions on the [MongoDB official website](https://www.mongodb.com/try/download/community).

<h3>Cloning</h3>

How to clone your project

```bash
git clone https://github.com/jimmyhayashi/javascript-notes-backend.git
```

<h3> Environment Variables</h2>

Configure the environment variable in the .env file. This variable will be used for the authentication of the application.


```yaml
JWT_TOKEN={YOUR_KEY_AUTENTICATION}
```

<h3>Starting</h3>

How to start your project

```bash
cd project-name
npm run start
``````


<h2 id="routes">📍 API Endpoints</h2>

Here you can list the main routes of your API, and what are their expected request bodies.

<h4>User Routes</h4>​

| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>POST /users/register</kbd>  | register user [response details](#get-auth-detail)
| <kbd>POST /users/login</kbd>     |  login the user [request details](#post-auth-detail)
| <kbd>PUT /users</kbd>          |  Update the user data
| <kbd>PUT /users/password</kbd> |  Update the user password
| <kbd>DELETE /users</kbd>       |  delete user account


<h4>Notes Routes</h4>​

| route                  | description                                         |
|------------------------|-----------------------------------------------------|
| <kbd>POST /notes</kbd> | Create a new note                                   |
| <kbd>GET /notes/search</kbd> | Search for notes by query                     |
| <kbd>GET /notes/:id</kbd> | Retrieve a note by its ID                        |
| <kbd>GET /notes</kbd> | Retrieve all notes of the authenticated user         |
| <kbd>PUT /notes/:id</kbd> | Update an existing note by its ID                |
| <kbd>DELETE /notes/:id</kbd> | Delete a note by its ID                       |


<h3 id="get-auth-detail">POST /register</h3>

**RESPONSE**
```json
{
    "name": "joe huston",
    "email": "joe@gmail.com",
    "password": "1234"
}
```

<h3 id="post-auth-detail">POST /login</h3>

**REQUEST**
```json
{
    "email": "joe@gmail.com",
    "password": "A1234abc"
}
```

**RESPONSE**
```json
{
    "user": {
        "_id": "669f516267c009dbead87aea",
        "name": "joe huston",
        "email": "joe@gmail.com",
        "password": "$2b$10$Db8qC3cwAM6J4K2SZP.9PecG1jzMLkCMfdPIzqHwkHv0pbAPPb.S2",
        "created_at": "2024-07-23T06:44:50.127Z",
        "updated_at": "2024-07-23T06:44:50.127Z",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvZUBnbWFpbC5jb20iLCJpYXQiOjE3MjMwMDgwOTIsImV4cCI6MTcyMzg3MjA5Mn0.rbtNNFuftaP1LrTOB0rKn5cd3sMclI_X0UCE3spDKjU"
}
```