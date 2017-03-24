
function myfunction(){
	//检索input
	var myinput=document.getElementById("input_text");
	//input里面的数值
	var input_value=myinput.value;
	//获取数字列表
	var list=document.getElementById('numlist');
	var list_li=document.createElement('li');
	var list_litext=document.createTextNode(input_value);
	//获取左侧入按钮
	var left_inbtn=document.getElementById('left_in');
	
	//获取列表的所有子元素
	var list_children=list.getElementsByTagName('*');
	//判断输入内容合法性
	if(input_value == ""){
		alert("内容为空，请输入内容，并且是一个数字！");
	}else if (!isNaN(input_value)){
		list_li.appendChild(list_litext);
	}else{
		alert("请输入数字！")
	}

	//左侧入
	function left_in(){
		list.insertBefore(list_li,list.childNodes[0]);
	
	}

	left_inbtn.addEventListener("click",left_in);


}
addLoadEvent(myfunction);