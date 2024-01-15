# Mini Project PART 1

Setting up an node-express server with endpoints to receive requests and send responses 

This is an assignment project for Coding in Colour - Full Stack Dev program.

We will be building a full-stack currency converter app. This assignment will be the first small step in that direction. We will be setting up a basic node-express server to serve as a starting point for what will be the backend of this full-stack app.



## Instructions

#### Please read the instructions below carefully, and do not hesitate to attend Lab or Office hours to ask questions if anything is unclear.

1.  Create a github repository titled 'miniproject' without the quotations, feel free to add a README.md, and clone this repository to wherever you desire
2.  Download the  [**miniproject_part1 zip**](https://canvas.instructure.com/courses/7808622/files/239852767?wrap=1) [Download miniproject_part1 zip](https://canvas.instructure.com/courses/7808622/files/239852767/download?download_frd=1), and extract the contents, adding the following contents: **server.js**, **requests,**  and **package.json**  to your local miniproject
3.  Create a .gitignore file at the same location, and add 'node_modules' without the quotations to this file, this ensures that we aren't pushing our node_modules to the repository, and push the code up
4.  _Congratulations!_ You've setup a git repository with all the desired files, from here on out, all changes in code you make will be kept in sync on remote. Feel free to either do your work in the main branch or have different branches for different tasks. **If anything at this point is broken, and you're unsure of how to fix it, please come to Lab or Office Hours. It is essential that the github repo is setup correctly at this stage of this extended assignment.**
5.  Open a terminal and type  **npm install**  to install all necessary package.
6.  Open the  **server.js**  file, this is our starting point, and we've provided some starter code.
7.  Carefully read all the comments next to the code, especially the one on  _data storage_  as well as the various _TODOs_  that describe what each endpoint is doing in terms of  
    what it receives as a request and the intended response.
8.  **Note:**  we added a requests folder, within which we have a  **test.rest**  file, that you can use as a starting point for testing your endpoints. Confirm that when the server is running (using the command  **npm run start**), you're getting the expected response when you send this request.
9.  **Implement** the endpoints. The order in which we **strongly**  recommend completing the _TODOs_ is:  _GET, GET:id, POST, PUT, DELETE:id_. Since the  _GET_ endpoint  
    is completed first, you can then test if resource creation and deletion is working adequately.
    1.  **Hint:** when modifying the  _currencies,_ please do not directly modify the data, but instead create a copy that has the desired changes (look into functions like  **concat, filter,** etc.)
    2.  **Hint:**  making changes and saving them when running the server in node requires a restart of the server to reflect those changes. Look into how we avoided this with  **nodemon**.
10.  Add  **error handling**  for the  _GET:id_  and  _POST_ endpoints  
    1.  In the _GET:id_ case, we want to return a 404 status code with the response object { error: 'resource not found' } if the currency is not found in our data.
    2.  In the _POST_ case, if any required information needed to create the currency object is missing, please return a 400 status code with the response object { error: 'content missing' }
11.  Add an **unknown endpoint**  that can basically handle any other route. This unknown endpoint should return a 404 status code with the response object { error: 'unknown endpoint }
12.  Incorporate  **morgan middleware**, so we can see some information about the requests being sent. Here's a  [linkLinks to an external site.](https://github.com/expressjs/morgan#readme)  for more information.
    1.  Below is an example of what it might look like  _(this is an example from a different project but we want a similar message logged to the console)_. In this example, which we show as a  **reference**  
        a POST request is being sent to http://localhost:3001/api/notes and the following is logged:
    2.  _POST /api/persons 200 61 - 4.5ms { "content": "My first note!" }_
    3.  _The information is as follows: Request Type, URL, Status code, Response content length, Response time, Request content being sent_
13.  Convert the working setup you have to now make use of Express Router, as seen in lecture (Hint: you will have a routes directory). Also, please abstract your middleware to a separate utils directory.
> Written with [StackEdit](https://stackedit.io/).
