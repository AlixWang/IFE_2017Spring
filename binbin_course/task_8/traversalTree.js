var root = document.getElementById('root');
var elem = document.getElementById('click_div');
var nodes = [];

function widthSearch(node){
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


function clickBind(elem){
    elem.addEventListener('click',function(event){
        if(event.target.id == 'front_traversal'){
            nodes = [];
            front(root);
            renderChild(nodes);
        }else if(event.target.id == 'middle_traversal'){
            nodes = [];
            middle(root);
            renderChild(nodes);
        }else if(event.target.id == 'back_traversal'){
            nodes = [];
            widthSearch(root);
            console.log(nodes);
            renderChild(nodes);
        }
    })
}



function renderChild(data){
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
}
clickBind(elem);