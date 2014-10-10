function Unit (number, building, sqft, rent) {
	this.number = number;
	this.building = building;
	this.sqft = sqft;
	this.rent = rent;
	this.tenant = null;
}

Unit.prototype.available = function(){
	if (this.tenant === null){
		return true;
	}	else {
    return false;
  }
};

// export the module
module.exports = Unit;

