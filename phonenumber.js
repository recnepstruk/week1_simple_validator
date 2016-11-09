var args = process.argv;

console.log("this is the 2nd arg: ", args[2]);

var args2 = process.argv[2];
var args3 = process.argv[3];

if (args2.charAt(3) === '-' && args2.charAt(7) === '-') {
    if (args2); {
        console.log("True");
    }
} else {
    console.log("False");
};

if(args[2].replace(/-/g, "").length < 10) {
	console.log("Your phone number is too short.");
}; 

    // var isValid = true;
    // for (var i = 0; i < args2.length; i++) {
    //     var notNum = parseInt(args2[i]);
    //     if (notNum === NaN && (i === 3 || i === 7)) {
    //         isValid = false;
    //     } else {
    //         console.log("Incorrect format! Please use '-' and not spaces.");
    //     }
    // }

