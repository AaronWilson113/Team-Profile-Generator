const intern = require("../lib/Intern")

describe("intern" , () => {
    describe("school" , () =>{
        it("should create a school object for intern" , () => {

        const intern = new Intern("Dave" , 14 , "davedavidson@gmail.com" , "PBA");

        expect(intern.school) .toEqual(expect.any(String));

        });
    });

    describe("get school" , () =>{
        it("should get intern's school from inquirer prompt" , () => {

        const intern = new Intern("Dave" , 14 , "davedavidson@gmail.com" , "PBA");

        expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));

        });
    });

    describe("get role" , () =>{
        it("should over ride role as intern", () => {
        
        const intern = new Intern("Dave" , 14 , "davedavidson@gmail.com" , "PBA");

        expect(intern.getRole()).toEqual("Intern");

        });
    });
});