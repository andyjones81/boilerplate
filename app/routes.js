const express = require('express')
const router = express.Router()

var home_Controller = require('./controllers/homeController.js')

router.get('/', home_Controller.home_get);

module.exports = router
