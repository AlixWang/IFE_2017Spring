// load event function
function loadFunc(func) {
    var oldLoad = window.onload;
    if (typeof oldLoad != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            oldLoad();
            func();
        }
    }
}

// get element from dom
function getElem(id) {
    return document.getElementById(id);
}

// add event for element
function addEvent(elem, type, handle) {
    if (window.addEventListener) {
        elem.addEventListener(type, handle);
    } else if (window.attachEvent) {
        elem.attachEvent('on' + type, handle);
    } else {
        elem['on' + type] = handle;
    }
}
function initPositon(elem) {
    elem.style.top = 200 + 'px';
    elem.style.left = 200 + 'px';
}

// storage direction 
var dir = {
    dir: 0,
}

function judgeBorder(elem) {
    var left = Number(/(\d+)/.exec(elem.style.left)[0]);
    var top = Number(/(\d+)/.exec(elem.style.top)[0]);
    return [left, top];
}

// ractangle move
var ractangleMove = {
    left: function (elem) {
        var num = Number(/(\d+)/.exec(elem.style.left)[0]);
        console.log(num);
        /*num+=40;*/
        elem.style.left = num - 40 + 'px';
        console.log(elem.style.left);
    },
    right: function (elem) {
        var num = Number(/(\d+)/.exec(elem.style.left)[0]);
        console.log(num);
        /*num+=40;*/
        elem.style.left = num + 40 + 'px';
        console.log(elem.style.left);
    },
    top: function (elem) {
        var num = Number(/(\d+)/.exec(elem.style.top)[0]);
        console.log(num);
        /*num+=40;*/
        elem.style.top = num - 40 + 'px';
        console.log(elem.style.top);
    },
    bottom: function (elem) {
        var num = Number(/(\d+)/.exec(elem.style.top)[0]);
        console.log(num);
        /*num+=40;*/
        elem.style.top = num + 40 + 'px';
        console.log(elem.style.top);
    }
}

function judgeUlternate() {

    if (dir.dir % 4 > 0) {
        return dir.dir % 4;
    } else {
        return (dir.dir % 4) + 4;
    }
}


