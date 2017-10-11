$(window).on('load',function(){
	waterfull();
	dataIndex = {'data':[{'src':'1.jpg'},{'src':'2.jpg'},{'src':'22.jpg'},{'src':'33.jpg'}]};
	$(window).on('scroll',function(){
		if(checkscrollside()){
			$.each(dataIndex.data,function(key,value){
				var box = $('<div>').addClass('box').appendTo('#main');
				var pic = $('<div>').addClass('pic').appendTo(box);
				$('<img>').attr('src',$(value).attr('src')).appendTo(pic);
			});
			waterfull();
		}
	})	
})


function waterfull(){
	var $boxs = $('.box');
	var boxW = $boxs.eq(0).outerWidth();
	var cols = Math.floor($(window).width()/boxW);
	$('#main').css({'width':boxW*cols,
		'margin':'0 auto'
		});

	var arrH = [];
	$boxs.each(function(index,value){
		var boxH = $boxs.eq(index).outerHeight();
		if(index<cols){
			arrH[index] = boxH;
		}else{
			var minH = Math.min.apply(null,arrH);
			var minHindex = $.inArray(minH,arrH);
			$($boxs[index]).css({
				'position':'absolute',
				'top':minH,
				'left':minHindex*boxW
			});
			arrH[minHindex] += boxH;
		}
	});
	
}

function checkscrollside(){
	var last = $('.box').last();
	var lastH = last.offset().top+Math.floor(last.outerHeight()/2);
	var screenH = $(window).height();
	var scrollH = $(window).scrollTop();
	return (lastH<screenH+scrollH)?true:false;
}