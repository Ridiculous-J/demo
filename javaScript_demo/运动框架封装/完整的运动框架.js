//完整的运动框架
	function startMove(obj,json,fn){
		var flag=true;	//这是个全局变量 函数内的局部变量并不会影响这个变量 函数内局部变量影响只会影响函数内部变量
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
		for(var attr in json){//这个json并不是很懂 不过这里的意思是抓取出json里的attr属性 那个target属性呢
		//取当前值
		var iCur=0;
		if(attr=='opacity'){	
			iCur=Math.round(parseFloat(getStyle(obj,attr))*100);//这里的Math是为了四舍五入取整数
		}
		else{	
			var iCur=parseInt(getStyle(obj,attr));
		}
		//计算速度
		var speed=(json[attr] - iCur)/5; 
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		//最终检查
		if(iCur!=json[attr]){
			flag=false;
		}
		if(attr=='opacity'){	
			obj.style.opacity=(iCur+speed)/100;
		}
		else
		{	
			obj.style[attr]=iCur+speed+'px';
		}
		//检查结束1
		//检查是否全部完成
		if(flag){	
			clearInterval(obj.timer);
			if(fn){	
				fn();
			}
		}
		//检查结束
	  }
	},30)
}
  
	  function getStyle(obj,attr){
	  if(obj.currentStyle){	
		  return obj.currentStyle[attr];//针对IE浏览器
	  }
	  else{	
		  return getComputedStyle(obj,false)[attr];//针对火狐
	  }
	
}

/*
后记  错误太可怕了 一个字母 一个等于号 就消耗了我半个多小时 还是要多仔细查看下这些框架的结构啊











/*
// JavaScript Document	//初步的运动框架
	function startMove(obj,attr,target,fn){	
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
		var iccu=0;
		if(attr=='opacity'){	
			iccu=Math.round(parseFloat(getStyle(obj,attr))*100);//这里的Math是为了四舍五入取整数
		}
		else{	
			 iccu=parseInt(getStyle(obj,attr));
		}
		
		var speed=(target - iccu)/5; 
		speed=speed>0?Math.ceil(speed):Math.floor(speed);
		if(iccu==target){
			clearInterval(obj.timer);
			if(fn){	
				fn();
			}
		}
		else{
 	 		if(attr=='opacity'){
				obj.style.opacity = (iccu+speed)/100;

 	 		}else{
 	 			obj.style[attr] = iccu+speed+"px"
 	 		}

 	 	}
		},30)
	}
	
		function getStyle(obj,attr){
		if(obj.currentStyle){	
			return obj.currentStyle[attr];//针对IE浏览器
		}
		else{	
			return getComputedStyle(obj,false)[attr];//针对火狐
		}
	}
	*/