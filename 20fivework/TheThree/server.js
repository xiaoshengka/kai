// const { response } = require('express');
const express = require('express');
// const { request } = require('http');
const app = express();

app.all('/note', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin','*');
    const data= {data:"发送完成"};
    response.send(JSON.stringify(data));
})

app.listen(9077, () => {
    console.log("监听中...");
})