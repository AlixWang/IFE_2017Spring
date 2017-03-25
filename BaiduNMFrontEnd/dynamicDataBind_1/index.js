function Observer(data){
    this.data = data;
    this.traverse(this.data);
}

Observer.prototype.traverse = function(data){
    for(key in data){
        console.log(typeof data[key]);
        if(typeof data[key] === 'object'){
            
            new Observer(data[key]);
        }else{
            this.addSome(key,data[key]);
        }
    }
}
Observer.prototype.addSome = function(name,value){
    
    Object.defineProperty(this.data,key,{
        get:function(){
            console.log(`you currently visited is ${name}`);
        },
        set:function(newvalue){
            console.log(`you change the ${name} value from ${value} to ${newvalue}`);
        }
    });
}
var app1 = new Observer({name:'alixwang',age:{young:10,old:30}});

app1.data.age.young = 20;