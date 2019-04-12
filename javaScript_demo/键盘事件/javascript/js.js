// JavaScript Document
var data=['手机','电脑','鼠标垫','笔记本','书籍','蛇皮','鱿鱼','香蕉'],
	timer=null;
	flag=0;

window.onload=function(){	
	var play=document.getElementById('play'),
		stop=document.getElementById('stop');
	//开始抽奖
	play.onclick=playFun;
	//停止抽奖
	stop.onclick=stopFun;
	//键盘事件
	// 键盘事件
   document.onkeyup=function(event){
      event = event || window.event;
      if(event.keyCode==13){
         if(flag==0){
           playFun();
           flag=1;
         }else{
           stopFun();
           flag=0;
         }
      }
   }
}
//定时器会越点越快 如果不清除上一个计时器 这里就该思考函数的作用时间
function playFun(){
	var title=document.getElementById('title');
	var play=document.getElementById('play');
	clearInterval(timer);
	timer=setInterval(function(){
	   var random=Math.floor(Math.random()*data.length);
	   title.innerHTML=data[random];
	},50);
    play.style.background='#999';
}

//停掉计时器 让按钮颜色恢复就行了
function stopFun(){
	clearInterval(timer);
	var play=document.getElementById('play');
	play.style.background='#036';
}

/* 这里存在奇怪的几点  1是 title命名注释掉和错误命名加逗号的两个不同结果
function playFun(){	
		clearInterval(timer);
	//var title=document.getElementById('title');
		timer=setInterval(function(){	
		var random=Math.floor(Math.random()*data.length);
		title.innerHTML=data[random];
	},50);
	this.style.background='#999';
}
*/