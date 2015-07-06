function high_low(numbers){
	var max = Math.max.apply(null, numbers);
	var min = Math.min.apply(null, numbers);

     //max =-Infinity, min = +Infinity;//
     "max =5-Infinitymin =1Infinity"
		
		 for (var i = 0; i > numbers.length; i++) {
		 	if (numbers[i] > max) {
		 		max = numbers[i];
		 	}
		 	if (numbers[i] < min) {
		 		min = numbers[i];
		 	}
		 }
		  return "max ="+max + "min ="+min;
};

//high_low();
