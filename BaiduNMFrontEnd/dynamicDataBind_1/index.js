var Observer = function(data){
    this.data=data;
 }

var app1 = new Observer({name:'alixwang',age:'23'});
Object.defineProperty(app1.data,Object.keys(app1.data)[0],{
        get:function(){
            console.log(`你访问了${Object.keys(app1.data)[0]}`);
        },
        set:function(newValue){
            console.log(`你设置了${Object.keys(app1.data)[0]}新的值为${newValue}`);
        }
    });
Object.defineProperty(app1.data,Object.keys(app1.data)[1],{
        get:function(){
            console.log(`你访问了${Object.keys(app1.data)[1]}`);
        },
        set:function(newValue){
            console.log(`你设置了${Object.keys(app1.data)[1]}新的值为${newValue}`);
        }
    })

app1.data.name;
app1.data.age;
app1.data.name = 1212;
app1.data.age = 1212;
