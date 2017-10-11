window.onload = function(){
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var index = 1;
    var interval = 3000;
    var len = 3;
    var animated = false;
    var timer;

    function animate (offset) {
        if(offset==0){
            return;
        }
        animated = true;
        var time = 300;
        var interval = 10;
        var speed = offset/(time/interval);
        var left = parseInt(list.style.left)+offset;


        var go = function(){
            if((speed<0&&parseInt(list.style.left)>left)||(speed>0&&parseInt(list.style.left)<left)){
                list.style.left = parseInt(list.style.left)+speed+'px';
                setTimeout(go, interval);
            }
            else{
                list.style.left = left+'px';
                if(left>-200){
                    list.style.left = -400*len+'px';
                }
                if(left<(-400*len)){
                    list.style.left = '-400px';
                }
                animated = false;
            }
        }
        go();
    }

    function showbutton(){
        for(var i = 0;i<buttons.length;i++){
            if(buttons[i].className=='on'){
                buttons[i].className='';
                break;
            }
        }
        buttons[index-1].className='on';
    }

    function play(){
        timer = setTimeout(function(){
            next.onclick();
            play();
        }, interval);
    }
    function stop () {
         clearTimeout(timer); 
    }

    next.onclick=function(){
        if(animated){
            return;
        }
        if(index==3){
            index=1;
        }
        else{
            index+=1;
        }
        animate(-400);
        showbutton();
    }
    prev.onclick=function(){
        if(animated){
            return;
        }
        if(index==1){
            index=3;
        }
        else{
            index-=1;
        }
        animate(400);
        showbutton();
    }

    for(var i = 0;i<buttons.length;i++){
        buttons[i].onclick=function(){
            if(animated){
                return;
            }
            if(this.className=='on'){
                return;
            }
            var myindex = parseInt(this.getAttribute('index'));
            var offset = -400*(myindex-index);

            animate(offset);
            index = myindex;
            showbutton();
        }
    }

    container.onmouseover = stop;
    container.onmouseout = play;

    play();
}