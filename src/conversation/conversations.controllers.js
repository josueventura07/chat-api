const uuid = require('uuid')

const Conversations = require('../models/conversations.models')
const Participants = require('../models/participants.models')
const Users = require('../models/users.models')

const findAllConversations = async () => {
    const data = await Conversations.findAll({
        include: {
            model: Participants, //? Este es un Join
                include: {
                    model: Users //? Este es otro Join (se conforma lo que es joins anidados)
            }
        }
    })
    return data
}

const createConversation = async (obj) => {
    const newConversation = await Conversations.create({
        id: uuid.v4(),
        title: obj.title,
        imgUrl: obj.imgUrl,
        userId: obj.ownerId //? Creador de la conversacion (Owner)
    })

    const participant1 = await Participants.create({
        id: uuid.v4(),
        userId: obj.userId, //? Este es el Owner que viene desde el Token
        conversationId: newConversation.id
    })

    const participant2 = await Participants.create({
        id: uuid.v4(),
        userId: obj.participantId, //? Este es el otro usuario que viene desde el body
        conversationId: newConversation.id
    })

    return {
        newConversation,
        participant1,
        participant2
    }
}

module.exports = {
    findAllConversations, 
    createConversation
}