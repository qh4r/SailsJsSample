/**
* Things.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    test:{
      type: 'string'
    },
    owner:{
      model: 'User'
    },
    //leastFavoriteOf: {
    //  model: 'User',
    //}
  }

};

