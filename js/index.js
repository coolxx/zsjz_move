$(function(){
	var hg1=$('.main_cc').position().top;
	var hg=$(window).height();
	var hg2=$('nav').height();
	var fa_height=hg-hg1;
	var cc_height=fa_height-hg2-3;
	console.log(cc_height);
	$('.cc_l').css('height',cc_height);
	$('.cc_r').css('height',cc_height);
	$('.posi_fa').css('height',fa_height);
	$('.l_area p').each(function(index){
		$(this).click(function(){
			$('.l_area p').removeClass('on1').eq(index).addClass('on1');
			$('.area_sch').hide().eq(index).show();
			$('.cc_r').scrollTop(0)
		})
	})
})