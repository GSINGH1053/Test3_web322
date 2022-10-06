var express = require("express");
var app = new express();
var path = require("path");
var HTTP_PORT = process.env.PORT || 8080;

var on_http = function(){
    console.log("Server is listening on port: " + HTTP_PORT);
}
 

//localhost:8080/images/dog.png
app.use(express.static(_dirname + "/data_prep.js"));

/*  http://localhost:8080 */
app.get("/", (req, res)=>{
    let resText = "<h3>DECLARATION </h3>";
    resText += "<a href='/headers'> Go Headers </a>";
    resText += "The rest text is displayed in paragraph as shown in screenshot<br><br>"; 
    resText += "I acknowledge the colleges academic integrity policy- and my own integrity-remain in effect whether my work is done remotely or onsite. Any test or assignmnet is an act of trust between me and my instructor. and especially with my classmates... even when no one is watching. I declare i will not break that trust.<br><br>"; 
    resText += "Name: GURTARNJIT SINGH<br><br>";
    resText += "Student Number: 156805210<br>";
    resText += "<a href = '/CPA'>CLICK TO VISIT CPA Students </a> <br>";
    resText += "<a href = '/HIGH GPA'>CLICK TO see who has the highest GPA </a> <br>"; 
    res.send(resText);
});

/* http://localhost:8080/headers   */
app.get("/headers", (req, res)=>{
    const headers = req.headers;
    let resText = "<br>";
    resText += "<a href='/'> CLICk TO VISIT CPA STUDENTS</a>";
    // stringfy headers obj and concat with resText
    resText = JSON.stringify(headers) + "<br> "+ resText; 
    res.send(headers);
   // res.send(resText);
});

/*  http://localhost:8080/contact */
/* app.use((req, res)=>{
    res.status(404).send("Error 404: Page not found.");
}); */


// handle 404 error
// app.get('*', function(req, res){
//     res.status(404).send("Error: page not found");
// });

// 404 customized page
app.use((req,res)=>{
    res.status(404).send("Page Not Found!");
    // res.status(404).sendFile(path.join(__dirname,"/views/404.html"));
    //res.status(404).redirect("https://www.google.com/");
    //res.status(404).redirect("/"); // back to home root
 });
app.listen(HTTP_PORT, on_http);
