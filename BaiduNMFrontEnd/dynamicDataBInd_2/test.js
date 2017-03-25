/*
    ES6 中的proxy 的用法
*/
var obj = {
    name:'alixwang',
    age:29
}

var proxy = new Proxy(obj,{
    get:function(target,property){
        console.log(22222);
    }
});

obj.name;

/*
    复习以下对象的继承
*/

function Person(name,age){
    this.arr = [1,2,3,4,5,6,7];
    this.name = name;
    this.age = age;
    
}
Person.prototype.sayName = function(){
    return this.name;
}


function Person1(name,age){
    Person.call(this);
    this.name = name;
    this.age = age;
}

Person1.prototype = new Person();
Person1.prototype.constructor = Person1;

Person1.prototype.sayName = function(){
    return this.arr;
    
}

var alixwang = new Person('alixwang',34);
console.log(alixwang.constructor);
alixwang.arr.push(9);

var zhangna = new Person1('zhangna',22);
zhangna.arr.push(10);
console.log(zhangna.sayName());


/*
    sub pub partte
*/

function Pub(){
    this.events = {};
}

Pub.prototype.on = function(type,handle){
    var _this = this;
    if(!(type in _this.events)){
        _this.events.type = [];
    }

    _this.events.type.push(handle);
}

Pub.prototype.emit = function(type,handle){
    var _this = this;
    for(var i = 0;i<_this.events.type.length;i++){

    }        

}
