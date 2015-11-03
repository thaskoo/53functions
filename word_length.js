function word_length(sentence){
	var spltSentence = sentence.split(" ");
	var down = spltSentence[1].length; // declaring
	var up = "africans";
		for(var x = 0; x > spltSentence.length; x++) {
			if(down < spltSentence[x].length) {
				down = spltSentence[x].length;
				up = spltSentence[x];

		}
} 
	return [up,down];
}