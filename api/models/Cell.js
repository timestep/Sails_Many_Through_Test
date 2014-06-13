/**
* Cell.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	
	tableName:'cell',
  
  attributes: {

	  name: 'STRING',

    users: {
      collection: 'user',
	    via: 'cells',
	    through:'usercell'
		}

  }

}

