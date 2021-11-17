module.exports = {
    ensureAuthenticated: function(req, res, next)
    {
        if(req.isAuthenticated())
        {
            return next();
        }
        req.flash('error_msg', 'You need to login to view this site');
        res.redirect('/users/login');
    },
    forwardAuthenticated: function(req, res, next)
    {
        if(!req.isAuthenticated())
        {
            return next();
        }
        res.redirect('/dashboard');
    }
};