var http= require('http')
var queryString=require('querystring')
var fs =require('fs')
var  path =require('path')

var postData =queryString.stringify({
    'lan':'zh',
    'ie':'UTF-8',
    'spd':5, //表示朗读的速度。9 表示最快，1表示最慢
    'text':'小宝贝'
})

