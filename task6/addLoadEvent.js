function addLoadEvent(func){
	var oldonload=window.onload;
	if(window.onload != "function"){
		window.onload=func;
	}else{
		window.onload=function(){
			onload();
			func();
		}
	}
}