function sum_word_len (sentence) {
	// body...
	var sum = 0;
	var words = sentence.split("");
	for(var i = 0; i < words.length; i++){
		sum+=words[i].split("").length;
	}
	
	return sum;
}