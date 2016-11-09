var args2 = process.argv[2];

if (args2[3] < 9) {
    console.log("Wow you're old as hell!")
} else {
    console.log("Did your balls drop yet?")
};

var allNums = (args2[0] + args2[1] + args2[3] + args2[4])

if((allNums !== NaN) && (args2[2] === "/")) {
	console.log("Passed first test!")
	} else {
		console.log("Please use '/' to separate month and year and use numeric digits.")
	};