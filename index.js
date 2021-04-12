// TODO: Include packages needed for this application
var inquirer = requires('inquirer');
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  // not sure if this goes here...
  inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, ' '));
  })
}

// Function call to initialize app
init();
