/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  findOne: function (req, res) {
    User.findOne({
      name: req.param('username')
    }).exec(function (err, user) {
      if (err) return res.negotiate(err);

      //subscribe to socket
      if (user) {
        //User.subscribe(req, user.id);
        Things.find({
          owner: user.id
        }).exec(function (err, things) {
          if (err) res.negotiate(err)

          return res.view('test', {
            user: user,
            things: things
          });
        });
      }
      else {
        return res.view('test', {
          user: user
        });
      }
    })
  }
};

