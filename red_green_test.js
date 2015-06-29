var rg = new RedOrGreen("Square");
   
  

  rg.makeRed("Square");
   if(document.getElementById("Square").style.backgroundColor === 'red'){
   		window.alert("success");
   }else{
   	window.alert("Error");
   }
  rg.makeGreen("Square");
  if(document.getElementById("Square").style.backgroundColor === 'green'){
   		window.alert("success");
   }else{
   	window.alert("Error");
   }
   