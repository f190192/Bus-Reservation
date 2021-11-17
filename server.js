const express = require('express');
const expressLayouts = require("express-ejs-layouts");
const mongoose = require('mongoose');
const {MONGO_URI} = require('./config');
const passport = require("passport");
const flash = require("connect-flash");
const session = require("express-session");
var path = require("path");

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
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
// Express body parser
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
      secret: "secret",
      resave: true,
      saveUninitialized: true
    })
  );

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.student_add_success_msg = req.flash("student_add_success_msg");
  res.locals.student_del_success_msg = req.flash("student_del_success_msg");
  res.locals.student_update_success_msg = req.flash(
    "student_update_success_msg"
  );
  res.locals.error = req.flash("error");
  next();
});


//user routes

//app.use("/", require("./routes/index.js")); for welcome screen 
app.use("/users", require("./routes/api/users.js"));
const port = 3000;

app.listen(port,()=> console.log(`server is running at port ${port}.`));