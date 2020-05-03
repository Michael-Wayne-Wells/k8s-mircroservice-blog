const express = require('express');
const app = express();

app.get('/posts', (req, res)=> {});
app.post('/posts', (req,res)=>{});
app.lister(4000, ()=>{
  console.log('Listening on 4000');
});
