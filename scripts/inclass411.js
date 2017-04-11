module.exports = {
  create: create,
  destroy: destroy
};

var json = require('../../lib/form-json');

function create(req, res, db) {
  json(req, res, function(req, res) {
    var username = req.body.username;
    var password = req.body.passwordl
    db.get("SELECT * FROM users WHERE username=?", [username], function(err, user) {
      if (err) {
        console.error(err);
        res.statusCode = 500;
        res.end("Server error");
        return;
      }
      if (!user) {
        // username not in database
        return;
      }
      var cryptedPass = encryption.digest(password + user.salt);
      if(cryptedPass != user.cryptedPassword) {
        // invalid user confirmed
      }
      else {
        
      }
    })
  })
}