// change ractange direation
function ractDirection(val, elem) {
    var iniDeg = /(\-?\d+)/.exec(elem.style.transform);

    switch (val) {
        case 'TUN LEF':
            if (iniDeg) {
                var num = iniDeg[0] - 90;
                console.log(num);
                elem.style.transform = 'rotate(' + num + 'deg)';
                dir.dir += 1;
            } else {
                elem.style.transform = 'rotate(-90deg)';
                dir.dir += 1;
            }
            break;
        case 'TUN RIG':
            if (iniDeg) {
                var num = Number(iniDeg[0]) + 90;
                console.log(num);
                elem.style.transform = 'rotate(' + num + 'deg)';
                dir.dir -= 1;
            } else {
                elem.style.transform = 'rotate(90deg)';
                dir.dir -= 1;
            }
            break;
        case 'TUN BAC':
            if (iniDeg) {
                var num = Number(iniDeg[0]) + 180;
                console.log(num);
                dir.dir -= 2;
                elem.style.transform = 'rotate(' + num + 'deg)';
            } else {
                elem.style.transform = 'rotate(180deg)';
                dir.dir -= 2;
            }
            break;
        case 'GO':
            var border = judgeBorder(elem);
            var trueNum = judgeUlternate();
            switch (trueNum) {
                case 0 || 4:
                    console.log('top');
                    if (border[1] > 0) {
                        ractangleMove.top(elem);
                    } else {
                        alert('即将过界');
                    }
                    break;
                case 1:
                    console.log("left");
                    if (border[0] > 0) {
                        ractangleMove.left(elem);
                    } else {
                        alert("即将过界");
                    }
                    break;
                case 2:
                    console.log("bottom");
                    if (border[1] < 360) {
                        ractangleMove.bottom(elem);
                    } else {
                        alert("即将过界");
                    }
                    break;
                case 3:
                    console.log('right');
                    if (border[0] < 360) {
                        ractangleMove.right(elem);
                    } else {
                        alert("即将过界");
                    }


                    break;

            }
            break;
        case 'TRA LEF':
            var border = judgeBorder(elem);
            var trueNum = judgeUlternate();
            if (border[0] > 0) {
                ractangleMove.left(elem);
            } else {
                alert("即将过界");
            }
            break;
        case 'TRA TOP':
            var border = judgeBorder(elem);
            var trueNum = judgeUlternate();
            if (border[1] > 0) {
                ractangleMove.top(elem);
            } else {
                alert('即将过界');
            }
            break;
        case 'TRA RIG':
            var border = judgeBorder(elem);
            var trueNum = judgeUlternate();
            if (border[0] < 360) {
                ractangleMove.right(elem);
            } else {
                alert("即将过界");
            }
            break;
        case 'TRA BOT':
            var border = judgeBorder(elem);
            var trueNum = judgeUlternate();
            if (border[1] < 360) {
                ractangleMove.bottom(elem);
            } else {
                alert("即将过界");
            }
            break;
        case 'MOV LEF':
            var border = judgeBorder(elem);
            var trueNum = judgeUlternate();
            if (trueNum === 1) {
                if (border[0] > 0) {
                    console.log(1);
                    ractangleMove.left(elem);
                } else {
                    alert("即将过界");
                }
            } else {
                console.log(2);
                while (trueNum != 1) {
                    if (iniDeg) {
                        var num = iniDeg[0] - 90;
                        console.log(num);
                        elem.style.transform = 'rotate(' + num + 'deg)';
                        dir.dir += 1;
                        trueNum = judgeUlternate();
                    } else {
                        elem.style.transform = 'rotate(-90deg)';
                        dir.dir += 1;
                        trueNum = judgeUlternate();


                    }

                }
                if (border[0] > 0) {
                    console.log(1);
                    setTimeout(ractangleMove.left(elem), 1000);
                } else {
                    alert("即将过界");
                }

            }
            break;
        case 'MOV RIG':
            var border = judgeBorder(elem);
            var trueNum = judgeUlternate();
            if (trueNum === 3) {
                if (border[0] < 360) {
                    console.log(1);
                    ractangleMove.right(elem);
                } else {
                    alert("即将过界");
                }
            } else {
                console.log(2);
                while (trueNum != 3) {
                    if (iniDeg) {
                        var num = iniDeg[0] - 90;
                        console.log(num);
                        elem.style.transform = 'rotate(' + num + 'deg)';
                        dir.dir += 1;
                        trueNum = judgeUlternate();
                    } else {
                        elem.style.transform = 'rotate(-90deg)';
                        dir.dir += 1;
                        trueNum = judgeUlternate();


                    }

                }
                if (border[0] < 360) {
                    console.log(1);
                    setTimeout(ractangleMove.right(elem), 1000);
                } else {
                    alert("即将过界");
                }

            }
            break;
            case 'MOV BOT':
            var border = judgeBorder(elem);
            var trueNum = judgeUlternate();
            if (trueNum === 2) {
                if (border[0] > 0) {
                    console.log(1);
                    ractangleMove.bottom(elem);
                } else {
                    alert("即将过界");
                }
            } else {
                console.log(2);
                while (trueNum != 2) {
                    if (iniDeg) {
                        var num = iniDeg[0] - 90;
                        console.log(num);
                        elem.style.transform = 'rotate(' + num + 'deg)';
                        dir.dir += 1;
                        trueNum = judgeUlternate();
                    } else {
                        elem.style.transform = 'rotate(-90deg)';
                        dir.dir += 1;
                        trueNum = judgeUlternate();


                    }

                }
                if (border[1] < 360) {
                    console.log(1);
                    setTimeout(ractangleMove.bottom(elem), 1000);
                } else {
                    alert("即将过界");
                }

            }
            break;
    }
}

// creat li element
function createLi(num) {
    var str = '';
    for (var i = 0; i < num; i++) {
        str += '<li></li>';
    }
    getElem('display').innerHTML = str;
}

// 
addEvent(getElem('run'), 'click', function (e) {
    ractDirection(getElem('inputVal').value, getElem('ractangle'));
});

loadFunc(createLi(100));
loadFunc(initPositon(getElem('ractangle')));