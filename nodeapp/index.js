const express = require('express'); //imports the express package 
const app = express(); // creating a new app 
const calcModule = require('./calcModule');


// middleware for body 
app. use (express.json())
app.use(express.urlencoded({ extended: false }))


// Get values from body
app.post( '/calcModule', function(req, res) {
const val1 = parseInt(req.body.val1);
const val2= parseInt(req.body.val2);
const action = req.body.action; 
console.log(val1,val2,action);

if (action ==="add"){
    console.log(calcModule.add(val1,val2));
}
else if (action ==="sub"){
    console.log(calcModule.sub(val1,val2));


}
else if (action ==="mul"){
    console.log(calcModule.mul(val1,val2));


}
else if (action ==="div"){
    console.log(calcModule.div(val1,val2));


}
else{ console.log("ERROR");
}
});







app.listen(5000,function(){
    console.log( 'Server is running on port 5000... ');
});
