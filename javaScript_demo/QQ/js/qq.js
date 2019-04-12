// JavaScript Document
function getByclass(clsname,parent){	//首先这里的备选参数不明
	var oParent=parent?document.getElementById(parent):document, //这里的运算符忘记了
	eles=[], //最终结果是个数组
	elements=document.getElementsByTagName('*');//这里是抓取所有的元素 限定范围是？
	
	for( var i=0,l=elements.length;i++;i<l){//这里是遍历所有的元素并且把想要的 要操作的给抓出来	
		if(elements[i].className==clsName){	
			eles.push(elsements[i]); //这里的push等等函数就看不懂了呀 这里还提到了正则表达式 what？
		}
	}
	return eles;	
}

window.onload=drag;
//作为移动要 首先 要判定在哪个区域后才会移动  作用范围 
				//随着鼠标所移动      触发机制以及触发结果
				//松开鼠标之后停止移动  停止机制以及停止之后的结构
//鼠标拉动函数开始 X Y轴定位机制是根据盒子的左上角为质点开始定位的 原点是全文档的左上角
function drag(){	
	var oTitle=getByClass('login_logo_webqq','loginPanel')[0];
   // 拖曳
   oTitle.onmousedown=fnDown;
	//关闭
	var oClose=document.getElementById('ui_boxyClose');
	oClose.onclick=function(){	
		document.getElementById('loginPanel').style.display='none';
	}
	//切换状态
	
	var loginState=document.getElementById('loginState'),//取出下拉框
       stateList=document.getElementById('loginStatePanel'),//取出ul
       lis=stateList.getElementsByTagName('li'),//取出li
       stateTxt=document.getElementById('login2qq_state_txt'),//取出文本
       loginStateShow=document.getElementById('loginStateShow');
	   
	   //点击列表使得列表显示出来
	   stateList.onclick=function(e){	
	   		e=e||window.event;//依旧先解决浏览器兼容的问题
			if(e.stopPropagation){	
				e.stopPropagation();//这本质是个函数？ 忘记了不少
			}
			else{	
				e.cancelBubble=true;//阻止冒泡
			
			}
			stateList.style.display='block';
	   }
	   //点击列表显示事件结束
	  //给所有的li添加鼠标点击 离开 移动事件
	  for(var i=0,l=lis.length;i<1;i++){	
	  	lis[i].onmouseover=function(){	
			this.style.background='#567';
		}
		lis[i].onmouseout= function(){	
			this.style.background='FFF';
		}
		//点击事件添加开始
		lis[i].onclick= function(e){	
			//解决浏览器兼容开始 阻止事件冒泡到上面的div 导致列表无法隐藏
			e=e||window.event;
			if(e.stopPropagation){	
				e.stopPropagation();
			}
			else{	
				e.cancelBubble=true;
			}
			//解决浏览器兼容结束
			//样式替换开始
		var id=this.id;//抓取id
      	stateList.style.display='none';//点击的同时隐藏列表
        stateTxt.innerHTML=getByClass('stateSelect_text',id)[0].innerHTML;//替换展示文本为 id下的文本 抓取id的作用应用在这里
        loginStateShow.className='';//先清空样式表 不能直接加 会覆盖掉原先的另一个样式表
        loginStateShow.className='login-state-show '+id;//show后面一定要加空格不然 会把id链接起来当成一个样式处理
			
		}
		//点击事件添加结束
	  }
	  //所有添加事件结束
	  //给文档空白添加一个点击隐藏列表功能开始
	  document.onclick=function(){	
	  	stateList.style.display='none';//多个有层次的点击事件就要思考冒泡的问题
	  	
	  }
	  
}


//鼠标追随移动的前提必须要给予这个元素 绝对定位才能实现
//鼠标按下函数开始
function fnDown(event){
  event = event || window.event;
  var oDrag=document.getElementById('loginPanel'),
      // 光标按下时光标和面板之间的距离
      disX=event.clientX-oDrag.offsetLeft,
      disY=event.clientY-oDrag.offsetTop;
  // 移动
  document.onmousemove=function(event){
  	event = event || window.event;
  	fnMove(event,disX,disY);
  }
  // 释放鼠标
  document.onmouseup=function(){
  	document.onmousemove=null;
  	document.onmouseup=null;
  }
}
//鼠标按下函数结束


//移动函数开始
function fnmove(e,posX,posY){	
	var oDrag=document.getElementById('loginPanel');
	var l=clientX-posX,
		t=clientY-posY;
	var windW=document.documentElement.clientWidth ||document.body.clientWidth,
		windH=document.documentElement.clientHeight ||document.body.clientHeight,
		maxW=windw-oDrag.offsetWidth,
		maxH=windH-oDrag.offsetHeight;
	//当l，t的值为负数的时候就会移动到视角之外 所以这里给予一个判定 强制留在视野内 而这个视野判定范围会跟样式内设定的绝对定位 top left值有所关联
	if (l<0){	
		l=0;
	}
	else if(l>maxW){
		l=maxW;	
	}
	
	if(t=0){	
		t=0;
	}
	else if(t=maxH){
		t=maxH;	
	}
	
	
	
}