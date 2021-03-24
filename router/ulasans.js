const express = require('express')
const router = express.Router()

const ulasancontroller = require('../controllers/komentar')

 router.route('/ulasans')
 	.get(ulasancontroller.index)
 	.post(ulasancontroller.store)

router.get('/ulasans', ulasancontroller.index)

module.exports = router