// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const licenseText = require('./licenseText.js');

inquirer
    .prompt([
        {
            type: "input",
            message: "What is your Github username?",
            name: "user"
        },
        {
            type: "input",
            message: "What is the name of the Github repo?",
            name: "repo"
        },
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },
        {
            type: "input",
            message: "Write a short description of the project",
            name: "description"
        },
        {
            type: "input",
            message: "What are the installation instructions for your project?",
            name: "install"
        },
        {
            type: "input",
            message: "What usage information does the user need?",
            name: "usage"
        },
        {
            type: "input",
            message: "What are the contribution guidlines for this project?",
            name: "contribute"
        },
        {
            type: "input",
            message: "What are the test instructions for this project?",
            name: "test"
        },
        {
            type: "list",
            message: "Which license will this product use?",
            name: "license",
            choices:[
                {name: "MIT", value: "MIT"},
                {name: "GNU GPLv3", value: "GNU GPLv3"},
                {name: "ISC", value:"ISC"},
                {name: "Apache License 2.0", value: "Apache License 2.0"}
            ]
        },
        {
            type: "input",
            message: "Give your deployment link",
            name: "deployment"
        }
    ])
    .then((response) => {
        writeToFile(response);
    });


// TODO: Create a function to write README file
function writeToFile(data) {
    let output = createOutput(data);
    fs.writeFile("./Output/README.md", output, (err) =>
    err ? console.error(err) : console.log("Success"));
    fs.writeFile("./Output/LICENSE.txt", licenseText.licenseText[data.license], (err) =>
    err ? console.error(err) : console.log("Success"));
}


function createOutput(data){
return `
[![GitHub License](https://img.shields.io/github/license/${data.user}/${data.repo})](https://github.com/${data.user}/${data.repo}/blob/main/LICENSE.txt)
# ${data.title}
    
## Description
${data.description}

## Table of Contents

## Installation
${data.install}

## Usage
${data.usage}

## License
Distributed under the ${data.license} License. See LICENSE.txt for more information.

## Contributing
${data.contribute}

## Tests
${data.test}

## Questions

`;
}


/*
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/