"use strict";
exports.__esModule = true;
var user_1 = require("./user");
exports.handleAuthetication = function (req, resp) {
    var user = req.body;
    if (isValid(user)) {
        var dbUser = user_1.users[user.email];
        resp.json({ name: dbUser.name, email: dbUser.email });
    }
    else {
        resp.status(403).json({ message: 'Dados Inv�lidos' });
    }
};
function isValid(user) {
    if (!user) {
        return false;
    }
    var dbUser = user_1.users[user.email];
    return dbUser !== undefined && dbUser.matches(user);
}
