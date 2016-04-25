module.exports = function (req, res, next) {
    if(!req.session.user)
        next(new Error(401));

    switch (req.url) {
        case '/admin-panel':
            if(req.session.user.roleId != 1) // roleId: 1 - admin, 2 - user
                next(new Error(401));
            break;
    }

    next();
};