const manager = require("../lib/Manager")

describe("manager" , () => {
    describe("officeNumber" , () => {
        it("should create a officenumber object for manager" , () => {

        const manager = new Manager("Dave" , 14 , "davedavidson@gmail.com" , "1");

        expect(manager.officeNumber).toEqual(expect.any(Number));

        });
    });

    describe("get role" , () => {
        it("should over ride role as manager" , () => {

        const manager = new Manager("Dave" , 14 , "davedavidson@gmail.com" , "1");

        expect(manager.getRole()).toEqual("Manager");

        });
    });
});