const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("createEngineer-name", () => {
    // 'reverse' should reverse "Hello World!"
    it("new Engineer name", () => {
      // In order to test the function, we need to create a working example. First we define 'str'. 
      const newEngineer = new Engineer('Elcin','EK','elcin@elcin.com','ElcinKoyuncu');
      // Next we define 'reversed' as the value of 'str' reversed.
      const name = "Elcin";
      // We pass 'str' into '.reverse()' and set that value equal to result
      const result = newEngineer.getName();
      // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
      expect(result).toEqual(name);
    });
});

    describe("createEngineer-id", () => {
        // 'reverse' should reverse "Hello World!"
        it("new Engineer id", () => {
          // In order to test the function, we need to create a working example. First we define 'str'. 
          const newEngineer = new Engineer('Elcin','EK','elcin@elcin.com','ElcinKoyuncu');
          // Next we define 'reversed' as the value of 'str' reversed.
          const id = "EK";
          // We pass 'str' into '.reverse()' and set that value equal to result
          const result = newEngineer.getId();
          // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
          expect(result).toEqual(id);
        });
    });
        describe("createEngineer-email", () => {
            // 'reverse' should reverse "Hello World!"
            it("new Engineer email", () => {
              // In order to test the function, we need to create a working example. First we define 'str'. 
              const newEngineer = new Engineer('Elcin','EK','elcin@elcin.com','ElcinKoyuncu');
              // Next we define 'reversed' as the value of 'str' reversed.
              const email = "elcin@elcin.com";
              // We pass 'str' into '.reverse()' and set that value equal to result
              const result = newEngineer.getEmail();
              // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
              expect(result).toEqual(email);
            });
  });
  describe("createEngineer-github", () => {
    // 'reverse' should reverse "Hello World!"
    it("new Engineer school", () => {
      // In order to test the function, we need to create a working example. First we define 'str'. 
      const newEngineer = new Engineer('Elcin','EK','elcin@elcin.com','ElcinKoyuncu');
      // Next we define 'reversed' as the value of 'str' reversed.
      const github = "ElcinKoyuncu";
      // We pass 'str' into '.reverse()' and set that value equal to result
      const result = newEngineer.getGithub();
      // We expect 'result' to equal 'reversed' if the 'reverse()' function is working correctly.
      expect(result).toEqual(github);
    });
});
});