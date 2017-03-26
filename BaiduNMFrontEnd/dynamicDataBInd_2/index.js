function Observer(data){
    this.data = data;
    this.traverse(this.data);
    this.evensBus = new Event();
}


function Event(){
    this.events = {};
}
Event.prototype.on = function(attr,cb){
    var _this = this;
    if(!(attr in _this.events)){
        _this.events[attr] = [];
    }
    _this.events[attr].push(cb);
    return this;
}

Event.prototype.off = function(arr){
    var _this = this;
    for(let key in _this.events){
        if(_this.events.hasOwnProperty(key) && key === attr){
            delete _this.events[attr];
        }
    }
}

Event.prototype.emit = function(attr,...arg){
    var _this = this;
    var handleArg = Array.prototype.slice.call(arguments,1);
    for(var i = 0;i<_this.events[attr].length;i++){
        _this.events[attr][i].apply(_this,handleArg);
    }
    return _this;
}

Observer.prototype.$Watch = function(val,handle){
    this.evensBus.on(val,handle);
    this.evensBus.emit(val);
}

Observer.prototype.traverse = function(data){
    for(key in data){
        // console.log(typeof data[key]);
        if(typeof data[key] === 'object'){
            
            new Observer(data[key]);
        }else{
            this.addSome(key,data[key]);
        }
    }
}
Observer.prototype.addSome = function(name,value){
    var _this = this;
    Object.defineProperty(this.data,key,{
        get:function(){
            console.log(`you currently visited is ${name}`);
            return value;
        },
        set:function(newvalue){
            if(typeof newvalue === 'object'){
                _this.evensBus.emit(name,value,newvalue);
                value = newvalue;
                console.log(`you change the ${name} value from ${value} to ${newvalue}`);
                new Observer(value);
            }
            console.log(`you change the ${name} value from ${value} to ${newvalue}`);
            value = newvalue;
            
        }
    });
}
var app1 = new Observer({name:'alixwang',age:10});


app1.data.age = 30;
app1.$Watch('age',function(){
    console.log(10,20);
})

app1.data.age = 10;
