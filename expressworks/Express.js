const path = require('path')
const express = require('express')
const app = express()
app.get('/home', function(req,res){
    res.end('Hello World!')
})
//slug node +pg +express
/*
app.get('/part4answer1', function(req,res){
    res.end(`
    <h1 style="color:red">Hello World</h1>
    `)
})
*/
app.listen(process.argv[2])