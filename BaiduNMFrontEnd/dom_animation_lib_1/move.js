
// cross browser eventbind
var addEventUtil = {
    eventAdd: function (dom, type, handle) {
        if (window.addEventListener) {
            dom.addEventListener(type, handle, false);
        } else if (window.attachEvent) {
            dom.attachEvent('on' + type, handle);
        } else {
            dom['on' + type] = handle;
        }
    },
    eventDel: function (dom, type, handle) {
        if (window.removeEventListener) {
            dom.removeEventListener(type, handle);
        } else if (window.detarchEvent) {
            dom.detarchEvent('on' + type, handle);
        } else {
            dom['on' + type] = null;
        }
    },
    getEvent: function (e) {
        return e ? e : window.event;
    },
    preventDefault: function (e) {
        if (e.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagation: function (e) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }

}

var cancleAnimation;

/*function addEvent() {
    console.log('addEvent is running');
    var dom = document.getElementById('div1');
    addEventUtil.eventAdd(dom, 'mouseover', function (e) {
        cancelAnimationFrame(cancleAnimation);
        (function start() {
            startMove(dom, { width: 400, height: 400 }, function () {
                startMove(dom, { borderWidth: 1 });
            });
            cancleAnimation = requestAnimationFrame(start);
        })();
    });
    addEventUtil.eventAdd(dom, 'mouseout', function (e) {
        cancelAnimationFrame(cancleAnimation);
        (function start() {
            startMove(dom, { width: 100, height: 100 }, function () {
                startMove(dom, { borderWidth: 20 })
            });
            cancleAnimation = requestAnimationFrame(start);
        })();
    });
}*/

function getStyle(dom, attr) {
    if (getComputedStyle) {
        return getComputedStyle(dom, null)[attr];
    } else {
        return dom.currentStyle[attr];
    }
}
function startMove(dom, para, cb) {
    for (key in para) {
        var thisAttrVal = para[key];
        var currentStyle = parseInt(getStyle(dom, key));
        console.log(currentStyle);
        console.log("currentStyle:" + currentStyle);
        var speed = (currentStyle > thisAttrVal) ? Math.floor((thisAttrVal - currentStyle) / 20) : Math.ceil((thisAttrVal-currentStyle) / 20);
        console.log('speed:' + speed);
        if (thisAttrVal == currentStyle || speed == 0) {
            cancelAnimationFrame(cancleAnimation);
            if (typeof cb == 'function') {
                cancelAnimation = requestAnimationFrame(cb);
            }
        } else {
            dom.style[key] = currentStyle + speed + 'px';
        }
    }
}