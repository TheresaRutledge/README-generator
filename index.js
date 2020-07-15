// inquirer npm install
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
        choices: ['MIT', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3','No license']

    },
    //Contributing
    {
        type:'input',
        name:'contributing',
        message: 'How can others contribute to your project?',
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

// function call to initialize program
init()//calls questions prompts
//then take answers to generate MD file
.then(userInput=> {
    return generateMarkdown(userInput)})
//MD file content used to create new file    
.then(pageMd => {
    writeToFile('./dist/README.md',pageMd);

})
    
    
 
