const express = require('express'),
  router = express.Router(),
  v1Router = require('./v1');

router.use('/v1', v1Router);
console.log("hello")
console.log("hello")
console.log("hello")
let i = 1
if(true){
  if(i == 1){
    console.log("hello")
  }
}
let j = 1
if(true){
  if(j == 1){
    console.log("hello")
  }
}
let k = 1
if(true){
  if(k == 1){
    console.log("hello")
  }

module.exports = router;
