/**
* Permission.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName: 'permission',
  tables: ['user', 'item'],
  junctionTable: true,

  attributes: {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: 'integer'
    },
    user_cells: {
      columnName: 'user_cells',
      type: 'integer',
      foreignKey: true,
      references: 'user',
      on: 'id',
      via: 'cell_users',
      groupBy: 'user'
    },
    cell_users: {
      columnName: 'cell_users',
      type: 'integer',
      foreignKey: true,
      references: 'cell',
      on: 'id',
      via: 'user_cells',
      groupBy: 'cell'
    },
    permission: 'string'
  }
};

