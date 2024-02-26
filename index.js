// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Write a short description of the project"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let output = `# ${data.title}
    
## Description
${data.description}`;

    fs.writeFile(fileName, output, (err) =>
    err ? console.error(err) : console.log("Success"));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                message: questions[0],
                name: "title"
            },
            {
                type: "input",
                message: questions[1],
                name: "description"
            }
        ])
        .then((response) => {
            writeToFile("output.md", response);
        });
}

// Function call to initialize app
init();
