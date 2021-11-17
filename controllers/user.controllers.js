const bcrypt = require("bcryptjs");
const passport = require("passport");

const User = require("../models/Posts");

exports.login = (req, res) => res.render("login", {layout: "layout"}); //layout is an ejs file in which we will write html of components which will be common in all pages.
// "register" will be the name of the ejs file containing the view for register.

exports.register = (req, res) => res.render("register", {layout: "layout"});

exports.Register_User = (req, res) => {
    const { name, email, password, contactNo, address } = req.body;
    let error = [];
    console.log(`Server started on port ${name}`);
    if(!name || !email || !password || !contactNo || !address)
    {
        error.push({ msg: "Please Enter Data in all the fields." });
    }

    if(password.length < 6)
    {
        error.push({ msg: "Length of the Password must be atleast 6 characters." });
    }

    if(error.length > 0)
    {
        res.render("register",{ error, name, email, password, contactNo, address });
    }
    else
    {
        User.findOne({ email: email }).then(user => {
            if(user)
            {
                error.push({ msg: "Email already exists" });
                res.render("register",{ error, name, email, password, contactNo, address });
            }
            else
            {
                const newUser = new User({ name, email, password, contactNo, address });
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if(err) throw err;
                        nwUser.password = hash;
                        newUser
                        .save()
                        .then(user => {
                            req.flash(
                                "success_msg",
                                "You have been registered, now you can login."
                            );
                            res.redirect("/users/login");
                        })
                        .catch(err => console.log(err));
                    });
                });
            }
        });
    }
};

exports.Login_User = (req, res, next) => {
    passport.authenticate("local", {
        successRedirect: "/dashboard",
        failureRedirect: "/users/login",
        failureFlash: true
    })(req, res, next);
};

exports.logout = (req, res) => {
    req.logout();
    req.flash("success_msg", "You are logged out");
    res.redirect("/users/login");
};