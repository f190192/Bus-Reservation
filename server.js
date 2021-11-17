const express = require('express');
const expressLayouts = require("express-ejs-layouts");
const mongoose = require('mongoose');
const {MONGO_URI} = require('./config');

const app = express();

//bodyParser middleware
app.use(express.json());

//connect to mongo db
mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
})

    .then(()=> console.log('mongo db connected'))
    .catch(err => console.log(err))

// EJS
app.use(expressLayouts);
app.set("view engine", "ejs");

//user routes

//app.use("/", require("./routes/index.js")); for welcome screen 
app.use("/users", require("./routes/api/users.js"));
const port = 3000;

app.listen(port,()=> console.log(`server is running at port ${port}.`));