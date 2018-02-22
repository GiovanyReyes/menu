const router = require('express').Router()
const siteController= require('../controllers/sites.controller')

// frontend routes ====================
// route to handle all angular requests

router.get('*', siteController.default)

module.exports = router