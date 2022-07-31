

var express = require('express');
var app = express();
//My name is lakhan

app.get("/",(req,resp)=>{
    resp.send(
        "<h1>Vijay Sales </h1>"
        +"<hr/>"
        +"<h3>Smart Devices for sale</h3>"
        + "<br/>"
        + "<ol>"
        +"<li>Laptops</li>"
        +"<li>Mobile Phones</li>"
        +"<li>Hololgraphic Devices</li>"
        +"<li>Samrt Watches</li>"
        +"<li>Gaming Consoles</li>"
        + "</ol>"
    )
});

app.get("/aboutus",(req, res)=>{
    res.send(
            "<h1>Vijay Sales </h1>"
            +"<hr/>"
            +"<h3>Doing ordinary things extraordinarily</h3>"
            + "<br/>"
            + "<ol>"
            +"<li>Chief Mentor: Ravi Tambade</li>"
            +"<li>Director: Shubhangi Tambade</li>"
            +"<li>Subject Matter Expert: Rohit Gore</li>"
            + "</ol>"
    );
});

app.get("/login",(req,resp)=>{
    resp.send(
        "<h1>Vijay Sales </h1>"
        + "<h3>Login</h3>"
        +"<hr/>"
        +"<form>"
        + "<input/>"
        + "<br/>"
        +"<input/> "
        +"<button>login</button>"
        + "</form>"
    )
})

// app.get("/bhushan",(req, res) => {
//     res.send(
//         "<h1>Name : Bhushan Jagdish Lokhande </h1>" 
//         + "<h2> Address : Urjanagar, Chandrapur , Maharashtra -- 442404 </h2>"
//     );
// });

app.listen(4000);
console.log("Application running on port 4000");