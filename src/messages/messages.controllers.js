const Messages = require('../models/messages.models')
const uuid = require('uuid')
const Participants = require('../models/participants.models')
const Users = require('../models/users.models')

const findAllMessages = async () => {
    const data = await Messages.findAll()
    return data
}

const findMessageById = async (id) => {
    const data = await Messages.findOne({
        where: {
            id: id,
        },
        include: {
            model: Users
        }
    })
    return data
}

const createMessage = async (obj) => {
    const data = await Messages.create({
        id: uuid.v4(),
        userId: obj.userId,
        conversationId: obj.conversationId,
        message: obj.message
    })
    return data
}

const removeMessage = async (userId) => {
    const data = await Messages.destroy({
        where: {
            userId: userId
        }
    })
    return data
}


module.exports = {
    findAllMessages,
    findMessageById,
    createMessage,
    removeMessage
}