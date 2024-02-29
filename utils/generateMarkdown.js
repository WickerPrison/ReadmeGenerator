// creates the license badge
function renderLicenseBadge(data) {
  if(data.license != ""){
    return `[![GitHub License](https://img.shields.io/github/license/${data.user}/${data.repo})](https://github.com/${data.user}/${data.repo}/blob/main/LICENSE.txt)`;
  }
  else{
    return "";
  }
}

// checks if a section is empty and adds it to the output if it is not
function renderSection(dataElement, output){
  if(dataElement == ""){
    return "";
  }
  else{
    return output;
  }
}

// sets up the questions section of the readme
function renderQuestionSection(data){
  if(data.user == "" && data.email == "") return;
  let output = `## Questions
  Please direct any additional questions here.
  `

  if(data.user != ""){
    output += `
  GitHub Profile: [${data.user}](https://github.com/${data.user})
  `;
  }
  
  if(data.email != ""){
    output += `
  Email: <${data.email}>
  `;
  }
  
  return output;
}

// sets up the table of contents
function renderTableOfContents(data){
  let output = `## Table of Contents
`;
  if(data.description != ""){
    output += `
  [Description](#description)
  `;
  }

  if(data.install != ""){
    output += `
  [Installation](#installation)
  `;
  }

  if(data.usage != ""){
    output += `
  [Usage](#usage)
  `;
  }

  if(data.license != ""){
    output += `
  [License](#license)
  `;
  }

  if(data.contribute != ""){
    output += `
  [Contributing](#contributing)
  `;
  }

  if(data.test != ""){
    output += `
  [Tests](#tests)
  `;
  }

  if(data.user != "" || data.email != ""){
    output += `
  [Questions](#questions)
  `;
  }

  return output;
}

// creates the string that will be written to the markdown file
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data)}
 
  # ${data.title}
      
  ${renderSection(data.description, `## Description
  ${data.description}`)}
  
  ${renderTableOfContents(data)}
  
  ${renderSection(data.install, `## Installation
  ${data.install}`)}

  ${renderSection(data.usage, `## Usage
  ${data.usage}`)}
 
  ${renderSection(data.license,
  `## License
  Distributed under the ${data.license} License. See LICENSE.txt for more information.`)}
  
  ${renderSection(data.contribute, `## Contributing
  ${data.contribute}`)}
  
  ${renderSection(data.test, `## Tests
  ${data.test}`)}

  ${renderQuestionSection(data)}
  `;
}

module.exports = generateMarkdown;
