
function myfunction(){
	//检索input
	var myinput=document.getElementById("input_text");
	//获取数字列表
	var list=document.getElementById('numlist');
	//获取按钮
	var left_inbtn=document.getElementById('left_in');
	var left_outbtn=document.getElementById('left_out');
	var right_inbtn=document.getElementById('right_in');
	var right_outbtn=document.getElementById('right_out');
	//获取列表下所有的li标签
	var listChild=list.getElementsByTagName('li');
	
	//左侧入
	function left_in(){
		//判断输入内容合法性
		if(myinput.value == ""){
			alert("请输入一个数字！");
			
		}else if (!isNaN(myinput.value)){
			var list_li=document.createElement('li');
			var list_litext=document.createTextNode(myinput.value);
			list_li.appendChild(list_litext);
			list.insertBefore(list_li,list.childNodes[0]);
		}else{
			alert("请输入数字!")
			
		}
	}
	//右进
	function right_in(){
		//判断输入内容合法性
		if(myinput.value == ""){
			alert("请输入一个数字！");
			
		}else if (!isNaN(myinput.value)){
			var list_li=document.createElement('li');
			var list_litext=document.createTextNode(myinput.value);
			list_li.appendChild(list_litext);
			list.insertBefore(list_li,list.lastChild);
		}else{
			alert("请输入数字!")		
		}
	}

	//左侧出
	function left_out(){
		var message=confirm("确定要删除"+list.childNodes[0].innerHTML);
		if(message==true){
			list.childNodes[0].remove();
		}else{
			alert("已取消删除！");
		}
	}

	//右出
	function right_out(){
		var message=confirm("确定要删除"+list.childNodes[listChild.length-1].innerHTML);
		if(message==true){
			list.childNodes[listChild.length-1].remove();
		}else{
			alert("已取消删除！");
		}
	}

	//按钮点击监听事件
	right_outbtn.addEventListener('click',right_out);
	right_inbtn.addEventListener('click',right_in);
	left_outbtn.addEventListener("click",left_out);
	left_inbtn.addEventListener("click",left_in);

}
//加载函数
addLoadEvent(myfunction);