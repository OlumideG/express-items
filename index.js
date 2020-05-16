const express = require('express');
const app = express();
const userRoutes = require("./routes/userRoute");
const bodyParser = require("body-parser");

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(userRoutes);


app.get('/', (req, res) => { 
    response.send("start from /items")
});



app.listen(3000, ()=>{
    console.log('Server started on Port 3000')
})