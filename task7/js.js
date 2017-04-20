
      
	var box =document.querySelector('.box');
	var btn=document.querySelector('.btn')
	var btn1=btn.querySelectorAll('button')[0];
	var btn2=btn.querySelectorAll('button')[1];
	var btn3=btn.querySelectorAll('button')[2];
	var arr=[];
	var last;
	var toggle = false;

	  //给按钮绑定事件
        btn1.onclick = function(){

            if(!toggle){
                toggle = true;
               	
                preOrder(box);
                myShow();

            }
        }
   
    

	//先序遍历
function preOrder(node){
    if(node){
        arr.push(node);
        preOrder(node.firstElementChild);
        preOrder(node.lastElementChild);
    }
}

    //显示遍历的过程

function myShow(){
	
	for(var i=0;i<arr.length;i++){
		setTimeout(function(i){
			return function(){
				if(i==arr.length-1){
				
					toggle=true;
				}
				if(last){
					last.style.background="#fff";
				}
				arr[i].style.background='red';
				last=arr[i];
					
	      }
        }(i),i*1000)

	}
}

function reset(){
	arr=[];
	if(last){
		last.style.background="#fff";
	}
}