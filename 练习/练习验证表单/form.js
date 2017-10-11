function getlen(str){
	return str.replace(/[^\x00-\xff]/g,"xx").length;
}
function findstr(str,n){
	var time = 0;
	for(var i = 0;i<str.length;i++){
		if(str.charAt(i)==n){
			time++;
		}
	}
	return time;
}
window.onload = function(){
	var inputs = document.getElementsByTagName('input');
	var name = inputs[0];
	var paw1 = inputs[1];
	var paw2 = inputs[2];
	var ps = document.getElementsByTagName('p');
	var p1 = ps[0];
	var p2 = ps[1];
	var p3 = ps[2];
	var ems = document.getElementsByTagName('em');
	var prompt = document.getElementById('prompt');
	var name_length = 0;
	var name_msg = document.getElementById('name_msg');
	var paw2_msg = document.getElementById('paw2_msg');

	//用户名
	var re = /[\w\u4e00-\u9fa5]/g;

	name.onfocus = function(){	
		name_msg.style.display = "block";

	}

	name.onkeyup = function(){
		prompt.style.display="block";
		name_length = getlen(this.value);
		prompt.innerHTML = name_length + "个字符";
		if(name_length==0){
			prompt.style.display="none";
		}
	}

	name.onblur = function(){
		//非法
		var re = /[^\w\u4e00-\u9fa5]/g;
		if(re.test(this.value)){
			name_msg.innerHTML = '含有非法字符';
		}
		//空
		else if(this.value==""){
			name_msg.innerHTML = '未输入字符';
		}
		//少
		else if(getlen(this.value)<6){
			name_msg.innerHTML = '少于输入字符';
		}
		//多
		else if(getlen(this.value)>25){
			name_msg.innerHTML = '多余输入字符';
		}
	}

	//paw

	paw1.onfocus = function(){
		paw_msg.style.display = "block";
	}

	paw1.onkeyup = function(){
		ems[0].style.backgroundColor = "orange";
		if(this.value.length>5){
			ems[1].style.backgroundColor = "orange";
			paw2.removeAttribute("disabled");
			paw2_msg.style.display = "block";
		}
		else{
			ems[1].style.backgroundColor = "#F9B876";
			paw2.setAttribute("disabled","disabled");
			paw2_msg.style.display = "none";
		}
		if(this.value.length>10){
			ems[2].style.backgroundColor = "orange";
		}
		else{
			ems[2].style.backgroundColor = "#F9B876";
		}
	}

	paw1.onblur = function(){
		var m = findstr(this.value,this.value[0]);
		var re_n = /[^\d]/g;
		var re_t = /[^a-zA-Z]/g;
		//kong
		if(this.value==""){
			paw_msg.innerHTML = "kong";
		}
		//xiangtong
		else if(m==this.value.length){
			paw_msg.innerHTML = "!!xiangtong!!";
		}
		//6--16
		else if(this.value.length<6){
			paw_msg.innerHTML = "<6";
		}
		else if(this.value.length>16){
			paw_msg.innerHTML = ">16";
		}
		//quan shu zi
		else if(!re_n.test(this.value)){
			paw_msg.innerHTML = "全数字了！";
		}
		//quan zi mu
		else if(!re_t.test(this.value)){
			paw_msg.innerHTML = "全字母了！";
		}
		//ok
		else{
			paw_msg.innerHTML = "OK！";
		}
	}

	paw2.onblur = function(){
		if(this.value!=paw1.value){
			paw2_msg.innerHTML = "buOK,butong";
		}
		else{
			paw2_msg.innerHTML = "OK,tong";
		}
	}
}