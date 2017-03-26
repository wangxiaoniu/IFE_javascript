
function myfunction(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	//检索input
	var myinput=document.getElementById("input_text");
	//获取按钮
	var left_inbtn=document.getElementById('left_in');
	var left_outbtn=document.getElementById('left_out');
	var right_inbtn=document.getElementById('right_in');
	var right_outbtn=document.getElementById('right_out');
	var mysort=document.getElementById('sort');
	//获取列表
	var list=document.getElementById('numlist');
	//获取列表下所有的li标签
	var listChild=list.getElementsByTagName('li');
	//左侧入
	function left_in(){
		//判断输入内容合法性
		if(myinput.value==""){
			alert("请输入数字！")
		}else if(myinput.value<10 || myinput.value>100){
			alert("请输入10-100的数字！");
		}else{
			//判断列表项是否大于60
			 if (listChild.length>=60){
				alert("最多只能输入60个！你已到达最高限制");
			}else{
				var list_li=document.createElement('li');
				list_li.style.height=myinput.value+"px";
				list_li.className="intro";
				list.insertBefore(list_li,list.childNodes[0]);	
			}
		}
	}
	//右进
	function right_in(){
		//判断输入内容合法性
		if(myinput.value==""){
			alert("请输入数字！")
		}else if(myinput.value<10 || myinput.value>100){
			alert("请输入10-100的数字！");
		}else{
			//判断列表项是否大于60
			 if (listChild.length>=60){
				alert("最多只能输入60个！你已到达最高限制");
			}else{
				var list_li=document.createElement('li');
				list_li.style.height=myinput.value+"px";
				list_li.className="intro";
				list.appendChild(list_li);		
			}
		}
	}
	//删除元素子节点
	function removeElement(_element){
		//获取父元素下的所以子节点，是一个数组
		var children=_element.childNodes;
		//i为索引值，因为索引值从0开始，所以索引值的最大数是数组长度减去1
		for(var i=children.length-1;i>=0;i--){
     		_element.removeChild(children.item(i));
     	}
		return _element;
	
	}

	//左侧出
	function left_out(){
		//判断队列是否位空队列
		if(listChild.length>0){
			var message=confirm("确定要删除最左列？");
			if(message==true){
				list.removeChild(list.firstChild);
			}else{
				alert("已取消删除！");
			}
		}else{
			alert("该队列为空！");
		}
	}

	//右出
	function right_out(){
		if(listChild.length>0){
			var message=confirm("确定要删除最右列？");
			if(message==true){
				list.removeChild(list.lastChild);
			}else{
				alert("已取消删除！");
			}
		}else{
			alert("该队列为空！");
		}
	}
	
	//点击队列消失事件代理(新get到函数方法)
	function reee(ev) {  
	    var ev = ev || window.event;
	    var target = ev.target || ev.srcElement;
	    if (target.className == 'intro') {
	        target.parentNode.removeChild(target);
	    }
	}
	//排序事件(新get到函数方法)
	function mySS() {
	    var arr=[];
	    var listChilds=list.getElementsByClassName("intro");
	    var sortList=document.getElementById('sortList');
	    //从小到大排序法
		function numberSort(a,b){
			return a-b;
		}
	    for(var k=0;k<listChilds.length;k++){
	    	//新get:parseInt()方法让字符串变成整数，只保留数字部分
	        arr[k]=parseInt(listChilds[k].style.height);
	    }
	    arr.sort(numberSort);
	   	sortList=removeElement(sortList);
	   	var myHeader=document.createElement('h4');
	   	var text=document.createTextNode('排序后：');
	   	myHeader.appendChild(text);
	   	sortList.appendChild(myHeader);
	   	for(var m=0;m<arr.length;++m){
	        var newli=document.createElement("li");
	        newli.style.height = arr[m]+ "px";
	       	sortList.appendChild(newli);     
	    }
	}
	//按钮点击监听事件
	mysort.addEventListener('click',mySS);
	numlist.addEventListener('click',reee);
	right_outbtn.addEventListener('click',right_out);
	right_inbtn.addEventListener('click',right_in);
	left_outbtn.addEventListener("click",left_out);
	left_inbtn.addEventListener("click",left_in);
	

}
//加载函数
addLoadEvent(myfunction);



