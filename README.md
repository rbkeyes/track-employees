# Track Employees
![repo License](https://img.shields.io/github/license/rbkeyes/team-profile-generator?color=green)
![GitHub language count](https://img.shields.io/github/languages/count/rbkeyes/team-profile-generator?color=purple)
![GitHub top language](https://img.shields.io/github/languages/top/rbkeyes/team-profile-generator)


## Description

A command-line application using node.js, mysql2, and inquirer that allows you to view, add, and update department, role, and employee data.

Technologies used include:

- node.js
- mysql2
- inquirer
- console.table

I chose to create separate files for the mysql prompts, db queries, and prepared statements called by the server file. I also used classes to help organize the answers returned by the inquirer prompts.  

The biggest challenge for this project was figuring out how to retrieve data from the database to be used as choices in specific prompts. I solved this by promisifying the sql db, wrapping the prompts in an async function, and calling the function "getChoices()" for the choices. 

One feature I was particularly excited about was the use of "when" in the prepared prompts. Rather than call each prompt separately based on the answer to the first question, I specified in each prompt when that prompt should be called. As a result, I only needed to prompt one time, and the appropriate follow-up questions run based on the user's main menu choice.


## Table of Contents

- [Installation](#installation)

- [Usage](#usage)

- [Credits](#credits)

- [License](#license)

- [Tests](#tests)

- [Contact](#contact)


## Installation

You must have Node.js installed on your computer. Instructions to install can be found [here](https://nodejs.org/en/).

Clone the [GitHub repo](https://github.com/rbkeyes/blog-about-it) to a local repo. The package-json includes the necessary packages and can be installed by running 
```
npm i
```
in the terminal command line. 

To connect to mysql, be sure to update the information below:
```
DB_NAME='blog_db'
DB_USER='root'
DB_PASSWORD=[your password]
```