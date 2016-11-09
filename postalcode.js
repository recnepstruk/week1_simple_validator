var goingPostal = +process.argv[2];


if(typeof goingPostal != 'number') {
	console.log("this is not a number")
} else {
	console.log("this is a number")
};

// if(goingPostal.length < 5) {
// 	console.log("Your entry is too short.")
// } else if(goingPostal.length > 5) {
// 	console.log("Your entry is too long.")
// } else {
// 	console.log("Your entry is perfect.");
// };

