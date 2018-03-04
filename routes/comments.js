const express = require('express')
const commentsRouter = express.Router()
const commentsController = require('../controllers/commentsController')
const viewsController = require('../controllers/viewsController')
// commentsRouter.get('/', (req, res) => {
//   res.send('Hi again')
// })

commentsRouter.get('/', viewsController.showForm)
// commentsRouter.get('/', (req, res) => {
//   res.render('updateComment')
// })
commentsRouter.post('/', commentsController.create, commentsController.getAll, viewsController.showComments)

commentsRouter.put('/', commentsController.update, commentsController.getAll, viewsController.showComments)

commentsRouter.post('/', commentsController.create)

commentsRouter.put('/', commentsController.update, viewsController.showComments)

commentsRouter.delete('/:id', commentsController.delete, commentsController.getAll, viewsController.showComments)

module.exports = commentsRouter
