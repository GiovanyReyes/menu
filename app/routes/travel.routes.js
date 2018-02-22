const router = require('express').Router()
const travelController = require('../controllers/travel.controller')()



router.get('/', travelController.getAll)
router.post('/travel', travelController.insert)
router.delete('/:id', travelController.removeOne) // ' : ' puts what ever comes after in req.params
router.put('/:id', travelController.updateOne)

module.exports = router