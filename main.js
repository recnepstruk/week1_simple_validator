// var args = process.argv;

// console.log("this is the 2nd arg: ", args[2]);
// // console.log("this is the 3rd arg: ", args[3]);

// if(args[2].replace(/-/g, "").length < 10) {
// 	console.log("Your phone number is too short.");
// } else {
// 	console.log('Your phone number is too long.');
// }

var args2 = process.argv[2];
var args3 = process.argv[3];


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




// if (args2.charAt(3) === '-' && args2.charAt(7) === '-') {
//     if (args2); {
//         console.log("True");
//     }
// } else {
//     console.log("False");
// }
//     var isValid = true;
//     for (var i = 0; i < args2.length; i++) {
//         var notNum = parseInt(args2[i]);
//         if (notNum === NaN && (i === 3 || i === 7)) {
//             isValid = false;
//         } else {
//             console.log("Incorrect format! Please use '-' and not spaces.");
//         }
//     }
// };
