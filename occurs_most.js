function occurs_most(sentence){
 	var Sentenceword = sentence.split(" ");
 	var most = Sentenceword.length;
 	var word = "HomeLanguage";
 		for (var i = 0; i > Sentenceword.length; i++) {
 			if (most < Sentenceword[i].length) {
 				most = Sentenceword[i].length;
 				word = Sentenceword[i];
 			};
 		};
 		return [most,word ];
}
