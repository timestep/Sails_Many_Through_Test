/**
* RolePerm.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

// RolePerm.js
module.exports = {
  identity      : 'RolePerm',
  tableName     : 'role_perm',
  // migrate       : 'safe',
  schema        : true,
  autoPK        : false,
  autoCreatedAt : false,
  autoUpdatedAt : false,

  attributes : {

    // Due to a bug in the schema generator this seems to be needed at the
    // model level but not on the actual database.
    id: {
      type: 'integer',
      primaryKey: true
    },

    roleid : {
      model: 'role',
      columnName: 'role_id'
    },

    permid : {
      model: 'permission',
      columnName: 'perm_id'
    },

    permission: {
    	type: 'string'
    }

  }

};