// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Project title: '
  },
  {
    type: 'input',
    name: 'description',
    message: 'Project description: '
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation instructions: '
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage information: '
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Contribution guidelines: '
  },
  {
    type: 'input',
    name: 'testInstr',
    message: 'Test instructions: '
  },
  {
    type: 'input',
    name: 'github',
    message: 'GitHub username: '
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Installation instructions: '
  },
  {
    type: 'input',
    name: 'email',
    message: 'Email address: '
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let content = markdown.generateMarkdown(data);
  fs.writeFile(fileName, content, (err) =>{
    err ? console.error(err) : console.log('File written!')
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile('output.md', answers);
  })
}

// Function call to initialize app
init();
