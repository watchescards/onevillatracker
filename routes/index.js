var express = require('express');

var async = require("async");
var router = express.Router();


/* GET home page. */



router.get('/',async function(req, res, next) {
  var d = new Date();
var n = d.getUTCHours();
console.log(n);
if(n>13  || n<4){
  return res.render('index',{a:true})
// return res.render('index',{err:false});
}else{
    return res.render('index',{a:false})
  // return res.render('index',{err:false});
}
    
});







module.exports = router;
