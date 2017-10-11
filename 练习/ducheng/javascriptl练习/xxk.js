window.onload = function(){
	var content = document.getElementById('content');
	var li_nav = document.getElementById('li_nav');
	var tab_content = document.getElementById('tab_content');
	var lis = li_nav.getElementsByTagName('li');
	for(var i = 0;i<lis.length;i++){
		lis[i].id = i;
		lis[i].onclick = function(){
		for(var i=0;i<lis.length;i++){
			lis[i].className ="";
			}
			lis[this.id].className = "active";

		}
	}
}