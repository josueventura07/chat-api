const uuid = require('uuid')

const Conversations = require('../models/conversations.models')
const Participants = require('../models/participants.models')

const createConversation = async (obj) => {
    const newConversation = await Conversations.create({
        id: uuid.v4(),
        title: obj.title,
        imgURL: obj.imgURL,
        userId: obj.userId
    })

    const participant1 = await Participants.create({
        id: uuid.v4(),
        userId: obj.ownerId,
        conversationId: newConversation.id
    })

    const participant2 = await Participants.create({
        id: uuid.v4(),
        userId: obj.participantId,
        conversationId: newConversation.id
    })

    return {
        newConversation,
        participant1,
        participant2
    }
}