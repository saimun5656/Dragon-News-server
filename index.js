const express = require('express'); ;
const categories= require('./data/categories.json');
const cors=require('cors')
const news= require('./data/data.json')
const app = express() ;
const port =5000;
 app.use(cors())
 app.get('/',(req,res)=>{
    res.send('data.json')
 })
 app.get('/categories',(req,res)=>{
    res.send(categories)
 })
 app.get('/news',(req,res)=>{
    res.send(news)
 })
 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
