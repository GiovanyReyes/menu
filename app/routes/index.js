const router = require('express').Router()
const siteRoutes = require('./site.routes')
const contactRoutes = require('./contact.routes')
const travelRoutes = require('./travel.routes')



// reginster routes //////////////////

router.use('/api/contact', contactRoutes)
router.use('/api/travel', travelRoutes)
router.use(siteRoutes) // need to have this last!
// router.use('/api/maps', mapRoutes)



// Handle API 404
router.use('/api/*', function(req, res, next){
    res.sendStatus(404)
})


// Handle API 500

router.use(function(req, res, next){
    if(!err){
        return next()
    }
    console.log(err.stack)
    res.sendStatus(500)
})

module.exports = router