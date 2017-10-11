window.onload=function(){
     goTopEx();
     shopping();
 }
function goTopEx() { 
    var obj = document.getElementById("toTop"); 
    function getScrollTop() { 
    return document.documentElement.scrollTop + document.body.scrollTop; 
  } 
 function setScrollTop(value) { 
    if (document.documentElement.scrollTop) { 
        document.documentElement.scrollTop = value; 
    } 
    else { 
        document.body.scrollTop = value; 
    } 
 } 
 window.onscroll = function() { 
    getScrollTop() > 0 ? obj.style.display = "block": obj.style.display = "none"; 
 } 
 obj.onclick = function() { 
    var goTop = setInterval(scrollMove, 10); 
    function scrollMove() { 
        setScrollTop(getScrollTop() / 1.1); 
        if (getScrollTop() < 1) clearInterval(goTop); 
    } 
 } 
} 
function shopping(){
	var basics = document.getElementsByClassName('basic');
	var slides = document.getElementsByClassName('slide');
	for(var i = 0;i<basics.length;i++){
		basics[i].id = i;
		basics[i].onclick = function(){
			if(slides[this.id].style.display == "block"){
			slides[this.id].style.display = "none";
		}else{
			slides[this.id].style.display ="block";
		}
		}
	}
}


