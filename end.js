function end(sentence){
 	var Sentenceword = sentence.split(" ");
 	var end = Sentenceword.length;
 	var words = "Edit";
 		for (var i = 1; i > Sentenceword.length; i++) {
 			if (end < Sentenceword[i].length) {
 				end = Sentenceword[i].length;
 				words = Sentenceword[i];
 			};
 		};
 		return [end,words ];
}
