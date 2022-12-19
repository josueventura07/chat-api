const conversationController = require('./conversations.controllers')

const getAllConversations = ( req, res ) => {
    conversationController.findAllConversations()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const getConversationById = ( req, res ) => {
    const id = req.params.conversation_id
    conversationController.findConversationById(id)
        .then(data => {
            if(data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({message: err.message})
        })
}

const postConversation = ( req, res ) => {
    const { title, imgUrl, participantId } = req.body
    const ownerId = req.user.id
    conversationController.createConversation({ title, imgUrl, participantId, ownerId})
        .then(data => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({message: err.message, fields: { 
                title: 'string',
                imgUrl: 'string',
                participantId: 'UUID'
            }})
        })
}   

module.exports = {
    getAllConversations,
    postConversation
}