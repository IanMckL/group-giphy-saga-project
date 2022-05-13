const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
// App PORT set with production check
const PORT = process.env.PORT || 5000;

// Route includes
const favoriteRouter = require('./routes/favorite.router');
const categoryRouter = require('./routes/category.router');
const { default: axios } = require('axios');

//API
API_KEY = process.env.API_KEY 
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('build'));

// Routes
app.get(`/giphy/:search`, (req,res)=>{

 axios({
    method: 'GET',
    url: `http://api.giphy.com/v1/gifs/search?q=${req.params.search}&api_key=${API_KEY}&limit=50&rating=g`
 })
 .then((response)=>{
   res.send(response.data)
 })
 .catch((error)=>{
   console.log(error)
   res.send(error)
 })

})


app.use('/api/favorite', favoriteRouter);
app.use('/api/category', categoryRouter);

// Listen
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
