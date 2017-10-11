window.onload=function(){
	totop();
}
function totop () {
	var img = document.getElementById("img");
	 function getscrolltop(){
	 	return document.documentElement.scrollTop+document.body.scrollTop;
	 } 
	 function setscrolltop(value){
	 	if(document.documentElement.scrollTop)
	 		document.documentElement.scrollTop=value;
	 	else 
	 		document.body.scrollTop=value;
	 }
	 window.onscroll=function(){
	 	if(getscrolltop()>0)
	 		img.style.display = "block";
	 	else 
	 		img.style.display = "none";
	 }
	 img.onclick=function(){
	 	var scrollmove = setInterval(move, 10);
	 	 function move(){
	 	 	setscrolltop(getscrolltop()/1.1);
	 		if(getscrolltop()<1)
	 			clearInterval(scrollmove);
	 	}
	}
}