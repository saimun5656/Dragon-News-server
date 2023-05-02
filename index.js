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
 app.get('/news/:id',(req,res)=>{
   const id=req.params.id;
   const selectedNews=news.find(n=>n._id===id)
   res.send(selectedNews)
 })
 app.get('/category/:id',(req,res)=>{
   const id=parseInt(req.params.id);
   
   if(id){
      const selectedNewsCategory=news.filter(n=>parseInt(n.category_id)===id)
      res.send(selectedNewsCategory)
   }
   else
       res.send(news)
 })

 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
