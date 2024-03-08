//import express
const express = require('express');
//import Database
const connectDB = require('./db/connection');
//import Routes
const userRouter = require('./routes/user');

//use express function
const app = express();
//convert data into json
app.use(express.json());
const PORT=5000;

// routes mounts
app.use('/api/v1',userRouter);

app.listen(PORT,() => {
    console.log("listening on port " + PORT);
});

connectDB();

app.get("/", (req, res) => {
    res.send("Hello World!");
})
 
