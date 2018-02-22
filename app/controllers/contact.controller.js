const path = require('path')
const apiPrefix = '/api/contact'
const responses = require('../models/responses')
const emailModel = require('../models/email')
const contactService = require('../services/contact.service')({
    modelService: emailModel
})
module.exports = contactController


function contactController() {
    return {
        postEmail,
        // postContact
        removeById
    }

    function postEmail(req, res) {
        contactService.insert(req.body)
            .then((email) => {
                console.log('in then')
                const responseModel = new responses.ItemResponse()
                responseModel.item = email
                res.status(201)
                    .location(path.join(apiPrefix, email._id.toString()))
                    .json(responseModel)
            })
            .catch((err) => {
                return res.status(500).send(new responses.ErrorResponse(err))
            })
    }

    function removeById(req, res) {
        let queryCondition = {
            _id: req.params.id
        }
        contactService.removeOne(queryCondition)
            .then((email) => {
                const responseModel = new responses.ItemResponse()
                responseModel.item = email
                res.json(responseModel)
            }).catch((err) => {
             return res.status(500).send(new responses.ErrorResponse(err))
            })
    }

    // function postContact(req, res) {
    //     contactService.insert(req.body)
    //         .then((contact) => {
    //             const responseModel = new responses.ItemResponse()
    //             responseModel.items = contact
    //             res.status(201)
    //         }).catch((err) => {
    //             res.status(500).send(new responses.ErrorResponse(err))
    //         })
    // }
}