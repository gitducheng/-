var flag=1;
function mouseover(){
  if(flag)  //收起侧边
  {
	var d=setInterval(function(){
	var a=document.getElementById("demo");
	var b=a.clientWidth;
	var c=b/10;
	var e=b-c;
	if(b<20){
		a.style.width="0px";
		clearInterval(d);
	}
	else
	a.style.width=e+"px";
	}, 20);	
}


  else //打开侧边
   	var d=setInterval(function(){
	var a=document.getElementById("demo");
	var b=a.clientWidth;
	var e=b+10;
	if(b>150){
		a.style.width="200px";
		clearInterval(d);
	}
	else
	a.style.width=e+"px";
}, 20);	
  flag=!flag;
}







