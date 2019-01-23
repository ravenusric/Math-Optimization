for (var i=1; i<=100; i++){
	if (i % 2 == 0 && i % 3 == 0) {
        console.log(" The number " + [i] + " is divisible by two and three ");

    }
    
     else if (i % 3 == 0 && i % 2 !== 0) {
        console.log(" The number " + [i] + " is divisible by three ");

      }
     else if (i % 2 == 0 && i % 3 !== 0) {
        console.log(" The number " + [i] + " is divisible by two");

      }
	else {
        console.log(" The number " + [i] + " is odd ");
	}
}

