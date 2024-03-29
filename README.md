# ThoughtShare#

## Description

This project is a demonstration of using MongoDB, a NoSQL database, for building a modern web application. MongoDB is a document-oriented database, meaning it stores data in flexible, JSON-like documents. Unlike traditional relational databases, MongoDB doesn't require a predefined schema, allowing for greater flexibility and scalability in data storage.

Technologies Used
MongoDB: A document-oriented NoSQL database used for data storage and retrieval.
Node.js: A JavaScript runtime environment used for building server-side applications.
Express.js: A web application framework for Node.js used for building RESTful APIs and handling HTTP requests.
Mongoose: An object data modeling (ODM) library for MongoDB and Node.js, providing a higher-level abstraction for interacting with MongoDB databases.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contact](#contact)
- [License](#license)

## Installation

1.Clone the repository in your terminal.
git clone https://github.com/somphangchanleuxay/ThoughtShare.git

2.Navigate to project directory.
cd ThoughtShare

3.Install depencies.
npm install

4.Run the Server.
npm start

5.Access the API endpoints at http://localhost:3000 


## Usage
To use ThoughtShare in your project, follow these steps:

1. Set Up Database: Ensure you have a MongoDB database set up. You can configure the database connection in the .env file.

2. Install Dependencies: Install the required Node.js dependencies using npm: npm install

3. Start the Server: Run the server using the following command:
npm start

4. Access API Endpoints: You can access the API endpoints using tools like Insomnia, Postman, or by integrating them into your frontend application. Here are some example API endpoints:

Retrieve all thoughts:
GET http://localhost:3000/api/thoughts

Create a new thought:
POST http://localhost:3000/api/thoughts

Retrieve a specific thought by ID:
GET PUT http://localhost:3000/api/thoughts/:id

Update a thought by ID:
PUT http://localhost:3000/api/thoughts/:id

Delete a thought by ID:
DELETE http://localhost:3000/api/thoughts/:id

(Replace :id with the actual ID of the thought)

Also refer to video if you need a visual walkthrough. Of other routing as well. above are some of the API endpoints.

Link to Video
https://drive.google.com/file/d/1EDMTMRXAgIZE9kdS83PiB3pcxcqBKUmj/view

## Contact

Github
https://github.com/somphangchanleuxay

Link to Repository: [ThoughtShare Repository](https://github.com/your-username/ThoughtShare)

## License

MIT License

Copyright (c) [2024] [Somphang Chanleuxay]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
