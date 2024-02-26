// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "filename",
        question: "What should be the filename of your readme?"
    },
    {
        name: "title",
        question: "What is the title of your project?"
    },
    {
        name: "description",
        question: "Write a short description of the project"
    },
    {
        name: "deployment",
        question: "Give your deployment link"
    }
];

// TODO: Create a function to write README file
function writeToFile(data) {
    let output = `# ${data.title}
    
## Description
${data.description}

## Deployment Link
${data.deployment}`;

    fs.writeFile(data.filename + ".md", output, (err) =>
    err ? console.error(err) : console.log("Success"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: questions[0].question,
                name: questions[0].name
            },
            {
                type: "input",
                message: questions[1].question,
                name: questions[1].name
            },
            {
                type: "input",
                message: questions[2].question,
                name: questions[2].name
            },
            {
                type: "input",
                message: questions[3].question,
                name: questions[3].name
            }
        ])
        .then((response) => {
            writeToFile(response);
        });
}

// Function call to initialize app
init();
