window.onload=function(){
	waterfull();
	var dataInt={'data':[{'src':'p_00.jpg'},{'src':'p_01.jpg'},{'src':'p_02.jpg'},{'src':'p_03.jpg'}]};
		
	window.onscroll=function(){
		if(checkscrollside()){
			var main = document.getElementById('main');
			for(var i = 0;i<dataInt.data.length;i++){
				var box = document.createElement('div');
				box.className = 'box';
				var img = document.createElement('img');
				img.src = 'images/'+dataInt.data[i].src;
				box.appendChild(img);
				main.appendChild(box);
			}
			waterfull();
		}
	}
}

function waterfull(){
	var main = document.getElementById('main');
	var boxs = main.getElementsByClassName('box');
	var cols = Math.floor(document.body.clientWidth/(boxs[0].offsetWidth+20));
	var arr = Array();
	for(var i = 0;i<cols;i++){
		arr.push(boxs[i].offsetHeight);
	}	
	for(var i = 0;i<boxs.length;i++){
		if(i<cols){
			continue;
		}else{
			var minH = Math.min.apply(null,arr);
			var index = getminIndex(arr,minH);			
			boxs[i].style.position = "absolute";
			boxs[i].style.left = (boxs[0].offsetWidth+20)*index+'px';
			boxs[i].style.top = minH+10+'px';
			arr[index] += boxs[i].offsetHeight+10; 

		}
	}
}

function getminIndex(arr,val){
	for(var i in arr){
		if(arr[i]==val){
			return i;
		}
	}
}

function checkscrollside(){
	var main = document.getElementById('main');
	var boxs = main.getElementsByClassName('box');
	var scroll =document.body.scrollTop||document.documentElement.scrollTop; 
	var lastH = Math.floor(boxs[boxs.length-1].offsetHeight/2)+boxs[boxs.length-1].offsetTop;
	var screen = document.documentElement.clientHeight;
	return (lastH<scroll+screen)?true:false;
}