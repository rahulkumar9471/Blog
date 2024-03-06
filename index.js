const express = require('express');
const connectDB = require('./db/connection');
const userRouter = require('./routes/user');


const app = express();
app.use(express.json());
const PORT=5000;

app.use('/api/v1',userRouter);



app.listen(PORT,() => {
    console.log("listening on port " + PORT);
});

connectDB();

app.get("/", (req, res) => {
    res.send("Hello World!");
})
 
