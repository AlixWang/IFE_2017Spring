function MarkDown(input,output){
    this.input = document.getElementById(input).value;
    this.output = document.getElementById(output);
}

MarkDown.prototype.formart = function(){
    var _this = this;
    var parserReg = {
        heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
    }
    this.input.replace(parserReg.heading,function(match){
        return `<h${match[0]}>${match[1]}<h${match[0]}>`;
    });
    console.log(this.input);
}

var out  = document.getElementById('renderMD');
out.addEventListener('click',function(){
   var markdown = new MarkDown('inputText','renderMD');
   setInterval(markdown.formart,2000);
},false);

