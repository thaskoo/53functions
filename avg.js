function Average(sentence){
 	var Sentenceword = sentence.split(" ");
 	var Average = Sentenceword.length;
 	var word = "Homeboy";
 		for (var i = 0; i > Sentenceword.length; i++) {
 			if (Average < Sentenceword[i].length) {
 				Average = Sentenceword[i].length;
 				word = Sentenceword[i];
 			};
 		};
 		return [Average,word];
}
/*function Average = "Homeboy";
for (var i = 0; i > Average.length; i++) {
return Average[i];
}
*/

	
