// http =require("http");
// url=require("url");
// const main=(req,res)=>{
//     const parsedUrl=url.parse(req.url);
//     const path=parsedUrl.pathname;
//     if(path==="/")
//     {
//     res.writeHead(200,{"content-type":"text/txt"})

//     res.write("Welcome to node js server!\n") 
//     res.end("this is second line");
//     } else if (path==="/about"){
//         res.writeHead(200,{"content-type":"text/html"})
//         res.write("<h3>This is about page</h3>")
//         res.end("<p>In KIET MCA Section D</p>")
//     }

// };
// const server=http.createServer(main); 
// server.listen(3000,(error)=>{
//    if(error){
//     console.log(error)
//    } 
//    console.log("Running server on:http://127.0.0.1:3000")
// })



// ****************************Function middleware
// const express = require('express');
// const app = express();

// // Middleware function
// function myMiddleware(req, res, next) {
//     console.log("Middleware executed!");
//     next();
// }

// app.use(myMiddleware);

// app.get('/', (req, res) => {
//     res.send("Hello World!");
// });

// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });


// *************************logger middleware
javascript
const express = require('express');
const app = express();

// Logger Middleware
function logger(req, res, next) {
    console.log("Method:", req.method);
    console.log("URL:", req.url);
    next();
}

app.use(logger);

// Home Route
app.get('/',(req, res) => {
    
    res.send("Welcome to Home Page");
    
});

// About Route
app.get('/about', (req, res) =>{
    res.send("Welcome to About Page");
});

app.listen(3000,  () => {
    console.log("Server running on port 3000");
});

