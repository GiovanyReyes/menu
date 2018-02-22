// modules ===============================
const express = require('express')
const app = express()
require('dotenv').config()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const passport = require('passport')
const session = require('express-session')
const path = require('path') // only innate node package
const expressValidator = require('express-validator')

console.log('wadup')
app.use('/public', express.static(path.join(__dirname, 'public'), {
    fallthrough: false // whats this do?
}))


//handle static File 404
app.use(function(err, req, res, next) {
    if (err) console.error
    res.sendStatus(404)
})

// configuration =================

// set our port
const port = process.env.PORT || 1234

// connect ot mongo DB 
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017')

// if the Node preocess ends, close the mongoose connection
process.on('SIGNIT', function(){
    mongoose.connection.close(function (){
        console.log('Mongoose default connection disconnected through app termination')
        process.exit(0)
    })
})

// require('./config/passport')(passport) // pass passport for configuration

app.use(bodyParser.json())
app.use(expressValidator())

// parse application /x-www-form-urlencoded
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}))

// x-http-method-verride header in the req, simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'))


//passport config
app.use(session({
    secret: process.env.PASSPORT_SESSION_SECRET || 'abc1234',
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize())

// routes =========================
app.use(require('./app/routes'))


// start app ===================================
app.listen(port, () => {
    console.log(`Magic happens on port ${port}`)  // notice backwards slashes
})

var bar = "toast"
function AnimationSequence(bar){
  
  function animate(){
    conole.log(bar)
  }
}