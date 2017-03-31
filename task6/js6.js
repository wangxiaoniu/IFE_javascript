
function myfunction(){
	if(!document.getElementById) return false;
	if(!document.getElementsByTagName) return false;
	if(!document.createElement) return false;
	if(!document.createTextNode) return false;
	//获取输入内容
	var myinput=document.getElementById("input_text");
	//获取数字列表
	var list=document.getElementById('numlist');
	//获取输入的查询内容
	var checktext=document.getElementById('checktext');
	//获取按钮
	var left_inbtn=document.getElementById('left_in');
	var left_outbtn=document.getElementById('left_out');
	var right_inbtn=document.getElementById('right_in');
	var right_outbtn=document.getElementById('right_out');
	var check_btn=document.getElementById('check_btn');
	//获取列表下所有的li标签
	var listChild=list.getElementsByTagName('li');
	
	//左侧入
	function left_in(){
		//判断输入内容合法性
		if(myinput.value == ""){
			alert("请输入内容！");	
		}else {
			var list_li=document.createElement('li');
			var list_litext=document.createTextNode(myinput.value);
			list_li.appendChild(list_litext);
			list.insertBefore(list_li,list.childNodes[0]);
		}
	}
	//右进
	function right_in(){
		//判断输入内容合法性
		if(myinput.value == ""){
			alert("请输入内容！");
			
		}else{
			var list_li=document.createElement('li');
			var list_litext=document.createTextNode(myinput.value);
			list_li.appendChild(list_litext);
			list.insertBefore(list_li,list.lastChild);
		}
	}
	//删除元素节点
	function removeElement(_element){
     	_element.parentNode.removeChild(_element);
		
	}
	//左删
	function left_out(){
		//判断队列是否位空队列
		if(listChild.length>0){
			var message=confirm("确定要删除最左列？");
			if(message==true){
				for(var i=0;i<listChild.length;i++){
					var liFirst=listChild.item(0);	
				}
				removeElement(liFirst);
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
				for(var j=0;j<listChild.length;j++){
					var liFirst=listChild.item(listChild.length-1);	
				}
				removeElement(liFirst);
			}else{
				alert("已取消删除！");
			}
		}else{
			alert("该队列为空！");
		}
	}

	//查询匹配
	function checkText(){
		var listChildren=list.children;
		for(var i=0;i<listChildren.length;i++){
			var str=listChildren[i];
			var strInner=listChildren[i].innerHTML;
			//indexOf方法检索字符串是否含有某个字符，如果有返回大于-1d的值
			var strCheck=strInner.indexOf(checktext.value);
			str.style.background='#403000';
			if(strCheck>-1){
				str.style.background='#F00';
			}
		}
	}
	

	//按钮点击监听事件
	check_btn.addEventListener('click',checkText);
	right_outbtn.addEventListener('click',right_out);
	right_inbtn.addEventListener('click',right_in);
	left_outbtn.addEventListener("click",left_out);
	left_inbtn.addEventListener("click",left_in);

}
//加载函数
addLoadEvent(myfunction);