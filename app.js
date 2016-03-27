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

// Step 1. Created five more claims using the 'constructor function'.

var claim6 = new claim("Andre Astora", "Specialist", 2100);
var claim7 = new claim("Solaire Astora", "Optical", 24000);
var claim8 = new claim("Laurentius Swamp", "Emergency", 425);
var claim9 = new claim("Oswald Carim", "Primary Care", 160);
var claim10 = new claim("Malfurion Stormrage", "Specialist", 880);

// Step 2. Combine the existing claims with the new claims in one array.

// I am not sure how to add newly created objcts to an existing
// or empty array.  The various 'Array' methods work on the actual object,
// not simply the named variable.  I'll research more  but for now, I just
// created the new array manually.

var initialList = [claim1, claim2, claim3, claim4, claim5];

var claimsList = [claim1, claim2, claim3, claim4, claim5,
claim6, claim7, claim8, claim9, claim10];

var percentCovered = 0;
var totalPayedOut = 0;

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

// Step 3. Add a function that will determine what percent
// of the claim will be covered, based on the rules provided.

var percentCoveredCalc = function(visitType) {
	
	switch(visitType.toLowerCase()) {
		case "optical":
		percentCovered += 0.00;
		break;

		case "specialist":
		percentCovered += 0.10;
		break;

		case "primary care":
		percentCovered += 0.50;
		break;

		case "emergency":
		percentCovered += 1.00;
		break;

		default:
		console.log("No coverage for you!");
		percentCovered = 0;
	}
	return percentCovered;
};

// Testing the output.

percentCoveredCalc(claim9.visitType);
console.log(percentCovered);

// Step 4, 5, and 6. Add a function that will determine the `totalPayedOut`
// for a given claim.  Include a statemt indicating how much and to
// whom the payment was made as well as the total paid out.

var dollarAmtCalc = function(visitCost, percentCovered, patientName) {
	totalPayedOut = visitCost * percentCovered;
	console.log("Paid out", "$" + totalPayedOut, "for", patientName + ".");
	return totalPayedOut;
};

// Testing the output.

dollarAmtCalc(claim9.visitCost, percentCoveredCalc(claim9.visitType), claim9.patientName);
console.log(totalPayedOut);