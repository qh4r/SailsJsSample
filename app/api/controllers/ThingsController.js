/**
 * ThingsController
 *
 * @description :: Server-side logic for managing things
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  giveToUser: function (req, res) {
    Things.update({id: req.param('id')}, {
      owner: req.param('owner')
    }).exec(function (err) {
      if (err)return res.negotiate(err);

      res.ok();
    })
  }
};

