function Observer(data){
    this.data = data;
    this.reverse(data);
}

Observer.prototype.reverse = function(data){
    var _this = this;
    for(var keys in _this.data){
        if(typeof _this.data[keys] === 'object'){
            new Observer(_this.data[keys]);
        }else{
            bindItem(_this.data[keys]);
        }
    }
}

Observer.prototype.bindItem = function(item){
    
}