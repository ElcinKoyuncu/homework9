const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("createEngineer-name", () => {
    
    it("new Engineer name", () => {
      
      const newEngineer = new Engineer('Elcin','EK','elcin@elcin.com','ElcinKoyuncu');
      
      const name = "Elcin";
      
      const result = newEngineer.getName();
      
      expect(result).toEqual(name);
    });
});

    describe("createEngineer-id", () => {
       
        it("new Engineer id", () => {
          
          const newEngineer = new Engineer('Elcin','EK','elcin@elcin.com','ElcinKoyuncu');
       
          const id = "EK";
         
          const result = newEngineer.getId();
         
          expect(result).toEqual(id);
        });
    });
        describe("createEngineer-email", () => {
         
            it("new Engineer email", () => {
               
              const newEngineer = new Engineer('Elcin','EK','elcin@elcin.com','ElcinKoyuncu');
              
              const email = "elcin@elcin.com";
             
              const result = newEngineer.getEmail();
             
              expect(result).toEqual(email);
            });
  });
  describe("createEngineer-github", () => {
    
    it("new Engineer school", () => {
     
      const newEngineer = new Engineer('Elcin','EK','elcin@elcin.com','ElcinKoyuncu');
     
      const github = "ElcinKoyuncu";
      
      const result = newEngineer.getGithub();
     
      expect(result).toEqual(github);
    });
});
});