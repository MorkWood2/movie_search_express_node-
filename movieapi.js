const express = require('express');

const app = express();

const request = require('request');

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
  res.render('search');
})

app.get('/request', (req, res) =>{
  let searchQuery = req.query.search;

  request('http://www.omdbapi.com/?s=' + searchQuery +'&apikey=ae26ef0b', (error, response, body)=>{
    if(!error && response.statusCode === 200){
      let data = JSON.parse(body);
      res.render('results', {data:data})
    }
  });
});
app.listen(3000, ()=>{
  console.log('App started')
})
