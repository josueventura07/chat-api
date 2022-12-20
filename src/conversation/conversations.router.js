const router = require('express').Router()
const conversationsevices = require('./conversations.services')
const messagesServices = require('../messages/messages.services')
const passportJWT = require('../middlewares/auth.middleware')
const participantValidate = require('../middlewares/participantValidate.middleware')

router.route('/')
    .get(passportJWT.authenticate('jwt', {session: false}), conversationsevices.getAllConversations)
    .post(passportJWT.authenticate('jwt', {session: false}), conversationsevices.postConversation)

router.route('/:conversation_id')
    .get(passportJWT.authenticate('jwt', {session: false}), conversationsevices.getConversationById)
    .patch(passportJWT.authenticate('jwt', {session: false}), conversationsevices.patchConversation)
    .delete(passportJWT.authenticate('jwt', {session: false}), conversationsevices.deleteConversation)

router.route('/:conversation_id/messages')
    .post(passportJWT.authenticate('jwt', {session: false}), participantValidate, messagesServices.postMessage)    

module.exports = router    