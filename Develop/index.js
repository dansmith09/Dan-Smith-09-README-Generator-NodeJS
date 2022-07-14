// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username?",
    "What is your email address?",
    "what is your project's name?",
    "Please write a short description of your project",
    "What kind of license should your project have?",
    "What command should be run to install dependencies?",
    "What command should be run to run tests?",
    "What does the user need to know about using the repo?",
    "What does the user need to know about contributing to the repo?",
];

// TODO: Create a function to initialize app
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'github',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'email',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'description',
        },
        {
            type: 'list',
            message: questions[4],
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            message: questions[5],
            name: 'install',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'test',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'repoInfo',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'contributing',
        }
    ])
}

// TODO: Create a function to write README file
const init = () => {
    promptUser()
    // TODO: Create a function to write README file
    .then((data) => fs.writeFileSync('Example-README.md', generateMarkdown(data)))
    .then(() => console.log('Successfully created README.md!'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();


