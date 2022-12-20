const messagecontrollers = require('./messages.controllers')

const postMessage = ( req, res ) => {
    const userId = req.user.id
    const conversationId = req.params.conversation_id
    const { message } = req.body

    messagecontrollers.createMessage({ userId, conversationId, message })
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message, fields: {
                message: 'Text'
            }})
        })
}

module.exports = {
    postMessage
}