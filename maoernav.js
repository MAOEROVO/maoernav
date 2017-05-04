$(function(){
	$('.maoernav1').addClass('fa fa-navicon ')
    $('.maoernav1').click(function(){
		
		$('#maoernav').children('li:eq(1)').toggleClass("rot_20 has");
		$('#maoernav').children('li:eq(2)').toggleClass("rot_40 has");
		$('#maoernav').children('li:eq(3)').toggleClass("rot_60 has");
		$('#maoernav').children('li:eq(4)').toggleClass("rot_80 has");
		if( $("#maoernav li").hasClass("has")){
			$('#maoernav').children('li').css('z-index','1');
		}
		});
	$('.maoernav1 li').click(function(){
		if($("#maoernav li").hasClass("has")){
			$('#maoernav').children('li').css({
					'opacity':'0',
					'z-index':'1'
				});
			$(this).css({
					'opacity':'1',
					'z-index':'2'
				})
			setTimeout(function(){
				$('#maoernav').children('li').css('opacity','1');
				},200);
			}else{
				$('#maoernav').children('li').css({
					'opacity':'1',
					'z-index':'1'
				});
				}
		});
})
