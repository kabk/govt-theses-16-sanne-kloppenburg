// Dit stukje is voor het klikken op de link en verschijnen van de div
$(document).ready(function() {
        $("#inleiding").click(function() 
		{
        $("#inleiding-wrapper").fadeToggle();
        });
		
    });



$(document).ready(function() {
        $("#frames").click(function() 
		{
        $("#H1-wrapper").fadeToggle();
        });
		
    });
$(document).ready(function() {
        $("#schemas").click(function() 
		{
        $("#H2-wrapper").fadeToggle();
        });
    });
$(document).ready(function() {
        $("#conclusie").click(function() 
		{
        $("#conclusie-wrapper").fadeToggle();
        });
    });
$(document).ready(function() {
        $("#abstract").click(function() 
		{
        $("#abstract-wrapper").fadeToggle();
        });
    });


$(document).ready(function(e) {
	function detectmob() {
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
    $('#page-wrapper').empty();
	$('body').css({'background':'rgba(255,255,255,1)'});
	$('#page-wrapper').append("<h1>This device does not benefit your visual perception. In order to turn the information of this thesis into your own knowledge you are strongly adviced to use a bigger screen!</h1>");
  
  
  }
 else {
    return false;
  }
}
	/**set titles width**/
	var screenWidth = $( window ).width();
	screenWidth = (screenWidth-500)/2;
	screenWidth = screenWidth + "px";
	$('#bottom-name').css('left',screenWidth);
	$('#title').css('left',screenWidth);
	$( window ).resize(function() {
 	var screenWidth = $( window ).width();
	screenWidth = (screenWidth-500)/2;
	screenWidth = screenWidth + "px";
	$('#bottom-name').css('left',screenWidth);
	$('#title').css('left',screenWidth);
	});
	var number = Math.floor(Math.random()*3)+1;
	


	//$('#contents-wrapper').load('pages/contents.html');
	function zIndexer(div){
		var index = div.zIndex();
		if (index < 2){
		} else{
		index = index - 1;
		}
		div.css('z-index',index);
		div.css('opacity','0.8');
	}
	function resizer(target){
		var width = target.css('width');
		width = width.split('p',1);
		if (width < 700){
			var screenWidth = $( window ).width();
			screenWidth = (screenWidth-200);
			screenWidth = screenWidth + "px";
			target.animate({'top':'100px','left':'100px'},250);
			target.animate({'width':screenWidth,'height':'500px'},250);
			var child = target.children(':first');
			child.addClass('scroll');
			target.removeClass('cursor');
		} else {
			var x = Math.floor(Math.random()*(65-25+1)+25) + "%" ;
			var y = Math.floor(Math.random()*(65-25+1)+25) + "%";
			var h = Math.floor(Math.random()*(350-150+1)+150) + "px";
			var w = Math.floor(Math.random()*(350-150+1)+150) + "px";
			target.animate({'width':w,'height':h},250);
			target.animate({'top':x,'left':y},250);
			var child = target.children(':first');
			target.addClass('cursor');
			child.removeClass('scroll');
		}

	};
	//Make divs resizable and movable
    $('.draggable').draggable({
		addClasses: false,
		containment: 'parent'
	});
	$('.draggable2').draggable({
		addClasses: false,
		containment: 'parent'
	});
	$( ".resizable" ).resizable();
	$(document).on('mousedown','.resizable',function(){
		$(this).css('z-index', '99');
		var div = $("#introduction-wrapper");
		zIndexer(div);
		var div = $("#challenges-wrapper");
		zIndexer(div);
		var div = $("#knowledge-wrapper");
		zIndexer(div);
		var div = $("#conclusion-wrapper");
		zIndexer(div);
		var div = $("#abstract-wrapper");
		zIndexer(div);
		var div = $("#contents-wrapper");
		zIndexer(div);
		var div = $("#footnotes-wrapper");
		zIndexer(div);
		var div = $("#intake-wrapper");
		zIndexer(div);
		var div = $("#approach-wrapper");
		zIndexer(div);
		$(this).css('opacity', '1');
	});
	$(document).on('dblclick', '.resizable', function(){
		var target = $(this)
		resizer(target);
	});
	var doubletap = 0;
	$(document).on('click','.reference',function(){
		$('#footnotes-wrapper').css({'z-index':'99', 'opacity':'1'});
		var text= $(this).text();
		$('#footnotes').scrollTop($("*:contains('"+text+"'):last").position().top);
		if (doubletap == 1){
			$('#footnotes').scrollTop($("*:contains('"+text+"'):last").position().top);
		} else {
			doubletap = 1;
		}
	});
	$(document).click(function(){
	if ($(event.target).is('img')){
	} else {
	if ($('#popup').hasClass('visible')){
 		$('#popup').empty();
		$('#popup').css({'visibility':'hidden'});
		$('#popup').removeClass('visible');
		} else {
		}
	}
  });
  	$(document).on('click','#popup', function(){
		$('#popup').empty();
		$('#popup').css({'visibility':'hidden'});
		$('#popup').removeClass('visible');
	});
	$(document).on('click','img', function(){
		if ($('#popup').hasClass('visible')){
		} else {
		var url = $(this).attr('src');
		var screenWidth = $( window ).width();
			screenWidth = (screenWidth-900)/2;
			screenWidth = screenWidth + "px";
		$('#popup').append('<img src="'+url+'" width="auto" height="auto""/>');
		$('#popup').css({'visibility':'visible', 'left':screenWidth, 'top':'20%'});
		$('#popup').addClass('visible');
		}
	});
	$(document).on('resize','.resizable', function(){
		var child = $(this).children(':first');
		var width = child.width();
		if (width>400){
			if(child.hasClass('scroll')){
			} else {
				child.addClass('scroll');
			}
		}else{
			if($(this).hasClass('scroll')){
				child.removeClass('scroll');
			} else {
			}
		}
	});
	detectmob();
});

	