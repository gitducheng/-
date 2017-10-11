window.onload = function(){
	TOP();
}
function TOP(){
	var img = document.getElementById('png');
	function getscrolltop(){
		return document.documentElement.scrollTop+document.body.scrollTop;
	}
	function setscrolltop(value){
		if (document.documentElement.scrollTop) {
			document.documentElement.scrollTop=value;
		}
		else{
			document.body.scrollTop=value;
		}
	}
	window.onscroll=function(){
		if(getscrolltop()>0){
			img.style.display = 'block';
		}
		else{
			img.style.display = 'none';
		}
	}
	img.onclick=function(){
		var gotop = setInterval(scrollmove, 10);
		function scrollmove () {
			 setscrolltop(getscrolltop()/1.1);
			 if(getscrolltop()<1){
			 	clearInterval(gotop);
			 }
		}
	}
}