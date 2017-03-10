var root = document.getElementById('root');
var elem = document.getElementById('click_div');
var nodes = [];

function deepSearch(node){
    if(node.nodeType ===  1){
        nodes.push(node);
        if(node.hasChildNodes){
            for(var i = 0;i<node.childNodes.length;i++){
                if(node.childNodes[i].nodeType === 1){
                    
                    widthSearch(node.childNodes[i]);
                }
            }
        
        }
    }
}

function widthSearch(node){
    if(node.nodeType === 1){
        
        if(nodes.hasChildNodes){
            nodes.firstElementChild
        }
        nodes.push(node);
    }
}

var flag = false;
function clickBind(elem){

    elem.addEventListener('click',function(event){
        if(event.target.id == 'front_traversal'){
            nodes = [];
            front(root);
            if(!flag){
                renderChild(nodes);
            }
            
        }else if(event.target.id == 'width_traversal'){
            nodes = [];
            middle(root);
            if(!flag){
                renderChild(nodes);
            }
            
        }else if(event.target.id == 'deep_traversal'){
            nodes = [];
            deepSearch(root);
            if(!flag){
                console.log(nodes);
                renderChild(nodes);
            }
            
        }
    });

}



function renderChild(data){
    flag = true;
    var i = 0;
    var timer = setInterval(function(){
    var timer2 = null;  
        if(i>=nodes.length){
            console.log(i);
            clearInterval(timer);
        }else{
            nodes[i].style.backgroundColor = 'red';       
                timer2 = setTimeout(function(){
                nodes[i-1].style.backgroundColor = '#FFF';
                console.log(i);          
                },300);
            i++;       
        }
    },500);
    flag = false;    
}
clickBind(elem);