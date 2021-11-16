const bcrypt = require("bcryptjs");
const passport = require("passport");

const user = require("../models/Posts");

exports.login = (req, res) => res.render("register", {layout: "layouts/layout"}); //in place of second layout we will replace it with name of the ejs file which will we create later.

