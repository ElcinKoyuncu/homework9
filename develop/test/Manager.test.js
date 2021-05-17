const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("createManager-name", () => {
    
    it("new Manager name", () => {
     
      const newManager = new Manager('Elcin','EK','elcin@elcin.com',123456);
      
      const name = "Elcin";
      
      const result = newManager.getName();
      
      expect(result).toEqual(name);
    });
});

    describe("createManager-id", () => {
        
        it("new Manager id", () => {
          
          const newManager = new Manager('Elcin','EK','elcin@elcin.com',123456);
          
          const id = "EK";
          
          const result = newManager.getId();
         
          expect(result).toEqual(id);
        });
    });
        describe("createManager-email", () => {
            
            it("new Manager email", () => {
             
              const newManager = new Manager('Elcin','EK','elcin@elcin.com',123456);
             
              const email = "elcin@elcin.com";
            
              const result = newManager.getEmail();
             
              expect(result).toEqual(email);
            });
  });
  describe("createManager-officeNumber", () => {
    
    it("new Manager office number", () => {
      
      const newManager = new Manager('Elcin','EK','elcin@elcin.com',123456);
      
      const officeNumber = 123456;
      
      const result = newManager.getOfficeNumber();
     
      expect(result).toEqual(officeNumber);
    });
});
});