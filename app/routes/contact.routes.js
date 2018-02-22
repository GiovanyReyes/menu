const router = require('express').Router()
const contactController = require('../controllers/contact.controller')()


router.post('/', contactController.postEmail)
router.delete('/', contactController.removeById)


module.exports = router 