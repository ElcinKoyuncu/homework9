const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("createEmployee-name", () => {
    // 'reverse' should reverse "Hello World!"
    it("new Employee name", () => {
      // In order to test the function, we need to create a working example. First we define 'str'. 
      const newEmployee = new Employee('Elcin','EK','elcin@elcin.com');
      // Next we define 'reversed' as the value of 'str' reversed.
      const name = "Elcin";
      // We pass 'str' into '.reverse()' and set that value equal to result
      const result = newEmployee.getName();
      // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
      expect(result).toEqual(name);
    });
});

    describe("createEmployee-id", () => {
        // 'reverse' should reverse "Hello World!"
        it("new Employee id", () => {
          // In order to test the function, we need to create a working example. First we define 'str'. 
          const newEmployee = new Employee('Elcin','EK','elcin@elcin.com');
          // Next we define 'reversed' as the value of 'str' reversed.
          const id = "EK";
          // We pass 'str' into '.reverse()' and set that value equal to result
          const result = newEmployee.getId();
          // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
          expect(result).toEqual(id);
        });
    });
        describe("createEmployee-email", () => {
            // 'reverse' should reverse "Hello World!"
            it("new Employee email", () => {
              // In order to test the function, we need to create a working example. First we define 'str'. 
              const newEmployee = new Employee('Elcin','EK','elcin@elcin.com');
              // Next we define 'reversed' as the value of 'str' reversed.
              const email = "elcin@elcin.com";
              // We pass 'str' into '.reverse()' and set that value equal to result
              const result = newEmployee.getEmail();
              // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
              expect(result).toEqual(email);
            });
  });
});