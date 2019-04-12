(function($){
	/*
	 1.定义变量（动画元素，事件变量）
	 2.自定义动画或者使用预设动画
	 3.使用动画序列 同步进行还是分步进行 延迟帧是多少
	 4.绑定
	 */
	var container = $(".container");
	var box = $(".box");
	var buddy=$(".buddy");
	var pop=$(".pop");
	var open=$(".btn");
	var close=$(".close");
	var imgs=pop.find("img");
	/*自定义动画*/
	$.Velocity.RegisterUI('lixin.slideUpIn',{
		defaultDuration:500,
		calls:[
			[{opacity:[1,0],
				translateY:[0,100]
			}]
		]
	});
	/*出场动画*/
	$.Velocity.RegisterUI('lixin.slideDownOut',{
		defaultDuration:300,
		calls:[
			[{opacity:[0,1],
				translateY:[100,0]
			}]
		]
	});
	/*大小变化的动画*/
	$.Velocity.RegisterUI('lixin.scaleIn',{
		defaultDuration:500,
		calls:[
			[{opacity:[1,0],
				scale:[1,0.3]
			}]
		]
	});
	$.Velocity.RegisterUI('lixin.scaleOut',{
		defaultDuration:500,
		calls:[
			[{opacity:[0,1],
				scale:[0.3,1]
			}]
		]
	});
	/*封装行为*/
	var seqInt =[
		{
			elements:container,
			properties:'lixin.slideUpIn',
			options:{
				delay:300
			}
		},
		{
			elements:box,
			properties:'lixin.slideUpIn',
			options:{
				sequenceQueue:false
			}
		},
		{
			elements:buddy,
			properties:'lixin.slideUpIn',
			options:{
				delay:60
			}
		}
	];
	/*点击按钮触发的动画*/
	var seqClick =[
		{
			elements:container,
			properties:'lixin.slideDownOut',
		
		},
		{
			elements:box,
			properties:'lixin.slideDownOut',
			options:{
				sequenceQueue:false
			}
		},
		//正面消失 背面出现
		{
			elements:container,
			properties:'lixin.slideUpIn',
		
		},
		{
			elements:pop,
			properties:'lixin.slideUpIn',
			options:{
				sequenceQueue:false//同步的意思
			}
		},
		{
			elements:imgs,
			properties:'lixin.scaleIn'
		}
	];
	/*点击X触发的动画*/
	var seqClose =[
		
		{
			elements:imgs,
			properties:'lixin.scaleOut'
		},
		{
			elements:container,
			properties:'lixin.slideDownOut',
		
		},
		{
			elements:pop,
			properties:'lixin.slideDownOut',
			options:{
				sequenceQueue:false
			}
		},
		//背面消失 正面出现
		{
			elements:container,
			properties:'lixin.slideUpIn',
		
		},
		{
			elements:box,
			properties:'lixin.slideUpIn',
			options:{
				sequenceQueue:false//同步的意思
			}
		}
	];
	
	
	$.Velocity.RunSequence(seqInt);
	open.on('click',function(){
		$.Velocity.RunSequence(seqClick);
	});
	
	close.on('click',function(){
		$.Velocity.RunSequence(seqClose);
	})
})
(jQuery)
