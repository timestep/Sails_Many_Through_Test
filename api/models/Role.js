/**
* Role.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

// Role.js
module.exports = {
  identity      : 'Role',
  tableName     : 'role_master',
  // migrate       : 'safe',
  schema        : true,
  autoPK        : false,
  autoCreatedAt : false,
  autoUpdatedAt : false,

  attributes: {

    id : {
      columnName : 'rolefk',
      type       : 'string',
      required   : true,
      primaryKey : true,
      unique     : true,
      uuidv4     : true
    },

    // A Role can have many permissions through the roleperm model
    permissions : {
      collection : 'permission',
      through: 'roleperm'
    }

  }
};