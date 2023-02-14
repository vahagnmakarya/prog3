var express = require("express");
var app = express();

app.use(express.static("mymodules"));

app.get("/", function(req, res){
   res.redirect("index.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});

// var express = require("express");
// var app = express();


// app.get("/", function(req, res){
//    res.redirect('https://google.com');
// });
// app.get("/*", function(req, res){
//    res.redirect('https://www.hostinger.com/tutorials/how-to-fix-error-404');
// });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });