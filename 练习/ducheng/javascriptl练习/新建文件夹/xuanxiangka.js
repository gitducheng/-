window.onload = function(){
	var navs = document.getElementById('notice').getElementsByTagName('li');
	var divs = document.getElementsByClassName('con');
	for(var i=0;i<navs.length;i++){
		navs[i].id=i;
		navs[i].onmouseover=function(){
			for(var i=0;i<divs.length;i++){
				divs[i].style.display = 'none';
				navs[i].style.background = 'gray';
			}
			navs[this.id].style.background = '#fff';
			divs[this.id].style.display = 'block';
		}
	}
}