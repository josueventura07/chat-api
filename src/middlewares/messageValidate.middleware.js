const { findAllMessages } = require('../messages/messages.controllers')

const messageValidate = ( req, res, next ) => {
    const conversationId = req.params.message_id
    const userId = req.user.id


    findAllMessages(userId, conversationId)
        .then(data => {
            if(data) {
                next()
            } else {
                res.status(400).json({message: "You aren't authorized to watch this conversation"})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

module.exports = messageValidate