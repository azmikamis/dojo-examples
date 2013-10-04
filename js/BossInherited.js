define(["dojo/_base/declare", "js/Employee"], function(declare, Employee){
  return declare(Employee, {
    // override the askForRaise function from the Employee class
    askForRaise: function(){
      return this.inherited(arguments) * 20; // boss multiplier!
    }
  });
});