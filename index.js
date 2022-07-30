//required modules
const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
//using path and output to write file
const path = require('path');
const output = path.resolve(__dirname , 'output');
const outputpath = path.join(output , 'team.html')
const generateTeam = require('./src/html.js')


teamArray = [];

//inquirer prompts
// prompts for adding manager upon application startup 
const manager = () => {
    inquirer
        .prompt([

        {
            type: "input",
            name: "managerName",
            message: "What is the name of your project's manager?",
            validate: (value)=>{ if(value){return true} else {return 'please input your project manager name to continue'}},
        },

        {
            type: "input",
            name: "managerID",
            message: "What is your project manager's employee ID?",
            validate: (value)=>{ if(value){return true} else {return 'please input your project manager employee id to continue'}},
        },

        {
            type: "input",
            name: "managerEmail",
            message: "What is your project manager's email adress?",
            validate: (value)=>{ if(value){return true} else {return 'please input your project manager email adress to continue'}},
        },

        {
            type: "input",
            name: "managerOfficeNum",
            message: "What is your project manager's office number?",
            validate: (value)=>{ if(value){return true} else {return 'please input your project manager office number to continue'}},
        },
        
        {
            type: "list",
            name: "next",
            choices: ["Add engineer" , "Add Intern" , "My team is complete!"],
            validate: (value)=>{ if(value){return true} else {return 'please input what you would like to do next to continue'}},
        },

        ])
        .then(answers => {

            const  { managerName, managerID, managerEmail, managerOfficeNum } = answers; 

            const manager = new Manager (managerName, managerID, managerEmail, managerOfficeNum);

            teamArray.push(manager);

            console.log(teamArray);

            if (answers.next === "Add engineer") {
                engineer();
            } else if (answers.next === "Add Intern") {
                intern();
            } else if (answers.next === "My team is complete!") {
                renderPage();
            }
            
        }) 
        
};

const engineer = () => {
    inquirer
        .prompt([

        {
            type: "input",
            name: "engineerName",
            message: "What is the name of your engineer?",
            validate: (value)=>{ if(value){return true} else {return 'please input a engineer name to continue'}},
        },

        {
            type: "input",
            name: "engineerID",
            message: "What is your engineers employee ID?",
            validate: (value)=>{ if(value){return true} else {return 'please input your engineers employee id to continue'}},
        },

        {
            type: "input",
            name: "engineerEmail",
            message: "What is your engineer's email adress?",
            validate: (value)=>{ if(value){return true} else {return 'please input your engineers email adress to continue'}},
        },

        {
            type: "input",
            name: "engineerGit",
            message: "What is your engineer's github account username?",
            validate: (value)=>{ if(value){return true} else {return 'please input your engineers github account username to continue'}},
        },

        {
            type: "list",
            name: "next",
            choices: ["Add engineer" , "Add Intern" , "My team is complete!"],
            validate: (value)=>{ if(value){return true} else {return 'please input what you would like to do next to continue'}},
        },

        ])
        .then(answers => {

            const  { engineerName, engineerID, engineerEmail, engineerGit} = answers; 

            const engineer = new Engineer (engineerName, engineerID, engineerEmail, engineerGit);

            teamArray.push(engineer);

            console.log(teamArray);

            if (answers.next === "Add engineer") {
                addEngineer();
            } else if (answers.next === "Add Intern") {
                addIntern();
            } else if (answers.next === "My team is complete!") {
                renderPage();
            };


           
            
        }) 
};

const intern = () => {
    inquirer
        .prompt([

            {
                type: "input",
                name: "internName",
                message: "What is the name of your intern?",
                validate: (value)=>{ if(value){return true} else {return 'please input a intern name to continue'}},
            },

            {
                type: "input",
                name: "internID",
                message: "What is your intern's employee ID?",
                validate: (value)=>{ if(value){return true} else {return 'please input your interns employee id to continue'}},
            },

            {
                type: "input",
                name: "internEmail",
                message: "What is your intern's email adress?",
                validate: (value)=>{ if(value){return true} else {return 'please input your interns email adress to continue'}},
            },

            {
                type: "input",
                name: "internSchool",
                message: "What is your intern's school?",
                validate: (value)=>{ if(value){return true} else {return 'please input your interns school to continue'}},
            },

            {
                type: "list",
                name: "next",
                choices: ["Add engineer" , "Add Intern" , "My team is complete!"],
                validate: (value)=>{ if(value){return true} else {return 'please input what you would like to do next to continue'}},
            },
        
        ])
        .then(answers => {
            
            const  { internName, internID , internEmail, internSchool} = answers; 

            const intern = new Intern (internName, internID , internEmail, internSchool);

            teamArray.push(intern);

            console.log(teamArray);

            if (answers.next === "Add engineer") {
                addEngineer();
            } else if (answers.next === "Add Intern") {
                addIntern();
            } else if (answers.next === "My team is complete!") {
                renderPage();
            };


           
            
        }) 
};

function addIntern() {

    intern();

};

function addEngineer() {

    engineer();

};

function renderPage () {
   
    console.log("Done");

    fs.writeFileSync(outputpath, generateTeam(teamArray), "UTF-8")

}

manager()
    

