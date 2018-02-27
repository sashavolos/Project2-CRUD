const express = require('express')
const commentsRouter = express.Router()
const commentsController = require('../controllers/commentsController')
// const viewsController = require('../controllers/viewsController')


commentsRouter.post('/comments/:id', commentsController.create)

commentsRouter.put('/comments/:id', commentsController.update)

commentsRouter.delete('/:id', commentsController.delete)

module.exports = commentsRouter
