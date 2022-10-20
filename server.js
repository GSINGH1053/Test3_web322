/*link to cyclic-https://bright-leg-warmers-worm.cyclic.app/ */

var path = require("path");
var express = require("express");
var app = express();
var HTTP_PORT = process.env.PORT || 8080;
 var data=require("./data_prep");
 app.use(express.static('public'));
 app.get("/", function(req,res){
     res.send("<h2>Declaration</h2>"+
     "<p>The rest text is diplayed in the paragraph as shown in the screenshot.<br> I acknowledge the College's academic integrity policy - and my own integrity - remain in effect whether my work is done remotely or onsite. Any test or assingnment is in act of trust between me and my instructor, and specially with my classmates... even when no one is watching. I Declare I will not break that trust.<br/>Name: Damanjot Singh<br />Student Number: 148285216<br /><a href='/cpa'>Click to visit CPA Students.</a><br><a href='/cpa'>Click to see who has the highest GPA.</a></p>");
 });
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}
app.use(express.static('public'));
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"/views/home.html"));
});
app.get("/CPA", function(req,res){
    data.cpa().then(function(data){
        res.json(data);
    }).catch(function(err){
       res.json({message: err});
    });
});

app.get("/highGPA", function(req,res){
    data.highGPA().then(function(data){
        res.json(data);
    }).catch(function(err){
       res.json({message: err});
    });
});
app.get('*', function(req, res){
    res.send('Error 404: page not found', 404);
  });