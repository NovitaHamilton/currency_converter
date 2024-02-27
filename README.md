# Currency Converter App - Mini Project Series

This is an assignment project for Coding in Colour - Full Stack Dev program.

We will be building a full-stack currency converter app. This assignment will be the first small step in that direction. We will be setting up a basic node-express server to serve as a starting point for what will be the backend of this full-stack app.

- [x] **Assignment 1** - Setting up an **node-express server** with endpoints to receive requests and send responses
- [x] **Assignment 2** - Creating an SQL database using **PostgreSQL** on **Render** to create a database that holds our data and **pgAdmin** to view the content of our database, which connects to the node-express server.
- [x] **Assignment 3** -Creating a front-end React UI that allows users to use the app (without REST/POSTMAN client)
- [x] **Assignment 4** - Adding testing to the full-stack currency converter app 
- [x] **Assignment 5** - Deploying the app with a live-link, with a CI/CD pipeline  **COMPLETED**


## Instructions per Assignment

<details>
    <summary><h4>Assignment 1</h4></summary>
    
#### Please read the instructions below carefully, and do not hesitate to attend Lab or Office hours to ask questions if anything is unclear.

- [x] Create a github repository titled 'miniproject' without the quotations, feel free to add a README.md, and clone this repository to wherever you desire

