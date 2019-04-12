// JavaScript Document
/*加入定时器实现切换延迟*/
function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}

window.onload=function(){
	var index=0;
	var timer=null;
	
	var lis=$('notice-tit').getElementsByTagName('li'),
		divs=$('notice-con').getElementsByTagName('div');
		
	if(lis.length!=divs.length) return;	
	
	for(var i=0;i<lis.length;i++){
		lis[i].id=i;
		lis[i].onmouseover=function(){	
			if(timer){
				clearTimeout(timer);
				timer=null;	
			}
			var that=this;
			timer=setTimeout(function(){
				for(var j=0;j<lis.length;j++){
					lis[j].className='';
					divs[j].style.display='none';	
				}
				lis[that.id].className='select';
				divs[that.id].style.display='block';
			},500)
		}
	}
}

/*如果存在准备执行的定时器，立刻清除，只有当前停留时间大于500ms时候才会开始执行，实际是给予一个判定*/
/*
this指向问题之 指向该方法对象 而内置方法的对象是指向window的 如这里的定时器
*/