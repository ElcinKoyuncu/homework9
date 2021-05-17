const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("createIntern-name", () => {
    
    it("new Intern name", () => {
      
      const newIntern = new Intern('Elcin','EK','elcin@elcin.com','UM');
      
      const name = "Elcin";
      
      const result = newIntern.getName();
      
      expect(result).toEqual(name);
    });
});

    describe("createIntern-id", () => {
       
        it("new Intern id", () => {
           
          const newIntern = new Intern('Elcin','EK','elcin@elcin.com','UM');
          
          const id = "EK";
          
          const result = newIntern.getId();
        
          expect(result).toEqual(id);
        });
    });
        describe("createIntern-email", () => {
            
            it("new Intern email", () => {
             
              const newIntern = new Intern('Elcin','EK','elcin@elcin.com','UM');
              
              const email = "elcin@elcin.com";
              
              const result = newIntern.getEmail();
             
              expect(result).toEqual(email);
            });
  });
  describe("createIntern-school", () => {
    
    it("new Intern school", () => {
    
      const newIntern = new Intern('Elcin','EK','elcin@elcin.com','UM');
     
      const school = "UM";
      
      const result = newIntern.getSchool();
     
      expect(result).toEqual(school);
    });
});
});