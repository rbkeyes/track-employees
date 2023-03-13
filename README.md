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

Clone the [GitHub repo](https://github.com/rbkeyes/track-employees) to a local repo. The package-json includes the necessary packages and can be installed by running 
```
npm i
```
in the terminal command line. 

To connect to mysql, be sure to add your password to the mysql connection in the queries file, as shown below:
```
 host: 'localhost',
        user: 'root',
        database: 'employees_db',
        password: '[insert your password here]',
```
You will also need to sign into mysql and run
```
SOURCE ./db/schema.sql
```
to create the database and tables if they have not already been created. You can also choose to run
```
SOURCE ./db/seeds.sql
```
to seed the database with started data prior to using. Or, you can choose to add your own data using the prompts when you run the application.


## Usage

To use, open an integrated terminal from your local cloned repo. Be sure to follow installation instructions above before attempting to run.

In the command line, enter the command 
```
npm start
```
or
```
node index
```
to start the application. You will be prompted to respond to questions in the command line. Use the up and down arrows on your keypad to choose your answer, and press return/enter to select. 

To exit the program, either select "Exit" from the main menu prompt when offered, or you can enter "control c" in the command line to exit.

**Video demonstrating usage:**

https://user-images.githubusercontent.com/114431225/224804052-d1c9b30a-7d3a-4e69-ae8a-cc4de11a439b.mp4



## Credits

Coursework for the bootcamp was used as reference material in completing this project.

Documentation for [inquirer](https://www.npmjs.com/package/inquirer) was also used as a reference.

No starter code was provided for this project.


## License

[MIT license](./LICENSE)


## Tests

There are no tests at this time.


## Contact

Still have questions? Find me on [GitHub](https://github.com/rbkeyes).

Or, you can [email me](mailto:rbkeyes@gmail.com).
