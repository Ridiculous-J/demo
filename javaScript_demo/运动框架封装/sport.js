// JavaScript Document
window.onload=function(){	
	var oDiv=document.getElementById('menu');
	oDiv.onmouseover=function(){	
		startMove(0);
	}
	oDiv.onmouseout=function(){	
		startMove(-200);
	}
	
	
}
var timer=null;
/*最终升级版缓冲动画版*/
function startMove(target){
	clearInterval(timer);//清除定时器以免多次触发形成超加速状态
	var oDiv=document.getElementById('menu');	
	timer=setInterval(
		function(){	
		var speed=(target - oDiv.offsetLeft)/5; 
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		console.log(speed);
		//这个公式的判定很有意思
		//判断是否到达目标点 若到达则清除定时器 不再改变坐标位置
		if( oDiv.offsetLeft == target){
			clearInterval(timer);	
		}
		
		else{	
			oDiv.style.left=oDiv.offsetLeft+speed+'px';
		}
		
	},30)

}

/*优化版 封装函数 其实还是求同存异的过程 尽量简化参数*/
/*function startMove(target,speed){
	clearInterval(timer);//清除定时器以免多次触发形成超加速状态
	var oDiv=document.getElementById('menu');	
	timer=setInterval(
		function(){	
		//判断是否到达目标点 若到达则清除定时器 不再改变坐标位置
		
		if( oDiv.offsetLeft == target){
			clearInterval(timer);	
		}
		
		else{	
			oDiv.style.left=oDiv.offsetLeft+speed+'px';
		}
		
	},30)

}*/

/*制作思路 运动事件
谁发起的运动：oDIV
如何触发：移入和移出
触发结果之后：oDiv的位置改变
事件结束：达到目标坐标
事件中途改变的是什么：odiv的X坐标 
 通过什么改变：通过定时器来达到给予速度的效果 改变坐标值 但是定时器的使用一定要清除 不然会叠加


//回去也是同样的理由
/*function startMove1(){
	clearInterval(timer);//清除定时器以免多次触发形成超加速状态
	var oDiv=document.getElementById('menu');	
	timer=setInterval(
		function(){	
		//判断是否到达目标点 若到达则清除定时器 不再改变坐标位置
		
		if( oDiv.offsetLeft == -200){
			clearInterval(timer);	
		}
		
		else{	
			oDiv.style.left=oDiv.offsetLeft-10+'px';
		}
		
	},30)
}*/