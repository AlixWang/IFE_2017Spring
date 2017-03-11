// JavaScript Document
function whatSelect(elemid){
	var elem = document.getElementById(elemid);
	if(elem.tagName === 'INPUT'){
		return elem.checked;
	}else{
		return elem.selectedIndex;
	}
}

function createOption(data){
	var str = '';
	for(var i = 0 ; i < data.length; i++){
		str+='<option value='+data[i]+'>'+data[i]+'</option>' 
	}
	return str;
}

function showHide(elem1,elem2){
	
		console.log(elem1.style.visibility);
		elem1.style.visibility = 'visible';
		elem2.style.visibility = 'hidden';
	
	
}
function getElem(id){
	return document.getElementById(id);
}
function bindEvent(type,elem,handle){
	if(window.addEventListener){
		elem.addEventListener(type,handle);
	}else if(window.attachEvent){
		elem.attachEvent('on'+type,handle);
	}else{
		elem['on'+type]=handle;
	}
}



bindEvent('click',getElem('student'),function(e){
	if(e.target.checked){
		showHide(getElem('citySelect'),getElem('selectWork'));
	}
});
bindEvent('click',getElem('nonstudent'),function(e){
	console.log(e.target.checked);
	if(e.target.checked){
		showHide(getElem('selectWork'),getElem('citySelect'));
	}
});

bindEvent('click',getElem('city'),function(e){
	console.log(e.target);
	
	switch (e.target.selectedIndex){
		case 0:
			getElem('college').innerHTML=createOption(['b1','b2','b3','b4']);
			break;
		case 1:
			getElem('college').innerHTML=createOption(['n1','n2','n3','n4']);
			break;
		case 2:
			getElem('college').innerHTML=createOption(['h1','h2','h3','h4']);
			break;
		case 3:
			getElem('college').innerHTML=createOption(['g1','g2','g3','g4']);
			break;
	}
});
