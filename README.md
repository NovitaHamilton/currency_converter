# Currency Converter App - Mini Project Series

This is an assignment project for Coding in Colour - Full Stack Dev program.

We will be building a full-stack currency converter app. This assignment will be the first small step in that direction. We will be setting up a basic node-express server to serve as a starting point for what will be the backend of this full-stack app.
- [x] **Assignment 1** - Setting up an **node-express server** with endpoints to receive requests and send responses 
- [ ] **Assignment 2** - Creating an SQL database using **PostgreSQL** on **Render** to create a database that holds our data and **pgAdmin** to view the content of our database, which connects to the node-express server.  **<--- WE ARE HERE**
- [ ] Assignment 3 -Creating a front-end React UI that allows users to use the app (without REST/POSTMAN client)
- [ ] Assignment 4 - Adding unit and integration testing to the full-stack currency converter app
- [ ] Assignment 5 - Adding front-end and back-end testing to the full-stack currency converter app
- [ ] Assignment 6 - Deploying the app with a live-link, with a CI/CD pipeline

## Instructions per Assignment

<details>
    <summary><h4>Assignment 1</h4></summary>
    
#### Please read the instructions below carefully, and do not hesitate to attend Lab or Office hours to ask questions if anything is unclear.

- [x] Create a github repository titled 'miniproject' without the quotations, feel free to add a README.md, and clone this repository to wherever you desire

- [x] Download the  [**miniproject_part1 zip**](https://canvas.instructure.com/courses/7808622/files/239852767?wrap=1) [Download miniproject_part1 zip]        (https://canvas.instructure.com/courses/7808622/files/239852767/download?download_frd=1), and extract the contents, adding the following contents: **server.js**, **requests,**  and **package.json**  to your local miniproject

- [x]  Create a .gitignore file at the same location, and add 'node_modules' without the quotations to this file, this ensures that we aren't pushing our node_modules to the repository, and push the code up

- [x]  _Congratulations!_ You've setup a git repository with all the desired files, from here on out, all changes in code you make will be kept in sync on remote. Feel free to either do your work in the main branch or have different branches for different tasks. **If anything at this point is broken, and you're unsure of how to fix it, please come to Lab or Office Hours. It is essential that the github repo is setup correctly at this stage of this extended assignment.**
- [x]  Open a terminal and type  **npm install**  to install all necessary package.
- [x]  Open the  **server.js**  file, this is our starting point, and we've provided some starter code.
- [x] Carefully read all the comments next to the code, especially the one on  _data storage_  as well as the various _TODOs_  that describe what each endpoint is doing in terms of  
    what it receives as a request and the intended response.
- [x]  **Note:**  we added a requests folder, within which we have a  **test.rest**  file, that you can use as a starting point for testing your endpoints. Confirm that when the server is running (using the command  **npm run start**), you're getting the expected response when you send this request.
- [x]  **Implement** the endpoints. The order in which we **strongly**  recommend completing the _TODOs_ is:  _GET, GET:id, POST, PUT, DELETE:id_. Since the  _GET_ endpoint  
    is completed first, you can then test if resource creation and deletion is working adequately.
    1.  **Hint:** when modifying the  _currencies,_ please do not directly modify the data, but instead create a copy that has the desired changes (look into functions like  **concat, filter,** etc.)
    2.  **Hint:**  making changes and saving them when running the server in node requires a restart of the server to reflect those changes. Look into how we avoided this with  **nodemon**.
- [x]  Add  **error handling**  for the  _GET:id_  and  _POST_ endpoints  
    1.  In the _GET:id_ case, we want to return a 404 status code with the response object { error: 'resource not found' } if the currency is not found in our data.
    2.  In the _POST_ case, if any required information needed to create the currency object is missing, please return a 400 status code with the response object { error: 'content missing' }
- [x]  Add an **unknown endpoint**  that can basically handle any other route. This unknown endpoint should return a 404 status code with the response object { error: 'unknown endpoint }
- [x]  Incorporate  **morgan middleware**, so we can see some information about the requests being sent. Here's a  [linkLinks to an external site.](https://github.com/expressjs/morgan#readme)  for more information.
    1.  Below is an example of what it might look like  _(this is an example from a different project but we want a similar message logged to the console)_. In this example, which we show as a  **reference**  
        a POST request is being sent to http://localhost:3001/api/notes and the following is logged:
    2.  _POST /api/persons 200 61 - 4.5ms { "content": "My first note!" }_
    3.  _The information is as follows: Request Type, URL, Status code, Response content length, Response time, Request content being sent_
- [x]  Convert the working setup you have to now make use of Express Router, as seen in lecture (Hint: you will have a routes directory). Also, please abstract your middleware to a separate utils directory.
    
</details>

<details>
    <summary><h4>Assignment 2</h4></summary>

- [x]  Create a PostgreSQL db server on Render to an external site. and note the environment variables under the "Connections" tab. 
- [x]  Download pgAdmin 4Links to an external site.  and connect it with your Render PostgreSQL db using the environment variables from step 1. Important Note: since we are connecting from an external location, then we need to use the "External Database URL" to extract the hostname in order for using it in the pgAdmin connection. In "External Database URL" variable the db hostname is located after the "@" symbol and ends with "render.com". After you connect successfully, you should be able to view your database on the left navigation bar of pgAdmin. 
- [x]  In your express server, create a .env file (if not already created) and add the Postgres db variables from step 1. You need to add and save the following variables: db hostname (as explained in step 2), db port, username, password, and db name. 
- [x]  Install Sequelize Object-Relational Mapper and pg Postgres driver node modules. Create a config file and initialize a configuration for Sequelize with your Postgres db variables. Refer to the documentation links to an external site. to see how that is done in Sequelize.
- [x]  Create two models in the "models" folder: one for the Currency resource available from the previous assignment, however, now it should contain the following attributes: { id, currencyCode, countryId, conversionRate }. Note that we replaced country with countryId from the original starter code.
- [x]  The second model is for the Country resource which consists of: { id, name }. Refer to "Column Options" sections in the documentationLinks to an external site. to see how we can define primary keys and foreign keys in Sequelize. id is a primary key in both tables, and countryId is a foreign key in Currency table referring to id in Country table.
- [ ]  Add the Currency model to the Currency route that you created in the first assignment. Remove the currencies array and update your endpoints logic with Sequelize Currency model. Use the built-in functions provided by Sequelize.
- [ ]  Similarly, create a new route for the Country resource using the Country model. Create GET, POST, and DELETE endpoints using Sequelize functions to query the database. GET: retrieve all records, POST: add a new a record, DELETE: remove one record.
- [ ]  Use Sequelize functions to add an association (one-to-one) in Currency model (similar to the first line hereLinks to an external site.) where each currency should belong to one country. You should also pass the foreign key, that you have already defined, in this association. Associations in Sequelize equal to relations in SQL databases.
- [ ]  Test your connection by adding, retrieving and deleting currencies and countries using HTTP requests sent to the express server from Postman or REST Client. 
- [ ]  Create a new file (a route) inside the "routes" folder and create one GET endpoint for the route "/currency-countryName". The endpoint should retrieve the currency code from the currency model and the country name from the country model. You should make a query on the currency model and include the country model (similar to the second line hereLinks to an external site.).
- [ ]  Test your endpoint by sending a GET request to "/currency-countryName". The response should consist of pairs of { currencyCode, countryName }. You can modify the shape of your response in the endpoint logic. Additionally, You can use pgAdmin QueryTool to write an SQL  JOIN query to test your results.

