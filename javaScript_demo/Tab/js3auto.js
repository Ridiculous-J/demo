// JavaScript Document
function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}

window.onload=tab;

function tab(){	
	//当前高亮显示的页签的索引
	var index=0;
	var timer=null;
	//获取所有的页签和要切换的内容
	var lis=$('notice-tit').getElementsByTagName('li'),
		divs=$('notice-con').getElementsByTagName('div');
	//添加手动切换的时候要禁止掉定时器
	for(var i=0;i<lis.length;i++){
		lis[i].id=i;
		lis[i].onmouseover=function(){
			clearInterval(timer);
			changeOption(this.id);
		}
		lis[i].onmouseout=function(){
			timer=setInterval(autoPlay,2000);	
		}
	}
	if(timer){
		clearInterval(timer);
		timer=null;	
	}
	//添加定时器 改变当前高亮的索引
		function autoPlay (){	
			index++;
			if(index>=lis.length){
				index=0;	
			}
			changeOption(index);
	 	}
	
	function changeOption(curindex){	
		for(var j=0;j<lis.length;j++){	
				lis[j].className='';
				divs[j].style.display='none';	
			}
			
			lis[curindex].className='select';
			divs[curindex].style.display='block';
			index=curindex;
		}
}


/*察觉到作用域了 但是没想到是这个作用域*/
/*有意思 区别是传值的不同 而函数的调用差距就在于传参的不同 函数的作用就是如此*/