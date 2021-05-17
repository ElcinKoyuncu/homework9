const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("createIntern-name", () => {
    // 'reverse' should reverse "Hello World!"
    it("new Intern name", () => {
      // In order to test the function, we need to create a working example. First we define 'str'. 
      const newIntern = new Intern('Elcin','EK','elcin@elcin.com','UM');
      // Next we define 'reversed' as the value of 'str' reversed.
      const name = "Elcin";
      // We pass 'str' into '.reverse()' and set that value equal to result
      const result = newIntern.getName();
      // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
      expect(result).toEqual(name);
    });
});

    describe("createIntern-id", () => {
        // 'reverse' should reverse "Hello World!"
        it("new Intern id", () => {
          // In order to test the function, we need to create a working example. First we define 'str'. 
          const newIntern = new Intern('Elcin','EK','elcin@elcin.com','UM');
          // Next we define 'reversed' as the value of 'str' reversed.
          const id = "EK";
          // We pass 'str' into '.reverse()' and set that value equal to result
          const result = newIntern.getId();
          // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
          expect(result).toEqual(id);
        });
    });
        describe("createIntern-email", () => {
            // 'reverse' should reverse "Hello World!"
            it("new Intern email", () => {
              // In order to test the function, we need to create a working example. First we define 'str'. 
              const newIntern = new Intern('Elcin','EK','elcin@elcin.com','UM');
              // Next we define 'reversed' as the value of 'str' reversed.
              const email = "elcin@elcin.com";
              // We pass 'str' into '.reverse()' and set that value equal to result
              const result = newIntern.getEmail();
              // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
              expect(result).toEqual(email);
            });
  });
  describe("createIntern-school", () => {
    // 'reverse' should reverse "Hello World!"
    it("new Intern school", () => {
      // In order to test the function, we need to create a working example. First we define 'str'. 
      const newIntern = new Intern('Elcin','EK','elcin@elcin.com','UM');
      // Next we define 'reversed' as the value of 'str' reversed.
      const school = "UM";
      // We pass 'str' into '.reverse()' and set that value equal to result
      const result = newIntern.getSchool();
      // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
      expect(result).toEqual(school);
    });
});
});