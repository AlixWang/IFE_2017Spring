function Table(id, tableData) {
    this.container = document.getElementById(id);


    this.tableData = tableData || [['小米', 53, 76, 81], ['小刘', 81, 65, 71], ['小明', 71, 65, 59]];
}

Table.prototype.createTable = function () {
    var table = document.createElement('table');
    var thead = table.createTHead();
    var tbody = document.createElement('tbody');

    thead.innerHTML = '<tr><th>姓名</th><th>语文<span class="active"></span></th><th>数学<span></span></th><th>英语<span></span></th><th>总分<span></span></th></tr>'
    var str = '';
    for (var i = 0; i < this.tableData.length; i++) {
        // console.log(this.tableData);
        str += '<tr><td>' + this.tableData[i][0] + '</td><td>' + this.tableData[i][1] + '</td><td>' + this.tableData[i][2] + '</td><td>' + this.tableData[i][3] + '</td><td>' + this.tableData[i].filter(function (a) { return typeof a === 'number' }).reduce(function (a, b) { return a + b }) + '</td></tr>'
    }
    tbody.innerHTML = str;
    table.appendChild(tbody);
    console.log(this.container);
    this.container.appendChild(table);
}

Table.prototype.addEvent = function (elem, type, handle) {
    console.log(elem);
    if (document.addEventListener) {
        elem.addEventListener(type, handle, false);
    } else if (!document.attachEvent) {
        elem['on' + type] = handle;
    } else {
        elem.attachEvent('on' + type, handle);
    }
}
Table.prototype.renderData= function(data,elem,iconClass){
    // console.log(elem);

    var icon = this.container.getElementsByTagName('span');
    for(var j = 0 ; j < icon.length;j++){
        icon[j].className = '';
    }
    elem.getElementsByTagName('span')[0].className =iconClass;
    var tbody = this.container.getElementsByTagName('tbody')[0];
    var str = '';
    for (var i = 0; i < data.length; i++){
        str += '<tr><td>' + data[i][0] + '</td><td>' + data[i][1] + '</td><td>' + data[i][2] + '</td><td>' + data[i][3] + '</td><td>' + data[i][4] + '</td></tr>';
    }
    tbody.innerHTML = str;
}
Table.prototype.sortTable = function () {
    var newData = this.tableData.slice(0);
    /*console.log(newData);*/
    for(var s = 0 ; s < this.tableData.length; s++){
        /*console.log(newData[s]);*/
        newData[s].push(newData[s].filter(function(a){return typeof a === 'number';}).reduce(function(a,b){return a+b}));
    }
    /*console.log(newData);*/
    var _this = this;
    var num = this.container.getElementsByTagName('th');
    console.log('yes',num);
    for (var i = 1; i < num.length; i++) {
        console.log(num);
        (function(a){
            var flag = 0;
            _this.addEvent(num[a],'click',function(e){
                console.log(a);
                if(flag%2 === 0){
                    newData = _this.tableData.sort(function(as,bs){return as[a]-bs[a]});
                    _this.renderData(newData,this,'activeUp');
                    flag++;

                }else{
                    newData = _this.tableData.sort(function(as,bs){return bs[a]-as[a]});
                    _this.renderData(newData,this,'activeDown');
                    flag++;
                }

            });
        })(i);

    }
}

Table.prototype.showTab = function(){
    this.createTable();
    this.sortTable();
}