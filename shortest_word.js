function shortest_word(str){
	var spltStr = str.split(" ");
	var shr = spltStr[0].length; // declaring
	var trv = null;
		for(var x = 1; x < spltStr.length; x++) {
			if(shr > spltStr[x].length) {
				shr = spltStr[x].length;
				trv = spltStr[x];

		}
} 
	return [trv, shr];
}