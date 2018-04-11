const express = require ('express');
const router = express.Router();
var Twitter = require('twitter');

const client = new Twitter({
  consumer_key: 'f33BDfteJvCIP3Antg3TmBYpq',
  consumer_secret: 'ztaY1GKd4coTyMK3eAwRhAvzEqMaxhzWjdJZ2BWuPlCqsxcIN7',
  access_token_key: '925041336947916800-8xUc6QKrwPFeTgGBlOtstf4iFK4tqex',
  access_token_secret: 'KfcIbGG3hGbDvNxy4NiHctU51s7qTMV9ZIn3W4Iao1feL'
});


//get the tweets list------
router.get('/getposts/:target-:num', function(req,res){
  let params = {id:req.params.target,count:req.params.num};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      res.send(tweets);
    }
    else{
      res.send(error);
    }
  })
});




module.exports = router;