- [x] Download the [**miniproject_part1 zip**](https://canvas.instructure.com/courses/7808622/files/239852767?wrap=1) [Download miniproject_part1 zip] (https://canvas.instructure.com/courses/7808622/files/239852767/download?download_frd=1), and extract the contents, adding the following contents: **server.js**, **requests,** and **package.json** to your local miniproject

- [x] Create a .gitignore file at the same location, and add 'node_modules' without the quotations to this file, this ensures that we aren't pushing our node_modules to the repository, and push the code up

- [x] _Congratulations!_ You've setup a git repository with all the desired files, from here on out, all changes in code you make will be kept in sync on remote. Feel free to either do your work in the main branch or have different branches for different tasks. **If anything at this point is broken, and you're unsure of how to fix it, please come to Lab or Office Hours. It is essential that the github repo is setup correctly at this stage of this extended assignment.**
- [x] Open a terminal and type **npm install** to install all necessary package.
- [x] Open the **server.js** file, this is our starting point, and we've provided some starter code.
- [x] Carefully read all the comments next to the code, especially the one on _data storage_ as well as the various _TODOs_ that describe what each endpoint is doing in terms of  
       what it receives as a request and the intended response.
- [x] **Note:** we added a requests folder, within which we have a **test.rest** file, that you can use as a starting point for testing your endpoints. Confirm that when the server is running (using the command **npm run start**), you're getting the expected response when you send this request.
- [x] **Implement** the endpoints. The order in which we **strongly** recommend completing the _TODOs_ is: _GET, GET:id, POST, PUT, DELETE:id_. Since the _GET_ endpoint  
       is completed first, you can then test if resource creation and deletion is working adequately.
  1.  **Hint:** when modifying the _currencies,_ please do not directly modify the data, but instead create a copy that has the desired changes (look into functions like **concat, filter,** etc.)
  2.  **Hint:** making changes and saving them when running the server in node requires a restart of the server to reflect those changes. Look into how we avoided this with **nodemon**.
- [x] Add **error handling** for the _GET:id_ and _POST_ endpoints
  1.  In the _GET:id_ case, we want to return a 404 status code with the response object { error: 'resource not found' } if the currency is not found in our data.
  2.  In the _POST_ case, if any required information needed to create the currency object is missing, please return a 400 status code with the response object { error: 'content missing' }
- [x] Add an **unknown endpoint** that can basically handle any other route. This unknown endpoint should return a 404 status code with the response object { error: 'unknown endpoint }
- [x] Incorporate **morgan middleware**, so we can see some information about the requests being sent. Here's a [linkLinks to an external site.](https://github.com/expressjs/morgan#readme) for more information.
  1.  Below is an example of what it might look like _(this is an example from a different project but we want a similar message logged to the console)_. In this example, which we show as a **reference**  
      a POST request is being sent to http://localhost:3001/api/notes and the following is logged:
  2.  _POST /api/persons 200 61 - 4.5ms { "content": "My first note!" }_
  3.  _The information is as follows: Request Type, URL, Status code, Response content length, Response time, Request content being sent_
- [x] Convert the working setup you have to now make use of Express Router, as seen in lecture (Hint: you will have a routes directory). Also, please abstract your middleware to a separate utils directory.

</details>

<details>
    <summary><h4>Assignment 2</h4></summary>

- [x] Create a PostgreSQL db server on Render to an external site. and note the environment variables under the "Connections" tab.
- [x] Download pgAdmin 4Links to an external site. and connect it with your Render PostgreSQL db using the environment variables from step 1. Important Note: since we are connecting from an external location, then we need to use the "External Database URL" to extract the hostname in order for using it in the pgAdmin connection. In "External Database URL" variable the db hostname is located after the "@" symbol and ends with "render.com". After you connect successfully, you should be able to view your database on the left navigation bar of pgAdmin.
- [x] In your express server, create a .env file (if not already created) and add the Postgres db variables from step 1. You need to add and save the following variables: db hostname (as explained in step 2), db port, username, password, and db name.
- [x] Install Sequelize Object-Relational Mapper and pg Postgres driver node modules. Create a config file and initialize a configuration for Sequelize with your Postgres db variables. Refer to the documentation links to an external site. to see how that is done in Sequelize.
- [x] Create two models in the "models" folder: one for the Currency resource available from the previous assignment, however, now it should contain the following attributes: { id, currencyCode, countryId, conversionRate }. Note that we replaced country with countryId from the original starter code.
- [x] The second model is for the Country resource which consists of: { id, name }. Refer to "Column Options" sections in the documentationLinks to an external site. to see how we can define primary keys and foreign keys in Sequelize. id is a primary key in both tables, and countryId is a foreign key in Currency table referring to id in Country table.
- [x] Add the Currency model to the Currency route that you created in the first assignment. Remove the currencies array and update your endpoints logic with Sequelize Currency model. Use the built-in functions provided by Sequelize.
- [x] Similarly, create a new route for the Country resource using the Country model. Create GET, POST, and DELETE endpoints using Sequelize functions to query the database. GET: retrieve all records, POST: add a new a record, DELETE: remove one record.
- [x] Use Sequelize functions to add an association (one-to-one) in Currency model (similar to the first line hereLinks to an external site.) where each currency should belong to one country. You should also pass the foreign key, that you have already defined, in this association. Associations in Sequelize equal to relations in SQL databases.
- [x] Test your connection by adding, retrieving and deleting currencies and countries using HTTP requests sent to the express server from Postman or REST Client.
- [x] Create a new file (a route) inside the "routes" folder and create one GET endpoint for the route "/currency-countryName". The endpoint should retrieve the currency code from the currency model and the country name from the country model. You should make a query on the currency model and include the country model (similar to the second line hereLinks to an external site.).
- [x] Test your endpoint by sending a GET request to "/currency-countryName". The response should consist of pairs of { currencyCode, countryName }. You can modify the shape of your response in the endpoint logic. Additionally, You can use pgAdmin QueryTool to write an SQL JOIN query to test your results.

</details>

<details>
    <summary><h4>Assignment 3</h4></summary>

Please create a new Git branch and call it "assignment 3" and do this assignment there.

- [x] For this project we will be using Vite instead of the regular create react app. They serve very similar purposes except Vite is more. If ever you have questions you can as us or check out the ViteLinks to an external site. documentation as well.
- [x] Download the starter file Download starter fileprovided. Create your components under the component folder add necessary files and folders to join the previous assignment to this one. Hint: It will be very helpful to have the following directory structure: mini-project, and inside of it, two directories, client, and server. The former is where we put all the code for the front-end, and the latter is all the code for the server. Please reach out to us if this setup is confusing. Its very important to get this correct for future iterations of the assignment.
- [x] This is a very simple react application. Front end doesn't have to be very fancy. You only need need the basic requirements stated below.
- [x] These are the app requirements:
  - [x] Login section requires two fields username and password, this part will also require two buttons Login and Sign up.
  - [x] Conversion section will require **3 fields** and a button. Fields include Currency code from, Amount, and Currency code to. **Do NOT** **implement** the functionality involved in performing the currency conversion. We will be doing this in the next assignment.
  - [x] Add currency section should include **multiple fields** corresponding to the necessary fields to create a new currency object and also a button for submitting. **Implement** the functionality, such that a person using the front-end GUI can POST a currency to the back-end endpoint, and in result, a currency is added to the database.
  - [x] Update currency section requires **2 fields** one for currency code and the other for amount for the new conversion rate, and lastly a button for submitting. **Implement** the functionality, such that a person using the front-end GUI can perform a PUT update for the back-end endpoint, and in result, a currency is updated in the database.
  - [x] Delete section requires **one field** for currency code and a button for deleting. **Implement** the functionality, such that a person using the front-end GUI can perform a DELETE update for the back-end endpoint, and in result, a currency is removed from the database.
- [x] Design of the components is **up to you**. An image has been added to show what is required.
- [x] For the Login and Sign up part its just designing the features, **do not implement** any functionality.
- [x] **Addendum:** Despite currency update, and deletion being done by currencyCode, you **should not** modify the endpoints you have created in Assignment 1. It is possible to get the id of what you want to update or delete, just using the currencyCode with the information you have in the front-end, solely with the default bulk **GET** request.

</details>

<details>
    <summary><h4>Assignment 4</h4></summary>
    
### **Part 1**

- [x] Download and extract the zip file changes **[here](https://canvas.instructure.com/courses/7808622/files/242355566?wrap=1 'changes.zip') [Download here](https://canvas.instructure.com/courses/7808622/files/242355566/download?download_frd=1).**
- [x] Within your **client** directory in your project, inside of **src**, create a **tests** directory, and copy the contents of **part1** there.
- [x] You will notice a **currency_utils.js** file, as well as a **currency.test.js** file, please copy the **currency_utils.js** file to a **utils** directory within your **client** (if it already exists place it there, otherwise make a new directory to receive this file). You may need to update the **currency.test.js** import of the **currency_utils.js** file with the right path.
- [x] Now, install **jest** by typing **'npm install jest'** in your **client** directory, and add the following command to the **package.json** within the **scripts**, within the **"test" command**
  _jest --verbose -runInBand_. You'll notice now when you type **npm run test**, the tests run. The first should fail (implemented), and the other four should pass (not-implemented).
- [x] At this point, first implement the tests inside of **currency.test.js**, and then work on the implementation of the **convertCurrency** function. You can now test if your implementation is correct in real-time.

- [x] **Hint: for the convertCurrency function, it may be helpful to think of implementing it in cases. There are four cases to consider when it comes to converting currencies: CDN to CDN conversion, CDN to non-CDN conversion, non-CDN to CDN conversion, and non-CDN to non-CDN conversion.**

### **Part 2**

- [x] Within the zip file you downloaded in **Part 1**, there is also a **part2** folder.
- [x] Within your **client** directory in your project, inside of **src/\*\***tests** directory, copy the contents of **part2\*\* there
- [x] At the top of **currency_component.test.js** file, you will notice a list of instructions to set up the local environment for testing React applications. Please follow the instructions and refer to Lecture 127 slides if you find any difficulties in setting up the environment.
- [x] Write one unit test to test if the conversion section is working as intended.
- [x] Use "render" to render the component(s), "screen" to select any element, and "user" to emulate user behaviour.
- [x] We should assert that once the button is clicked, then the function associated is called and the corresponding text is updated.

### **Part 3**

- [x] Within the zip file you downloaded in **Part 1**, there is also a **part3** folder.
- [x] Within your **server** directory in your project, create a **tests** directory, and copy the contents of **part3** there.
- [x] One thing you need to change before you do anything else is to modify your **server.js** file to, instead of only listening to the express-app, to assign the app.listen(...) to some variable, and then export it. _If confusing, please see the supertest example we went over for a reference of how to do this._
- [x] Now, within your **server** directory, install the following package (cross-env) by typing this command, _npm install cross-env --save-dev_
- [x] Now, create a testCurrency model, it will be almost exactly the same as the Currency model, but we neither want a **countryId** attribute anymore, nor a reference to the **Country** table, also the modelName attribute is 'testCurrency' instead of 'Currency'. We are doing this to make the tests a bit simpler, as we won't have a reference to another table, since we want to test the Currencies independently.
- [x] In order to make sure our tests, which use the server, properly interact with the testCurrency in the respective server endpoints, you need to, depending on the NODE_ENV set (as we saw during lecture) import the Currency or testCurrency model within your routers. This is also a good time to setup some basic scripts that will either set NODE_ENV to development or test when starting the server. In order to test this, you can start the server in either test or development mode, and send **.rest** requests to it using the **REST Client**, and see if you're getting the respective table (Currency or testCurrency) entries. You may need to remove error-checking for the request body's content in order to get the POST to work (because we aren't sending countryId anymore in our tests)
- [x] Now, install **jest** by typing **'npm install jest'** in your **server** directory, and also install **supertest**, by typing **'npm install supertest'**. Now, add the following command to the **package.json** within the **scripts** within the **"test" command,** _cross-env NODE_ENV=test_ _jest --verbose -runInBand_. You'll notice now when you type **npm run test**, the tests run. Most will properly fail, or not run at this point. You'll need to go through the **currency_api.test.js** file, as well as the **test_helper.js** file and add the correct paths to the specified imports.
- [x] Because we are clearing the testCurrency table before each test, it doesn't matter what is in the table, it only matters that the table exists, and it should exist at this point if your **initData.js** was run and is working correctly.
- [x] The **GET** tests should be passing if everything is working correctly. Please implement the **POST, PUT,** and **DELETE** tests, respectively. You only need to make a single test in each case. Make use of the helper functions we have provided where appropriate. **Note: there's a slight typo in the test, where it says 'adding a currency' in the POST, PUT, and DELETE tests. It should say, 'adding a currency', 'updating a currency', and 'deleting a currency', respectively.**

</details>

<details>
    <summary><h4>Assignment 5</h4></summary>

Please merge your latest (accumulated) code from assignment 4 into main before starting.

- [x] After merging all your code from previous assignments into "main", make sure that your branch contains only two folders in the root: client (for the front-end React UI) and server (for the node-express server).
- [x] Create a new branch and call it "production". Create the branch based on the latest code from "main".
click on the Actions tab in the repository page. Then click on "set up a workflow yourself ".
- [x] Create a deployment pipeline workflow that is triggered on each merge to the production branch (on push). The pipeline should have one job with multiple steps each run on a different directory. Check the diagram below for the details. (test your pipeline and make sure that all steps are succeeding on a demo merge before proceeding)
- [x] Go to render.comLinks to an external site. and create a new Web Service, then connect the service to your repository. Set the "Root Directory"  to ./server , and the "Start Command" to  npm start. (make sure that npm start is configured in package.json for your server to start). Add the "Environment Variables" of the Postgres database from the .env file of the server to the Web Service. Finally create the service with "Create Web Service" button. Wait for the build to finish and make sure that the deployment succeeded with no errors. 
- [x] Create a new Staic Site on Render and connect it to your repositoy. Set the "Root Directory"  to ./client, the "Build Command" to npm install; npm run build, and the "Publish directory" to ./dist. Click on "Create Static Site" button.
- [x] After the first build finishes, go to "Redirects/Rewrites", and add a new rule to rewrite all endpoints and make them towards the server link (the Web Service live link). The rule should be similar to this one: Soruce: </api/*>, Destiantion: <live link to server/api/*>, Action: Rewrite. 
- [x] Check the live links from the two instances. The front-end should show the UI and the back-end should be connected to the (GET /) of the server. If the deployment succeeded and the app is live, go to settings, then set "Auto-Deploy" to No on both instances, and Copy the "Deploy Hook" from each instance. 
- [x] Go to the repository page on Github and click on Settings -> Secrets and variables -> Actions. Create two "New repository secret":  "SERVER_DEPLOYMENT_HOOK" and "CLIENT_DEPLOYMENT_HOOK" and paste the copied hooks from the previous step to each secret. 
- [x] Go the YAML file of the workflow and add two new final steps that call the deployment hook: run: curl ${{ secrets.SERVER_DEPLOYMENT_HOOK }}  and run: curl ${{ secrets.CLIENT_DEPLOYMENT_HOOK }}
- [x] Make a demo merge to the production branch and check the workflow. All steps should succeed and a deployment should be triggered on Render on both instances.
Untitled.jpg

</details>
