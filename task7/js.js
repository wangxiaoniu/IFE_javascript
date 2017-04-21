
      
	var box =document.querySelector('.box');
	var btn=document.querySelector('.btn')
	var btn1=btn.querySelectorAll('button')[0];
	var btn2=btn.querySelectorAll('button')[1];
	var btn3=btn.querySelectorAll('button')[2];
	var arr=[];
	var last;
	var flag = false;

	  //给按钮绑定事件
        btn1.onclick = function(){

            if(!flag){
                flag = true;
                myReset();
                preOrder(box);
                myShow();

            }
        }
         btn2.onclick = function(){
            if(!flag){
                flag = true;
                myReset();
                inOrder(box);
                myShow();

            }
        }
	   btn3.onclick = function(){
	            if(!flag){
	                flag = true;
	                myReset();
	                postOrder(box);
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
//中序遍历
function inOrder(node){
    if(node){
        inOrder(node.firstElementChild);//先访问左子树
        arr.push(node);
        inOrder(node.lastElementChild);//最后访问右子树
    }
}

//后序遍历
function postOrder(node){
    if(node){
        postOrder(node.firstElementChild);//先访问左子树
     	postOrder(node.lastElementChild);//最后访问右子树
        arr.push(node);//根
       
    }
}

 //显示遍历的过程

function myShow(){
	
	for(var i=0; i<arr.length; i++){
        setTimeout(function(i){
            return function(){
                if(i == arr.length-1){
                    flag = false;
                }
                if(last){
                    last.style.background = "white";
                }

                arr[i].style.background = "red";
                last = arr[i];
                 
            }
        }(i),i*1000)
    }
}

  //初始化
	function myReset(){
	    if(last){
	        last.style.background = "white";
	    }

	}