window.onload = function() {
	var btn = document.getElementById('footbutton');
	var timer = null;
	var isTop = true;
	btn.onclick = function() {
		timer = setInterval(function() {
			var osTop = document.body.scrollTop;
			var ispeed = Math.floor(-osTop / 10);
			document.body.scrollTop = osTop + ispeed;
			isTop = true;
			if (osTop == 0) {
				clearInterval(timer);
			}
		}, 30)
	}










	window.onscroll = function(){
		if (!isTop) {
			clearInterval(timer);
		}
		isTop = false;
		var btn2 = document.getElementById('footbutton');
		var Top = document.body.scrollTop;
		if(Top<2000){
			btn2.style.display = "none";
		}
		else{
			btn2.style.display = "block";
		}
	}




	var tab = document.getElementsByClassName('section-2')[0].getElementsByTagName('li');
	for (var i = 0; i < tab.length; i++) {
		tab[i].onmouseover = function() {
			this.style.border = "3px solid #1dd2af";
			this.getElementsByClassName('section-2-img')[0].style.background = "#2c3e50";
			this.getElementsByClassName('section-2-img')[0].getElementsByTagName('p')[0].style.color = "white";
			this.getElementsByClassName('section-2-img')[0].getElementsByTagName('p')[1].style.color = "gray";
		}
		tab[i].onmouseout = function() {
			this.style.border = "3px solid white";
			this.getElementsByClassName('section-2-img')[0].style.background = "#eeeeee";
			this.getElementsByClassName('section-2-img')[0].getElementsByTagName('p')[0].style.color = "black";
			this.getElementsByClassName('section-2-img')[0].getElementsByTagName('p')[1].style.color = "black";
		}
	}
