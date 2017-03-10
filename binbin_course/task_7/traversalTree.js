var root = document.getElementById('root');
var elem = document.getElementById('click_div');
var nodes = [];

// 前序遍历
function front(node){
    if(!(node==null)){
        nodes.push(node);
        front(node.firstElementChild);
        front(node.lastElementChild);
    }
}

// 中序遍历
function middle(node){
    if(!(node == null)){
        middle(node.firstElementChild);
        nodes.push(node);
        middle(node.lastElementChild);
    }
}

// 后续遍历
function back(node){
    if(!(node == null)){
        back(node.firstElementChild);
        back(node.lastElementChild);
        nodes.push(node);
    }
}


function clickBind(elem){
    elem.addEventListener('click',function(event){
        if(event.target.id == 'front_traversal'){
            nodes = [];
            clearInterval(timer);
            front(root);
            renderChild(nodes);


        }else if(event.target.id == 'middle_traversal'){
            nodes = [];
            
            clearInterval(timer);
            middle(root);
            renderChild(nodes);
            
            
        }else if(event.target.id == 'back_traversal'){
            nodes = [];
            
            clearInterval(timer);
            back(root);
            console.log(nodes);
            renderChild(nodes);
            

        }
    })
}

var timer = null;

function renderChild(data){
    var i = 0;
        timer = setInterval(function(){
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