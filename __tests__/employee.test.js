const employee = require("../lib/Employee")

describe("employee" , () => {
    
    describe("name" , () => {
        it("should make a new employee object from input" , () => {

        const employee = new Employee("Dave" , 14 , "davedavidson@gmail.com");

        expect(employee.name).toEqual(expect.any(String));
        
        })
    });

    describe("id" , () => {
        it("should make a new ID object for the previously created employee" , () => {

        const employee = new Employee("Dave" , 14 , "davedavidson@gmail.com");

        expect(employee.id).toEqual(expect.any(Number));
        
        });
    });

    describe("email" , () => {
        it("should make a new email object for the previously created employee", () => {

        const employee = new Employee("Dave" , 14 , "davedavidson@gmail.com");

        expect(employee.email).toEqual(expect.any(String));

        });
    });

    describe("get name" , () => {
        it("should get the employee name from inquirer prompt" , () => {

        const employee = new Employee("Dave" , 14 , "davedavidson@gmail.com");

        expect(employee.getName()).toEqual(expect.any(String));

        });
    });

    describe("get id " , () => {
        it("should get the employee id from inquirer prompt" , () => {
        
        const employee = new Employee("Dave" , 14 , "davedavidson@gmail.com");

        expect(employee.getId()).toEqual(expect.any(Number));

        });
    });

    describe("get email" , () => {
        it("should get the employee email from inquirer prompt", () => {

        const employee = new Employee("Dave" , 14 , "davedavidson@gmail.com");

        expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));

        });
    });

    describe("get role" , () => {
        it("should get the next employee role from inquirer prompt" , () => {

        const employee = new Employee("Dave" , 14 , "davedavidson@gmail.com");

        expect(employee.getRole()).toEqual("Employee");

        });
    });
});


