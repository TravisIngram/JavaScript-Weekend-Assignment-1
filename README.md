# Prime Weekend Challenge 1

## Hey Primers! 

For the challenge this weekend, you will be creating an application that will process insurance claims.

We will provided you with an array of 5 items.  You will use the `constructor function` to create 5 more and then combine the two into one array of 10 items.

To complete this challenge, you will need to create two functions.

* First, determine what _percentage_ (per the rules below) of the insurance claim will be covered.

* Second, determine what the specific _dollar amount_ (based on the `visitCost` value) will be.

Within your cost determining method, log out a message in the following format, `'Paid out $xxx for xxpatientxx.'`.

Finally, log out the entire amount paid to the customer.

All numbers should be rounded to the nearest whole number!

###Rules###

_Optical_ - covers __0%__

_Specialist_ - covers __10%__

_Emergency_ - covers __100%__

_Primary Care_ - covers __50%__	

####Hard Mode####

Append to the DOM!

####Pro Mode####

Style appended content with CSS!

###My Steps###

* Create 5 more claims using the provided `constructor function`.
* Combine all claims into a single array.
* Create a `switch` to determine the `percentCovered` for each claim.
* Use the `percentCovered` to calculate the `dollarAmtCovered`
* Output a statement that specifies how much was paid and to whom.
* Output the `totalPayedOut`.


####Attempted Solutions####

```javascript
claimsList.push(claim);
```

```javascript
for (var i = 0; i < initialList.length; i ++) {
	claimsList.push(initialList.pop());
}
```

```javascript
dollarAmtCalc(claim9.visitCost, percentCoveredCalc(claim9.visitType), claim9.patientName);
console.log(totalPayedOut);
```

```javascript
var dollarAmtCalc = function(visitCost, percentCovered, patientName) {
	totalPayedOut = visitCost * percentCoveredCalc;
	console.log("Paid out", "$" + totalPayedOut, "for", patientName + ".");
	return totalPayedOut;
};
```

```javascript
var percentCovered = 0;
```

####Issues####

I've gotten stuck a number of times on this particular challenge.  Currently, I'm trying to figure out how to determine the amount that is paid to the patient.

We already have one function that will return the `percentCovered` of a given claim.

It seems like we should take the `visitCost` and multiply it by that number.

What I'm having trouble figuring out is what we're actually supposed to be doing.  There seem to be steps missing.

===

I am now going to assume that we need to be able to pass an array as an argument to a function that then processes the contents of that array and returns the information requested above.

What has been tripping me up is how to access and combine the various values.  I guess it seems like this should all be pretty self contained but that doesn't feel right.

I'll go ahead and try to do everything at once and see where I end up.  I'll use the same process that I did for the STI group project earlier in the week.

=== (20160327)

I've reverted and am just using independent functions.  This produces the correct output when they are run individually and fed specific data.

They don't work when run consecutively.  The `percentCovered` gets doubled because that is what you are effectively dong when calling the first function in the second.

I might try again tomorrow.  We'll see.

=== (20160329)

After talking with Russ and Ryan, I've managed to make this project work as intended.  At least how I assume it was supposed to work.  The main piece I was missing was adding in `var claim = claimsList[i];` to my loop and talking more about the argument I would pass into `percentCoveredCalc` function.  Talking though those pieces helped me out and increased my understanding of what I ought to do.