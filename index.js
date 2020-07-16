const inquirer = require('inquirer');
const { writeFile } = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    //project title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        default: 'README.md Generator',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter a project title');
                return false;
            }
        }
    },
    //project description
    {
        type: 'input',
        name: 'description',
        message: 'Enter a project description',
        default: 'Create a well formatted and professional README.md file for your project by answering a few command line prompts',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter a description');
                return false;
            }
        }
    },
    //Installation
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps requried to install your project?',
        default: 'To install: Download or clone the repository to your local machine. Make sure to install inquirer npm. You must have Node.js for the program to work.',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('Please enter installation instructions');
                return false;
            }
        }
    },
    //Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Provide examples for use',
        default: "To use the program run 'node index.js' from your terminal. You will be prompted to answer a few questions about your project. Once done your complete README file can be found in the dist folder.",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter examples for use');
                return false;
            }
        }
    },
    //License
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        default: 'Other',
        choices: ['MIT', 'GNU','Mozilla','Apache','Other']

    },
    //Contributing
    {
        type:'input',
        name:'contributing',
        message: 'How can others contribute to your project?',
        default: 'If you would like to contribute please contact the email provided below',
        validate: contributeInpute => {
            if(contributeInpute){
                return true;
            } else {
                console.log('Please enter if/how others can contribute');
                return false;
            }
        }
    },
    //Tests
    {
        type:'input',
        name:'test',
        message: 'Provide examples on how to test your project',
        default: "This project currently doesn't have any tests",
        validate: testInput => {
            if(testInput){
                return true;
            } else {
                console.log('Please enter examples to test your project')
                return false;
            }
        }
    },
    //Questions
    {
        type: 'input',
        name:'username',
        message:'What is your github username?',
        default:'theresarutledge',
        validate: username => {
            if(username){
                return true;
            } else {
                console.log('Please enter your github username');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'email',
        message: 'What email can be used for questions?',
        default: 'email@gmail.com',
        validate: email => {
            if(email){
                return true;
            } else {
                console.log('Please enter an email address');
                return false;
            }
        }
    }

];

// function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName,data, err => {
         if(err) throw err;
         console.log('Your file has been created. Checkout out the dist folder.')
    })
}

// function to initialize program
function init() {
   return inquirer.prompt(questions);
}

// function call to initialize program, then takes user answers to create markdown content which is then written to a README.md file in the dist folder
init()
.then(userInput=> {
    return generateMarkdown(userInput)}) 
.then(pageMd => {
    writeToFile('./dist/README.md',pageMd)
})
    
    
 
