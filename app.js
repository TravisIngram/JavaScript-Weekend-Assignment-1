var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
};

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
};

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
};

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
};

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
};

// Created five more claims using the 'constructor function'.

var claim6 = new claim("Andre Astora", "Specialist", 2100);
var claim7 = new claim("Solaire Astora", "Optical", 24000);
var claim8 = new claim("Laurentius Swamp", "Emergency", 425);
var claim9 = new claim("Oswald Carim", "Primary Care", 160);
var claim10 = new claim("Malfurion Stormrage", "Specialist", 880);


var initialList = [claim1, claim2, claim3, claim4, claim5]

var totalPayedOut = 0;

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

//function to determine percent covered

//function to determine amount covered