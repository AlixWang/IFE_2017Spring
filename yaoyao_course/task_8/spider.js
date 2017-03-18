var superagent = require('superagent');
var cheerio = require('cheerio');
var fs = require('fs');
var data = [
    "https://www.baidu.com/",
    "http://www.qq.com/",
    "http://www.sohu.com/",
    "https://www.tmall.com/",
    "https://www.taobao.com/",
    "https://www.360.cn/",
    "http://www.sina.com.cn/",
    "http://www.jd.com/",
    "http://www.weibo.com/",
    "http://www.hao123.com/",
    "http://www.tianya.cn/",
    "http://www.csdn.net/",
    "http://www.soso.com/",
    "http://www.alipay.com/",
    "http://www.gmw.cn/",
    "http://www.youth.cn/",
    "http://www.china.com/",
    "http://www.so.com/",
    "http://www.chinadaily.com.cn/",
    "http://www.zhihu.com/"
];

superagent.get(data[0]).on
