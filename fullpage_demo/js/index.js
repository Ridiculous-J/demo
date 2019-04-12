$(document).ready(function(){
	$('#fullpage').fullpage({
		'navigation': true,
		scrollingSpeed: 1000,
		navigationTooltips: ['首页', '视觉', '交互', '皮肤', '功能', '待办邮件', '联系人邮件', '科技', '连接易信', '马上体验']//导航小圆点的提示
//		css3方便
		//滚动到这个页面
//		afterLoad: function(anchorLink, index){
//			if(index == 1){
//				$('.page1').find('.page1_top').animate({
//					top: '2%'
//				}, 500, 'easeOutExpo');
//				$('.page1').find('.page1_center').animate({
//				
//				},1000,'easeOutBack')
//				$('.page1').find('.txt').fadeTo(3000,1);
//			}
//			
//		},
//		//离开这个页面
//		onLeave: function(index, direction){
//			if(index == 1){
//				$('.page1').find('.page1_top').animate({
//					top: '-10%'
//				}, 500, 'easeOutExpo');
//				$('.page1').find('.page1_center').animate({
//					
//			},500, 'easeOutBack')
//				$('.page1').find('.txt').fadeToggle(500,0);
//			}
//		}
	});
});