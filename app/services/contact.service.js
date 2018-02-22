module.exports = contactService

function contactService(options) {
    let Email

    if (!options.modelService) {
        throw new Error('Options.modelService is required')
    }
    Email = options.modelService


    return {
        insert,
        removeOne
    }

    function insert(document) {
        console.log('im about insert')
        console.log(document)
        let email = new Email(document)
        return email.save()
    }

    function removeOne(queryCondition) {
        return Email.findOneAndRemove(queryCondition)
    }
}