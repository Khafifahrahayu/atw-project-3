const { v4: uuidv4 } = require('uuid')

const ulasan = require('../models/ulasan')

module.exports = {
	index: function(request, response){
		response.render('pages/ulasan/index', {ulasans: ulasans})
	},

}