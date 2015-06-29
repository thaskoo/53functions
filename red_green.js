function RedOrGreen(div){
	
	this.makeGreen = function(){
      	document.getElementById(div).style.background = "Green";
    }

    this.makeRed = function() {
      	document.getElementById(div).style.background = "Red";
  	}
}
