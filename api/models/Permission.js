/**
* Permission.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
// Permission.js
module.exports = {
  identity      : 'Permission',
  tableName     : 'perm_master',
  // migrate       : 'safe',
  schema        : true,
  autoPK        : false,
  autoCreatedAt : false,
  autoUpdatedAt : false,

  attributes : {

    id : {
      columnName : 'permfk',
      type       : 'string',
      required   : true,
      primaryKey : true,
      unique     : true,
      uuidv4     : true
    },

    // A Permission can belong to many roles using the roleperm model
    roles : {
      collection: 'role',
      through: 'roleperm'
    }

  }

};
