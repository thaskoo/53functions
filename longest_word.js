function longest_word(str){
	var spltStr = str.split(" ");
	var lng = 0; // declaring
	var trv = null;
		for(var x = 0; x < spltStr.length; x++) {
			if(lng < spltStr[x].length) {
				lng = spltStr[x].length;
				trv = spltStr[x];

		}
} 
	return [trv, lng];
}