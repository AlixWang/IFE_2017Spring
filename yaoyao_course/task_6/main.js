function bindEvent(type,elem,handle){
    if(window.addEventListener){
        elem.addEventListener(type,handle);
    }else if(window.attachEvent){
        elem.attachEvent('on'+type,handle);
    }else{
        elem['on'+type]=handle;
    }
}

function loadEvent(func){
    var oldEvent = window.onload;
    if(typeof oldEvent !== 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldEvent();
            func();
        }
    }
}

function getElem(id){
    return document.getElementById(id);
}

function displayAlert(){
    bindEvent('click',getElem('alertClick'),function(e){
        var alertWind = getElem('alertWind');
        var mask = getElem('bg_mask');
        mask.style.visibility = 'visible';
        console.log(document.documentElement.clientHeight - alertWind.offsetHeight);
        console.log(document.documentElement.clientWidth - alertWind.offsetWidth);
        alertWind.style.top = (document.documentElement.clientHeight/2 - alertWind.offsetHeight/2)+'px';
        alertWind.style.left = (document.documentElement.clientWidth/2 - alertWind.offsetWidth/2)+'px';
        alertWind.style.visibility = 'visible';
        alertWind.style.position = 'fixed';
    });
}

function hiddentAlert(){
    var mask = getElem('bg_mask');
    var cancel = getElem('cancel');
    var ensure = getElem('ensure');
    bindEvent('click',mask,function(e){
        var alertWind = getElem('alertWind');
        e.target.style.visibility = 'hidden';
        alertWind.style.visibility = 'hidden';
    });
    bindEvent('click',cancel,function(e){
        var mask = getElem('bg_mask');
        var alertWind = getElem('alertWind');
        alertWind.style.visibility = 'hidden';
        mask.style.visibility = 'hidden';
    });
    bindEvent('click',ensure,function(e){
        var mask = getElem('bg_mask');
        var alertWind = getElem('alertWind');
        alertWind.style.visibility = 'hidden';
        mask.style.visibility = 'hidden';
    });
}

loadEvent(displayAlert);
loadEvent(hiddentAlert);