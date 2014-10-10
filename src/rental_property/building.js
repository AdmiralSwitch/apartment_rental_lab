
function Building(address) {
  this.address=address;
  this.buildings = [];
  this.units = [];
}

Building.prototype.setManager = function(person) {
  if (person.constructor.name === "Manager"){
    this.manager = person;
  }
};

Building.prototype.getManager = function(){
  return this.manager;
};

Building.prototype.addTenant = function(unit, tenant) {
  if (tenant.references.length >= 2 && getManager() !== undefined){
    this.units.push(tenant);
  }
 
};

Building.prototype.removeTenant = function(unit, tenant) {
  // remove tenant
  // ...
};

Building.prototype.availableUnits = function(){   
    return this.units.filter(function(unit){
        return unit.available();
    });
};

Building.prototype.rentedUnits = function(){
    return this.units.filter(function(unit){
        return !unit.available();
    });
};

module.exports = Building;
