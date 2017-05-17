// 声明一个命名空间对象
var netEasy = {};

// 声明公共方法对象
netEasy.public = {
    // 定义事件添加方法
    addEvent: function (type, elem, fn) {
        if (window.addEventListener) {
            elem.addEventListener(type, fn, false);
        } else if (window.attachEvent) {
            elem.attachEvent('on' + type, fn);
        } else {
            elem['on' + type] = fn;
        }
    },
    // 定义cookie方法
    cookieUtil: {
        // 获取cookie
        get: function (name) {
            var cookieName = encodeURIComponent(name) + '=',
                cookieStart = document.cookie.indexOf(cookieName),
                cookieValue = null;
            if (cookieStart > -1) {
                var cookieEnd = document.cookie.indexOf(';', cookieStart);
                if (cookieEnd == -1) {
                    cookieEnd = document.cookie.length;
                }
                cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
            }
            return cookieValue;
        },
        // 设置cookie
        set: function (name, value, expires, path, domain, secure) {
            var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
            if (expires instanceof Date) {
                cookieText += '; expires =' + expires.toGMTString();
            }
            if (path) {
                cookieText += '; path =' + path;
            }
            if (domain) {
                cookieText += '; domain' + domain;
            }
            if (secure) {
                cookieText += '; secure'
            }
            document.cookie = cookieText;
        },
        // 删除cookie
        unset: function (name, path, domain, secure) {
            this.set(name, '', new Date(0), path, domain, secure);
        }
    },
    // 封装ajax方法
    ajax: function (url, type, data) {
        var _this = this;

        if (type.toUpperCase() === 'GET') {
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open(type, url, true);
                xhr.send(null);

                xhr.onreadystatechange = function () {
                    if (xhr.status === 200 && xhr.readyState === 4) {
                        resolve(xhr.response);
                    } else {
                        //reject(xhr.readyState);
                    }
                }
                xhr.responseType = 'json';
            })

        } else if (type.toUpperCase() === 'POST') {
            xhr.onreadystatechange = function () {
                if (xhr.status === 200 && xhr.onloadstart === 4) {
                    xhr.send(data);
                }
            }
            xhr.open(type, url, true);
        }
    },
    // 封装表单校验方法
    checkInput: function (obj, type, data) {
        switch (type) {
            case 'exit':
                if (!obj.value) {
                    obj.value = data;
                    obj.style.color = '#f00';
                    return false;
                } else {
                    return true;
                }
                break;
            case 'length':
                if (obj.length < 8) {
                    obj.value = data;
                    obj.style.color = '#f00';
                    return false;
                } else {
                    return true;
                }
                break;
            default:
                break;
        }
    }
}

