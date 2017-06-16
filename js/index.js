$(function(){
	var keyDown;
	setTimeout(function(){
        $('.head-img').css({'width':'100','height':'100'});
        $('.head-img').css('bottom','-500px');
    },1500)
    setTimeout(function(){
        $('.head-img').css({'width':'200','height':'200'})
        $('.head-img').css('bottom','0')
    },75000)

    $('#music-control').click(function(event) {
    	var playPiano = $('#music-control').attr('data-music');
        $('.music-control i').css('opcity','.1');
    	if(playPiano == "启动"){
    		clearInterval(keyDown);
    		$('.pianoWrap').css('top','-150px');
    	}else{
        	keyDown = setInterval(down,400)
        	$('.pianoWrap').css('top','0');
    	}
    });
    setTimeout(function(){
    	$('.pianoWrap').css('top','0');
    	keyDown = setInterval(down,400)
    },1500)
	function down(){
	    var randomNum = parseInt(Math.random() * 24);
	    var randomNum1 = parseInt(Math.random() * 24);
	    var randomNum2 = parseInt(Math.random() * 24);
	    $('.pianoWrap li').removeClass('down');
	    $('.pianoWrap li').eq(randomNum+4).addClass('down')
	    $('.pianoWrap li').eq(randomNum1+4).addClass('down')
	    $('.pianoWrap li').eq(randomNum2+4).addClass('down')
	}
})