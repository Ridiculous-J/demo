// JavaScript Document
function $(id){
	return typeof id==='string'?document.getElementById(id):id;
}




window.onload=function(){
	var titles=$('notice-tit').getElementsByTagName('li'),
		divs=$('notice-con').getElementsByTagName('div');
	if(titles.length!=divs.length)
	return;
	//遍历title下所有li
	for(var i=0;i<titles.length;i++){
		titles[i].id=i;/*给予编号 后期好调整*/	
		
		titles[i].onclick=function(){	
			for(var j=0; j<titles.length;j++){
				titles[j].className='';	
				divs[j].style.display='none';
			}
			this.className='select';/*记得有一种方法可以赋予多个class*/
			divs[this.id].style.display='block';
		}
	}
	
	
}

/*
	抓取要点击的元素 遍历打上编号 并且绑定一个点击事件
	点击事件：当点击的时候所有把元素样式给取消 并且把属于自己的下方框也一起隐藏了 之后再使得被点击的本身这个元素添加相应样式
*/


