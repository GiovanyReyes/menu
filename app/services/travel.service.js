module.exports = travelService

function travelService(options) {
    let Travel

    if (!options.modelService) {
        throw new Error('!options.modelService required')
    }
    Travel = options.modelService

    return {
        getAll,
        insert,
        removeOne,
        updateOne
    }

    function getAll() {
        return Travel.find() //mongoose .find()
    }

    function updateOne(queryCondition, doc) {
        return Travel.findOneAndUpdate(queryCondition, {
                $set: doc  //set docuemnt to the doc we send! 
            }, {
                new: true  //boolean say to return update document
        }) 
}

function insert(document) {
    let travel = new Travel(document)
    return travel.save() //saves mongoose
}

function removeOne(queryCondition) {
    console.log('delete service yup')
    return Travel.findOneAndRemove(queryCondition)
}


}