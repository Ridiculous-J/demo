// JavaScript Document

//通用函数
function get(selector) {
    var method=selector.substr(0,1)=='.'?'getElementsByClassName':'getElementById';
    return document[method](selector.substr(1));//这个方括号是什么姿势？obj[method]();
}/*
function g(selector){
	var method = selector.substr(0,1) == '.' ? 'getElementsByClassName' : 'getElementById';
	return document[method](selector.substr(1));
}*/
/*substr()读取*/


//随机生成一个值 支持取值范围 
function random(range){
	var max = Math.max(range[0],range[1]);	
	var min = Math.min(range[0],range[1]);
	var diff = max-min;
	var number = Math.ceil( Math.random()*diff + min );
	return number;
}/*传进来的形参是个只有两个元素的数组*/
//输出函数
var data = data;
function addPhoto(){	
	var template=get('#wrap').innerHTML;

	var html = [];
	var nav =[];/*导航*/
	
	for(s in data){	//for(var s=0;s<data.length;s++)
		var _html = template.replace('{{index}}',s)
							.replace('{{img}}',data[s].img)
							.replace('{{caption}}',data[s].caption)
							.replace('{{desc}}',data[s].desc);
		
		html.push(_html);
		var _nav='<span id="nav_'+s+'" class="i" onclick="turn(get(\'#photo_'+s+'\'))"></span>';/*引号里面有引号要转义*/
		
        nav.push(_nav);
	}
	 html.push('<nav id="nav" class="nav">'+nav.join('')+'</nav>');
	 get('#wrap').innerHTML=html.join('');/*这又是？*/
	 rsort( random([0,data.length]) );/*生成后重新排序*/
}
addPhoto();
//6.计算左右分区的范围
function range(){
	var range ={
			left:{x:[],y:[]},
			right:{x:[],y:[]}
		};
	var wrap ={
		w:get('#wrap').clientWidth,
		H:get('#wrap').clientHeight	
	}
	var photo ={
		w:get('.photo')[0].clientWidth,
		H:get('.photo')[0].clientHeight	
	}
	range.wrap=wrap;
	range.photo=photo;
	range.left.x =[0-photo.w, wrap.w/2-photo.w/2];
	range.left.y =[0-photo.H,wrap.H];
	
	range.right.x =[wrap.w/2 + photo.w/2,wrap.w+photo.w];
	range.right.y=[0-photo.H,wrap.H];
	return range;
}
//排序海报
function rsort(n){
	var _photo = get('.photo');
	var photos =[];/*抓取出来的并不是一个数组 所以要手动创建一个*/
	/*对图片样式进行初始化*/
		for(s=0;s<_photo.length; s++){	
			_photo[s].className = _photo[s].className.replace(/\s*photo_center\s*/,' ');/*把有中央样式的给取消掉 主要针对上一次的操作*/
			_photo[s].className = _photo[s].className.replace(/\s*photo_front\s*/,' ');
			_photo[s].className = _photo[s].className.replace(/\s*photo_back\s*/,' ');
			
			_photo[s].className += ' photo_front';
			_photo[s].style.left='';
			_photo[s].style.top ='';
			_photo[s].style['-webkit-transform']='rotate(360deg) scale(1.2)';
			photos.push( _photo[s] );/*这下所有的对象都被封装在真正的数组里了*/
		}
		
		
	var photo_center =	get('#photo_'+n);/*随机赋予一个中央样式给它*/
	photo_center.className += ' photo_center ';//这里也是
	
	photo_center =photos.splice(n,1)[0];/*把赋予中央样式的元素去掉 在后续操作不会影响到这个元素*/
	/*splice(a,b,c) a：开始删除的位置 b：删除元素的个数 C（可选）:新插入的数组 这个函数会修改旧数组
	这个函数不应该是删除 而是切割出来一个新的数组 若是没有赋予给变量则会自己消失 
	所以实际结果是产生了一个新数组 和一个经过修改的旧数组
	*/
	//把海报分为左右区域两部分 初始化后给予位置样式的区域
	var photos_left = photos.splice(0,Math.ceil(photos.length/2));
	var photos_right =photos;
	
	var ranges =range();/*关于命名 不能与调用函数一致*/
	for(s in photos_left){
		var photo =photos_left[s];	
		photo.style["-webkit-transform"] = "rotate(" + random([-60, 60]) + "deg) scale(.8) translate(600px)";//环形排列
		/*
		photo.style.left = random(ranges.left.x)+'px';
		photo.style.top =random(ranges.left.y) + 'px';/*字符串*/
		/*
		photo.style['-webkit-transform']='rotate('+random([-150,150])+'deg) scale(1)';
		*/
	}//JS里修改style只能传递字符串数据？
	for (s in photos_right){
		var photo =photos_right[s];	
		photo.style["-webkit-transform"] = "rotate(" + random([-60, 60]) + "deg) scale(.8) translate(-600px)";//环形排列
		
		//photo.style.left = random(ranges.right.x)+'px';
		//photo.style.top =random(ranges.right.y) + 'px';/*字符串*/	
		
		//photo.style['-webkit-transform']='rotate('+random([-150,150])+'deg) scale(1)';
	}
	//控制按钮处理
	var navs =get('.i');
	for(var s=0; s<navs.length;s++){
		navs[s].className = navs[s].className.replace(/\s*i_current\s*/,' ');
		navs[s].className = navs[s].className.replace(/\s*i_back\s*/,' ');	
	}//先把所有的附加样式去掉
	get('#nav_'+n).className+=' i_current ';//n代表中间被选中的海报给予被选中的样式
}


//1.翻面控制
function turn(elem){
		var cls = elem.className;
		var n=elem.id.split('_')[1];/*split拆分 把当前被选中的ID取出来*/
		
		if(!/photo_center/.test(cls)){
			return rsort(n);/*当目前被选中的海报并非是中心海报时 对这些海报重新排序*/	
		}
		if(/photo_front/.test(cls)){
			cls = cls.replace(/photo_front/,'photo_back');/*把正面的样式换成背面 翻转*/
			get('#nav_'+n).className +=' i_back ';	/*匹配的图标也变回去 空格不要忘*/
		}else{
			cls = cls.replace(/photo_back/,'photo_front');
			get('#nav_'+n).className = get('#nav_'+n).className.replace(/\s*i_back\s*/,' ');
			
		}
		return elem.className = cls;
}
/*关于兼容性 主要是兼容CSS3的属性*/