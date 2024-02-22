const express = require('express');
const app = express();
const port = 8080;
app.listen(port, ()=>{
    console.log(`App is running over the port`, port);
});
app.get('/', (req, res) => {
    res.send(`<h2>Hello Shubham, You're Awesome</h2>`)
});
