// 1st step require express
const express = require('express');
const app = express();
// srtting port 
const port = 8000;



// 2nd step listening to app
app.listen(port,function(err){
    if(err){console.log(`Error in running the server : ${err}`)};

    console.log(`server is running on : ${port}`);
});