window.onload = function(){
	var btn1 = document.getElementById('btn1');
	var div = document.getElementById('div');
	div.onclick = function(){
		alert('DIV');
	} 
	function show(event){
		alert("hahaha!");
		event.stopPropagation();
		event.preventDefault();
	}
	var handle = {
		addhandle:function(element,type,func){
			if(element.addEventListener){
				element.addEventListener(type,func,false);
			}
			else if(element.attachment){
				element.attachment('on'+type,func);
			}
			else{
				element['on'+type]=func;
			}
		}
	}
	handle.addhandle(btn1,'click',show);
}