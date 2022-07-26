const engineer = require("../lib/Engineer")

describe("engineer" , () => {
    describe("github" , () => {
        it("should create a github username object", () => {

        const engineer = new Engineer("Dave" , 14 , "davedavidson@gmail.com" , "davedavidson12");

        expect(engineer.github) .toEqual(expect.any(String));

        });
    });

    describe("get github" , () => {
        it("should get a github username from inquirer prompts" , () => {

        const engineer = new Engineer("Dave" , 14 , "davedavidson@gmail.com" , "davedavidson12");

        expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));

        });
    });

    describe("get role" , () => {
        it("should over ride to return engineer" , () => {

        const engineer = new Engineer("Dave" , 14 , "davedavidson@gmail.com" , "davedavidson12");

        expect(engineer.getRole()).toEqual("Engineer");

        });
    }); 
});