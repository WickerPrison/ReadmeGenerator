// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const licenseText = require('./licenseText.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
    let output = generateMarkdown(data);
    fs.writeFile("./Output/README.md", output, (err) =>
    err ? console.error(err) : console.log("Success"));
    fs.writeFile("./Output/LICENSE.txt", licenseText.licenseText[data.license], (err) =>
    err ? console.error(err) : console.log("Success"));
}


/*
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
*/