//required modules
const inquirer = require("inquirer");
const fs = require("fs");

//inquirer prompts
// prompts for adding manager upon application startup 
const manager = () => {
    inquirer
        .prompt([

        {
            type: "input",
            name: "managerName",
            message: "What is the name of your project's manager?",
            validate: (value)=>{ if(value){return true} else {return 'please input a project manager name to continue'}},
        },

        {
            type: "input",
            name: "managerID",
            message: "What is your project manager's employee ID?",
            validate: (value)=>{ if(value){return true} else {return 'please input a project manager employee id to continue'}},
        },

        {
            type: "input",
            name: "managerEmail",
            message: "What is your project manager's email adress?",
            validate: (value)=>{ if(value){return true} else {return 'please input a project manager email adress to continue'}},
        },

        {
            type: "input",
            name: "managerOfficeNum",
            message: "What is your project manager's office number?",
            validate: (value)=>{ if(value){return true} else {return 'please input a project manager office number to continue'}},
        },
        
        ])
};

