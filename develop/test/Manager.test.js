const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("createManager-name", () => {
    // 'reverse' should reverse "Hello World!"
    it("new Manager name", () => {
      // In order to test the function, we need to create a working example. First we define 'str'. 
      const newManager = new Manager('Elcin','EK','elcin@elcin.com',123456);
      // Next we define 'reversed' as the value of 'str' reversed.
      const name = "Elcin";
      // We pass 'str' into '.reverse()' and set that value equal to result
      const result = newManager.getName();
      // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
      expect(result).toEqual(name);
    });
});

    describe("createManager-id", () => {
        // 'reverse' should reverse "Hello World!"
        it("new Manager id", () => {
          // In order to test the function, we need to create a working example. First we define 'str'. 
          const newManager = new Manager('Elcin','EK','elcin@elcin.com',123456);
          // Next we define 'reversed' as the value of 'str' reversed.
          const id = "EK";
          // We pass 'str' into '.reverse()' and set that value equal to result
          const result = newManager.getId();
          // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
          expect(result).toEqual(id);
        });
    });
        describe("createManager-email", () => {
            // 'reverse' should reverse "Hello World!"
            it("new Manager email", () => {
              // In order to test the function, we need to create a working example. First we define 'str'. 
              const newManager = new Manager('Elcin','EK','elcin@elcin.com',123456);
              // Next we define 'reversed' as the value of 'str' reversed.
              const email = "elcin@elcin.com";
              // We pass 'str' into '.reverse()' and set that value equal to result
              const result = newManager.getEmail();
              // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
              expect(result).toEqual(email);
            });
  });
  describe("createManager-officeNumber", () => {
    // 'reverse' should reverse "Hello World!"
    it("new Manager office number", () => {
      // In order to test the function, we need to create a working example. First we define 'str'. 
      const newManager = new Manager('Elcin','EK','elcin@elcin.com',123456);
      // Next we define 'reversed' as the value of 'str' reversed.
      const officeNumber = 123456;
      // We pass 'str' into '.reverse()' and set that value equal to result
      const result = newManager.getOfficeNumber();
      // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
      expect(result).toEqual(officeNumber);
    });
});
});