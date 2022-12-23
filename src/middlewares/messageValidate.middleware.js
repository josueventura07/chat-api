const { findParticipantMessage } = require('../participants/participants.controllers')

const messageValidate = ( req, res, next ) => {
    const messageId = req.params.message_id
    const userId = req.user.id


    findParticipantMessage(userId, messageId)
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