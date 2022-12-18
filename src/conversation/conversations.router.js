const router = require('express').Router()
const conversationsevices = require('./conversations.services')
const passportJWT = require('../middlewares/auth.middleware')

router.route('/')
    .get(passportJWT.authenticate('jwt', {session: false}), conversationsevices.getAllConversations)
    .post(passportJWT.authenticate('jwt', {session: false}), conversationsevices.postConversation)

module.exports = router    