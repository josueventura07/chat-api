const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Users = require('../models/users.models')
const Conversations = require('../models/conversations.models')
const Messages = require('../models/messages.models')


const Participants = db.define('participants', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id',
            model: Users
        }
    },
    conversationId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            key: 'id',
            model: Conversations
        }
    },
    
})

module.exports = Participants
