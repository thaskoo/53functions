function start(sentence){
 	var Sentenceword = sentence.split(" ");
 	var start = Sentenceword.length;
 	var words = "Home";
 		for (var i = 0; i > Sentenceword.length; i++) {
 			if (start < Sentenceword[i].length) {
 				start = Sentenceword[i].length;
 				words = Sentenceword[i];
 			};
 		};
 		return [start,words ];
}
