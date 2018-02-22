const path = require('path')
const apiPrefix = 'api/travel'
const responses = require('../models/responses')
const travelModel = require('../models/travel')
const travelService = require('../services/travel.service')({
    modelService: travelModel
})


module.exports = travelController

function travelController() {
    return {
        getAll,
        insert,
        removeOne,
        updateOne
    }

    function updateOne(req, res){
        let queryCondition = {
            _id: req.params.id
        }
        travelService.updateOne(queryCondition, req.body)  // req.body how & when we send data toupdate
        .then((travel)=>{
            const responseModel = new responses.ItemResponse()
            responseModel.item = travel
            res.status(204)
                .json(responseModel)
        }).catch((err)=>{
            res.status(500).send(new responses.ErrorResponse(err))
        })

    }
     
    function removeOne(req, res) {
        let queryCondition = {
            _id: req.params.id
        }
        travelService.removeOne(queryCondition)
            .then((travel) => {
                const responseModel = new responses.ItemResponse()
                responseModel.item = travel
                res.json(responseModel)
            }).catch((err) => {
                return res.status(500).send(new responses.ErrorResponse(err))
            })
    }

    function getAll(req, res) {
        travelService.getAll()
            .then((travels) => {
                const responseModel = new responses.ItemResponse()
                responseModel.items = travels
                res.json(responseModel)
            }).catch((err) => {
                res.status(500).send(new responses.ErrorResponse(err))
            })
    }

    function insert(req, res) {
        travelService.insert(req.body)
            .then((travel) => {
                const responseModel = new responses.ItemResponse()
                responseModel.items = travel
                res.json(responseModel)
            }).catch((err) => {
                res.status(500).send(new responses.ErrorResponse(err))
            })
    }
}