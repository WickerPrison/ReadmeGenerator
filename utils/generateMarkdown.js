// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if(data.license != ""){
    return `[![GitHub License](https://img.shields.io/github/license/${data.user}/${data.repo})](https://github.com/${data.user}/${data.repo}/blob/main/LICENSE.txt)`;
  }
  else{
    return "";
  }
}

function renderSection(dataElement, output){
  if(dataElement == ""){
    return "";
  }
  else{
    return output;
  }
}

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

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data)}
 
  # ${data.title}
      
  ${renderSection(data.description, `## Description
  ${data.description}`)}
  
  ## Table of Contents
  [Tests](#tests-id)
  
  ${renderSection(data.install, `## Installation
  ${data.install}`)}

  ${renderSection(data.usage, `## Usage
  ${data.usage}`)}
 
  ${renderSection(data.license,
  `## License
  Distributed under the ${data.license} License. See LICENSE.txt for more information.`)}
  
  ${renderSection(data.contribute, `## Contributing
  ${data.contribute}`)}
  
  ${renderSection(data.test, `## Tests {#tests-id}
  ${data.test}`)}

  ${renderQuestionSection(data)}
  `;
}

module.exports = generateMarkdown;
