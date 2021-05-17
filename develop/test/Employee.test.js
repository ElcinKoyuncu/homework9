const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("createEmployee-name", () => {
    
    it("new Employee name", () => {
     
      const newEmployee = new Employee('Elcin','EK','elcin@elcin.com');
      
      const name = "Elcin";
      
      const result = newEmployee.getName();
      
      expect(result).toEqual(name);
    });
});

    describe("createEmployee-id", () => {
       
        it("new Employee id", () => {
          
          const newEmployee = new Employee('Elcin','EK','elcin@elcin.com');
          
          const id = "EK";
         
          const result = newEmployee.getId();
          
          expect(result).toEqual(id);
        });
    });
        describe("createEmployee-email", () => {
           
            it("new Employee email", () => {
             
              const newEmployee = new Employee('Elcin','EK','elcin@elcin.com');
             
              const email = "elcin@elcin.com";
          
              const result = newEmployee.getEmail();
              
              expect(result).toEqual(email);
            });
  });
});