function Table(id,sortType,tableData){
    this.container = document.getElementById(id);
    this.sortType = sortType;
    this.tableData = tableData||[['小米',53,76,81],['小刘',81,65,71],['小明',71,65,59]];
}

Table.prototype.createTable = function(){
    var table = document.createElement('table');
    var thead = table.createTHead();
    var tbody = document.createElement('tbody');

    thead.innerHTML = '<tr><th>姓名</th><th>语文<span></span></th><th>数学</th><th>英语</th><th>总分</th></tr>'
    var str = '';
    for(var i = 0;i<this.tableData.length;i++){
        // console.log(this.tableData);
        str += '<tr><td>'+this.tableData[i][0]+'</td><td>'+this.tableData[i][1]+'</td><td>'+this.tableData[i][2]+'</td><td>'+this.tableData[i][3]+'</td><td>'+this.tableData[i].filter(function(a){return typeof a === 'number'}).reduce(function(a,b){return a+b})+'</td></tr>'
    }
    tbody.innerHTML = str;
    table.appendChild(tbody);
    console.log(this.container);
    this.container.appendChild(table);
}

table.prototype.sortTable = function(){

}