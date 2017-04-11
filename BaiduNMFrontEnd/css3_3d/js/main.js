var container = document.getElementsByClassName('container')[0];
var i = 1;
function changeRotate(){
    
    container.style.transform = 'rotateY('+i*36 + 'deg'+')';
    i++;
    console.log(container.style.rotateY);
}

setInterval(changeRotate,2000);