// 声明功能对象
netEasy.func = {
    // 视频弹窗功能
    videoAlert: function () {
        var img = document.getElementsByClassName('off_intro')[0].getElementsByTagName('img')[0];
        var mask = document.getElementsByClassName('mask')[0];
        var video = document.getElementsByClassName('video')[0];
        var video_player = video.getElementsByTagName('video')[0];
        var close_video = document.getElementById('close_video');
        netEasy.public.addEvent('click', img, function () {
            mask.style.display = 'block';
            video.style.display = 'block';
        });
        netEasy.public.addEvent('click', close_video, function () {
            mask.style.display = 'none';
            video.pause();
            video.style.display = 'none';
        });
        netEasy.public.addEvent('click', mask, function () {
            mask.style.display = 'none';
            video.style.display = 'none';
        });
    },
    // 轮播图功能
    carousel: function () {
        var banner_img = document.getElementsByClassName('banner_img')[0].getElementsByTagName('a');
        var banner_dot = document.getElementsByClassName('banner_dot')[0].getElementsByTagName('li');

        var length = banner_img.length;
        var current = 0;
        var timer = setInterval(start, 5000);
        function start() {
            for (var i = 0; i < length; i++) {
                banner_img[i].classList.remove('active');
                banner_dot[i].classList.remove('active');
            }
            if (current < length) {
                banner_img[current].classList.add('active');
                banner_dot[current].classList.add('active');
                current++;
            } else {
                current = 0;
                banner_img[current].classList.add('active');
                banner_dot[current].classList.add('active');
                current++;
            }
        }

        (function () {
            for (var i = 0; i < length; i++) {
                netEasy.public.addEvent('mouseover', banner_img[i], function () {
                    clearInterval(timer);
                }, false);
                netEasy.public.addEvent('mouseout', banner_img[i], function () {
                    timer = setInterval(start, 5000);
                }, false);
            }
        })();
        (function () {
            for (var i = 0; i < length; i++) {
                (function (a) {
                    netEasy.public.addEvent('click', banner_dot[a], function () {
                        current = a;
                        start();
                    }, false);
                    netEasy.public.addEvent('mouseover', banner_dot[a], function () {
                        clearInterval(timer);
                    }, false);
                    netEasy.public.addEvent('mouseout', banner_dot[a], function () {
                        timer = setInterval(start, 5000);
                    }, false);
                })(i);
            }
        })();


    },
    // 鼠标移入弹出层
    courseAlert: function () {
        var tab_content = document.getElementsByClassName('tab_content');
        console.log(tab_content);
        var course_alert = document.getElementById('course_alert');
        var img = course_alert.getElementsByTagName('img')[0];
        var length = tab_content.length;
        console.log(tab_content.length);

        function getUrl(elm) {
            if (window.getComputedStyle) {
                return document.getComputedStyle(elem)['url'];
            } else {
                return elem.currentStyle('url');
            }
        }

        for (var i = 0; i < length; i++) {
            //console.log(i);
            (function (a) {
                //console.log(tab_content[a]);
                tab_content[a].addEventListener('mouseover', function () {
                    //console.log(course_alert);
                    course_alert.style.left = tab_content[a].offsetLeft - 10 + 'px';
                    course_alert.style.top = tab_content[a].offsetTop - 10 + 'px';
                    img.setAttribute('src', tab_content[a].getElementsByTagName('img')[0].getAttribute('src'));
                    course_alert.style.display = 'block';
                }, false);

                course_alert.addEventListener('mouseout', function () {
                    this.style.display = 'none';
                }, false);
            })(i);
        }
    },
    // 登陆校验功能
    loginJudge: function () {
        var isfocus = document.getElementsByClassName('focus')[0],
            focuscomplete = document.getElementsByClassName('focuscomplete')[0],
            mask = document.getElementById('mask'),
            login = document.getElementById('login'),
            close_login = login.getElementsByTagName('span')[0],
            username = document.getElementById('username'),
            password = document.getElementById('password'),
            submit = document.getElementById('submit'),
            logincancle = focuscomplete.getElementsByTagName('a')[0];

        netEasy.public.addEvent('click', logincancle, function (e) {
            var event = e || window.event;
            e.preventDefault();
            console.log('ok');
            isfocus.style.display = 'inline';
            focuscomplete.style.display = 'none';
            netEasy.public.cookieUtil.unset('login');
        });
        if (netEasy.public.cookieUtil.get('login')) {
            isfocus.style.display = 'none';
            focuscomplete.style.display = 'inline';
        } else {
            netEasy.public.addEvent('click', isfocus, function () {
                mask.style.display = 'block';
                login.style.display = 'block';
            });
            netEasy.public.addEvent('click', mask, function () {
                login.style.display = 'none';
                mask.style.display = 'none';
            });
            netEasy.public.addEvent('click', close_login, function () {
                login.style.display = 'none';
                mask.style.display = 'none';
            });
            netEasy.public.addEvent('focus', username, function () {
                if (this.value === 'no username input' || this.value === 'username length error') {
                    this.value = '';
                    this.style.color = '#ccc';
                }
            });
            netEasy.public.addEvent('focus', password, function () {
                if (this.value === 'no password input' || this.value === 'passwrod length error') {
                    this.value = '';
                    this.style.color = '#ccc';
                }
            });
            netEasy.public.addEvent('click', submit, function () {
                if (netEasy.public.checkInput(username, 'exit', 'no username input') && netEasy.public.checkInput(password, 'exit', 'no password input') && netEasy.public.checkInput(username, 'length', 'username length error') && netEasy.public.checkInput(password, 'length', 'password length error')) {
                    netEasy.public.ajax('../src/admin/user.json', 'GET').then(function (data) {
                        var user = data;
                        if (username.value === user.user[0].username && password.value === user.user[0].password) {
                            isfocus.style.display = 'none';
                            focuscomplete.style.display = 'inline';
                            mask.style.display = 'none';
                            login.style.display = 'none';
                            netEasy.public.cookieUtil.set('login', true);
                        }else{
                            alert('您输入的密码或用户名错误');
                        }
                    }, function (e) {
                        console.log(e);
                    });
                } else {
                    console.log('submit false');
                }
            });
        }

    },
    // 顶部bar关闭功能
    closeTopbar: function () {
        var topbar = document.getElementsByClassName('litterBar')[0],
            topbar_close = topbar.getElementsByTagName('i')[0];
        if (netEasy.public.cookieUtil.get('topbar')) {
            topbar.style.display = 'none';
        } else {
            netEasy.public.addEvent('click', topbar_close, function () {
                topbar.style.display = 'none';
                netEasy.public.cookieUtil.set('topbar', true);
                console.log(document.cookie);
            });
        }
    }
}

netEasy.func.videoAlert();
netEasy.func.carousel();
netEasy.func.courseAlert();
netEasy.func.loginJudge();
netEasy.func.closeTopbar();